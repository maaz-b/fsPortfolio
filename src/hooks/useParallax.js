import { useState, useEffect } from 'react';

export function useParallax(ref, direction = 'left', multiplier = 2.5) {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            const progress =
                (window.innerHeight - rect.top) /
                (window.innerHeight + rect.height);

            setOffset(Math.max(0, Math.min(1, progress * multiplier)));
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [multiplier]); // Added multiplier to deps, ref is usually stable but good practice to check logic

    const translateX =
        direction === 'left'
            ? (1 - offset) * -150
            : (1 - offset) * 150;

    return {
        transform: `translateX(${translateX}px)`,
        opacity: offset,
        transition: 'opacity 0.15s ease-out',
        willChange: 'transform, opacity',
    };
}
