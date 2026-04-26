import { useEffect, useRef } from 'react';

/**
 * @typedef {'element' | 'pageScroll'} ParallaxDrive
 * - element: viewport progress for in-flow blocks (Experience / Services).
 * - pageScroll: window scrollY scrub for above-the-fold blocks (detail hero).
 *
 * Implementation note:
 * Writes transform/opacity directly to the observed element's style. React state is
 * intentionally not used so the effect cannot be skipped or batched away by Strict Mode,
 * the React Compiler, or render scheduling — every scroll/resize tick paints immediately.
 */

function normalizeArgs(directionOrOpts, multiplierArg) {
    const isOpts =
        typeof directionOrOpts === 'object' &&
        directionOrOpts !== null &&
        !Array.isArray(directionOrOpts);

    if (isOpts) {
        return {
            direction: directionOrOpts.direction ?? 'left',
            multiplier: directionOrOpts.multiplier ?? 2.5,
            distance: directionOrOpts.distance ?? 150,
            depKey: directionOrOpts.depKey,
            drive: directionOrOpts.drive ?? 'element',
            scrollRamp:
                typeof directionOrOpts.scrollRamp === 'number' && directionOrOpts.scrollRamp > 0
                    ? directionOrOpts.scrollRamp
                    : 480,
            opacityLinked: directionOrOpts.opacityLinked !== false,
        };
    }
    return {
        direction: typeof directionOrOpts === 'string' ? directionOrOpts : 'left',
        multiplier: multiplierArg ?? 2.5,
        distance: 150,
        depKey: undefined,
        drive: 'element',
        scrollRamp: 480,
        opacityLinked: true,
    };
}

function clamp01(value) {
    if (!Number.isFinite(value)) return 0;
    return Math.max(0, Math.min(1, value));
}

function readScrollY() {
    return (
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement?.scrollTop ||
        document.body?.scrollTop ||
        0
    );
}

export function useParallax(ref, directionOrOpts = 'left', multiplierArg = 2.5) {
    const opts = normalizeArgs(directionOrOpts, multiplierArg);
    const optsRef = useRef(opts);
    optsRef.current = opts;

    useEffect(() => {
        const el = ref.current;
        if (!el) return undefined;

        el.style.willChange = 'transform, opacity';
        el.style.transition = 'opacity 0.15s ease-out';

        let rafId = 0;

        const apply = (offset) => {
            const { direction, distance, opacityLinked } = optsRef.current;
            const safe = clamp01(offset);
            const dist = Number.isFinite(distance) ? distance : 150;
            const tx = direction === 'left' ? (1 - safe) * -dist : (1 - safe) * dist;
            el.style.transform = `translateX(${tx}px)`;
            el.style.opacity = String(opacityLinked ? safe : 1);
        };

        const compute = () => {
            const { drive, multiplier, scrollRamp } = optsRef.current;
            const mult = Number.isFinite(multiplier) ? multiplier : 2.5;

            if (drive === 'pageScroll') {
                const ramp =
                    scrollRamp > 0 ? scrollRamp : Math.max(400, window.innerHeight * 0.55);
                const scaled = (readScrollY() / ramp) * (mult / 2.5);
                apply(scaled);
                return;
            }

            const node = ref.current;
            if (!node) return;
            const rect = node.getBoundingClientRect();
            const denom = window.innerHeight + rect.height;
            if (!Number.isFinite(denom) || denom <= 0) return;
            const progress = (window.innerHeight - rect.top) / denom;
            apply(progress * mult);
        };

        const onScroll = () => {
            if (rafId) return;
            rafId = requestAnimationFrame(() => {
                rafId = 0;
                compute();
            });
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll, { passive: true });
        document.addEventListener('scroll', onScroll, { passive: true, capture: true });

        let ro;
        if (opts.drive !== 'pageScroll' && typeof ResizeObserver !== 'undefined') {
            ro = new ResizeObserver(onScroll);
            ro.observe(el);
        }

        compute();
        const initial = requestAnimationFrame(compute);

        return () => {
            cancelAnimationFrame(initial);
            if (rafId) cancelAnimationFrame(rafId);
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            document.removeEventListener('scroll', onScroll, true);
            ro?.disconnect();
        };
    }, [opts.drive, opts.multiplier, opts.distance, opts.scrollRamp, opts.depKey]);

    return undefined;
}
