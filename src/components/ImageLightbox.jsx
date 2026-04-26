import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

/**
 * Fullscreen zoom viewer that animates an image from its origin rect
 * to a centered, enlarged view using a FLIP-style transform, then
 * collapses back when dismissed.
 *
 * Open by passing `src`, `alt`, and `originRect` (a DOMRect from the
 * source <img>'s getBoundingClientRect at click time). Pass `null`/falsy
 * src to keep it closed.
 */
export default function ImageLightbox({ src, alt, originRect, onClose }) {
    const overlayRef = useRef(null);
    const imgRef = useRef(null);
    const [phase, setPhase] = useState('opening');

    const playFlip = useCallback(() => {
        const img = imgRef.current;
        if (!img || !originRect) {
            setPhase('open');
            return;
        }

        const apply = () => {
            const targetRect = img.getBoundingClientRect();
            if (!targetRect.width || !targetRect.height) return;

            const dx =
                originRect.left +
                originRect.width / 2 -
                (targetRect.left + targetRect.width / 2);
            const dy =
                originRect.top +
                originRect.height / 2 -
                (targetRect.top + targetRect.height / 2);
            const scale = Math.min(
                originRect.width / targetRect.width,
                originRect.height / targetRect.height,
            );

            img.style.transformOrigin = 'center center';
            img.style.transition = 'none';
            img.style.transform = `translate3d(${dx}px, ${dy}px, 0) scale(${scale})`;

            void img.offsetWidth;

            img.style.transition = 'transform 420ms cubic-bezier(0.22, 1, 0.36, 1)';
            img.style.transform = 'translate3d(0, 0, 0) scale(1)';
        };

        if (img.complete && img.naturalWidth > 0) {
            apply();
        } else {
            const onLoad = () => apply();
            img.addEventListener('load', onLoad, { once: true });
        }
    }, [originRect]);

    useLayoutEffect(() => {
        if (!src) return undefined;
        setPhase('opening');
        playFlip();
        const id = window.setTimeout(() => setPhase('open'), 440);
        return () => window.clearTimeout(id);
    }, [src, playFlip]);

    const handleClose = useCallback(() => {
        const img = imgRef.current;
        if (!img || !originRect) {
            onClose?.();
            return;
        }

        const targetRect = img.getBoundingClientRect();
        const dx =
            originRect.left +
            originRect.width / 2 -
            (targetRect.left + targetRect.width / 2);
        const dy =
            originRect.top +
            originRect.height / 2 -
            (targetRect.top + targetRect.height / 2);
        const scale = Math.min(
            originRect.width / targetRect.width,
            originRect.height / targetRect.height,
        );

        setPhase('closing');
        img.style.transition = 'transform 320ms cubic-bezier(0.4, 0, 0.2, 1)';
        img.style.transform = `translate3d(${dx}px, ${dy}px, 0) scale(${scale})`;

        const finish = () => onClose?.();
        const id = window.setTimeout(finish, 340);
        img.addEventListener('transitionend', finish, { once: true });
        return () => window.clearTimeout(id);
    }, [originRect, onClose]);

    useEffect(() => {
        if (!src) return undefined;
        const onKey = (e) => {
            if (e.key === 'Escape') handleClose();
        };
        document.addEventListener('keydown', onKey);
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = previousOverflow;
        };
    }, [src, handleClose]);

    if (!src) return null;

    return createPortal(
        <div
            ref={overlayRef}
            className={`imageLightbox imageLightbox--${phase}`}
            role="dialog"
            aria-modal="true"
            onClick={handleClose}
        >
            <button
                type="button"
                className="imageLightboxClose"
                aria-label="Close zoomed image"
                onClick={(e) => {
                    e.stopPropagation();
                    handleClose();
                }}
            >
                <span className="imageLightboxCloseIcon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M6 6L18 18M18 6L6 18"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </span>
            </button>
            <div className="imageLightboxStage">
                <img
                    ref={imgRef}
                    src={src}
                    alt={alt ?? ''}
                    className="imageLightboxImg"
                    onClick={(e) => e.stopPropagation()}
                    draggable={false}
                />
            </div>
        </div>,
        document.body,
    );
}
