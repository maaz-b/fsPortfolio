import { useEffect, useRef } from 'react';

function readReducedMotion() {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Scroll-driven timeline: reveal toggles with viewport (reverses when scrolling away),
 * active node, spine progress, and parallax via inherited CSS vars (--exp-parallax-y /
 * --exp-parallax-rev) so motion reverses symmetrically when scrolling up.
 *
 * @param {object} opts
 * @param {React.RefObject<HTMLElement | null>} opts.wrapRef
 * @param {React.MutableRefObject<(HTMLElement | null)[]>} opts.itemRefs
 * @param {number} opts.itemCount
 * @param {(n: number) => void} [opts.onSpineProgress]
 */
export function useTimelineScroll({ wrapRef, itemRefs, itemCount, onSpineProgress }) {
    const onSpineProgressRef = useRef(onSpineProgress);
    onSpineProgressRef.current = onSpineProgress;

    useEffect(() => {
        const wrap = wrapRef.current;
        if (!wrap || itemCount < 1) return undefined;

        let cancelled = false;
        let teardown = () => {};

        const id = requestAnimationFrame(() => {
            if (cancelled) return;

            const items = [];
            for (let i = 0; i < itemCount; i += 1) {
                const el = itemRefs.current[i];
                if (el) items.push(el);
            }
            if (!items.length) return;

            const reduced = readReducedMotion();

            const focalY = () => window.innerHeight * 0.42;

            const clearParallaxVars = (el) => {
                el.style.removeProperty('--exp-parallax-y');
                el.style.removeProperty('--exp-parallax-rev');
            };

            const update = () => {
                const fy = focalY();
                const vh = window.innerHeight;
                const edge = vh * 0.07;

                let bestIdx = 0;
                let bestDist = Infinity;

                for (let i = 0; i < itemCount; i += 1) {
                    const el = itemRefs.current[i];
                    if (!el) continue;

                    const r = el.getBoundingClientRect();
                    const inView = r.bottom > edge && r.top < vh - edge;
                    el.classList.toggle('experienceTimelineItem--visible', inView);

                    const mid = r.top + r.height * 0.38;
                    const d = Math.abs(mid - fy);
                    if (d < bestDist) {
                        bestDist = d;
                        bestIdx = i;
                    }

                    if (reduced) {
                        clearParallaxVars(el);
                    } else {
                        const y = (mid - fy) * -0.2;
                        const rev = -y * 0.58;
                        el.style.setProperty('--exp-parallax-y', `${y}px`);
                        el.style.setProperty('--exp-parallax-rev', `${rev}px`);
                    }
                }

                for (let i = 0; i < itemCount; i += 1) {
                    const el = itemRefs.current[i];
                    if (!el) continue;
                    el.classList.toggle('experienceTimelineItem--active', i === bestIdx);
                }

                if (onSpineProgressRef.current) {
                    const wr = wrap.getBoundingClientRect();
                    const h = Math.max(1, wr.height);
                    const p = Math.max(0, Math.min(1, (fy - wr.top) / h));
                    onSpineProgressRef.current(p);
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
                    if (el) clearParallaxVars(el);
                }
            };
        });

        return () => {
            cancelled = true;
            cancelAnimationFrame(id);
            teardown();
        };
    }, [wrapRef, itemRefs, itemCount]);
}
