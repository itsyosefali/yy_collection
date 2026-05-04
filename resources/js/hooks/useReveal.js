import { useEffect, useRef, useState } from 'react';

/**
 * Observes an element and sets visible when it enters the viewport.
 */
export function useReveal({
    threshold = 0.1,
    rootMargin = '0px 0px -48px 0px',
    once = true,
} = {}) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible(true);
                        if (once) observer.disconnect();
                    }
                });
            },
            { threshold, rootMargin }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold, rootMargin, once]);

    return [ref, visible];
}
