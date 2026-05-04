import React from 'react';
import Reveal from './Reveal';

export default function Footer() {
    return (
        <footer className="bg-primary py-16 px-6 relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(230,57,70,0.25),transparent_45%)]" aria-hidden />
            <Reveal className="max-w-7xl mx-auto flex flex-col items-center gap-8 text-center relative z-10">
                <div className="flex flex-col items-center gap-4">
                    <img src="/images/logo.jpeg" alt="YY Collection Logo" className="w-16 h-16 rounded-full border border-secondary/30" />
                    <span className="text-2xl font-bold font-serif text-white tracking-[0.2em]">YY COLLECTION</span>
                </div>
                
                <div className="w-12 h-px bg-white/20"></div>

                <p className="text-white/50 text-sm tracking-wide">
                    &copy; {new Date().getFullYear()} YY Collection. جميع الحقوق محفوظة.
                </p>
            </Reveal>
        </footer>
    );
}
