import { useEffect } from 'react';

export function useRevealOnScroll(selector) {
    useEffect(() => {
        const elements = document.querySelectorAll(selector);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        entry.target.style.transitionDelay = `${index * 120}ms`;
                        entry.target.classList.add("show");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.2,
            }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [selector]);
}
