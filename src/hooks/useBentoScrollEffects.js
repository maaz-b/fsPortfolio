import { useEffect } from 'react';

function readReducedMotion() {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Scroll-linked reveal + dual-layer parallax for service bento cells.
 * Motion reverses when scrolling up (same pattern as the experience timeline).
 *
 * @param {object} opts
 * @param {React.MutableRefObject<(HTMLElement | null)[]>} opts.itemRefs
 * @param {number} opts.itemCount
 */
export function useBentoScrollEffects({ itemRefs, itemCount }) {
    useEffect(() => {
        if (itemCount < 1) return undefined;

        let cancelled = false;
        let teardown = () => {};

        const id = requestAnimationFrame(() => {
            if (cancelled) return;

            const reduced = readReducedMotion();
            const focalY = () => window.innerHeight * 0.42;

            const clearVars = (el) => {
                el.style.removeProperty('--bento-fg');
                el.style.removeProperty('--bento-bg');
            };

            const update = () => {
                const fy = focalY();
                const vh = window.innerHeight;
                const edge = vh * 0.08;

                for (let i = 0; i < itemCount; i += 1) {
                    const el = itemRefs.current[i];
                    if (!el) continue;

                    const r = el.getBoundingClientRect();

                    if (reduced) {
                        el.classList.add('serviceBentoCell--visible');
                        clearVars(el);
                    } else {
                        const inView = r.bottom > edge && r.top < vh - edge;
                        el.classList.toggle('serviceBentoCell--visible', inView);
                        const mid = r.top + r.height * 0.36;
                        const delta = (mid - fy) * -0.11;
                        el.style.setProperty('--bento-fg', `${delta * 0.42}px`);
                        el.style.setProperty('--bento-bg', `${-delta * 0.62}px`);
                    }
                }
            };

            let scrollRaf = 0;
            const onScroll = () => {
                if (scrollRaf) return;
                scrollRaf = requestAnimationFrame(() => {
                    scrollRaf = 0;
                    update();
                });
            };

            window.addEventListener('scroll', onScroll, { passive: true });
            window.addEventListener('resize', onScroll, { passive: true });
            update();

            teardown = () => {
                window.removeEventListener('scroll', onScroll);
                window.removeEventListener('resize', onScroll);
                if (scrollRaf) cancelAnimationFrame(scrollRaf);
                for (let i = 0; i < itemCount; i += 1) {
                    const el = itemRefs.current[i];
                    if (el) clearVars(el);
                }
            };
        });

        return () => {
            cancelled = true;
            cancelAnimationFrame(id);
            teardown();
        };
    }, [itemRefs, itemCount]);
}
