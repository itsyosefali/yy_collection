import React from 'react';
import { useReveal } from '../hooks/useReveal';

export default function Reveal({ children, className = '', delayClass = '' }) {
    const [ref, visible] = useReveal();

    return (
        <div
            ref={ref}
            className={`reveal ${visible ? 'reveal-visible' : ''} ${delayClass} ${className}`.trim()}
        >
            {children}
        </div>
    );
}
