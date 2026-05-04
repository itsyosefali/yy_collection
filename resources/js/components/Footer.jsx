import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-primary py-16 px-6">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 text-center">
                <div className="flex flex-col items-center gap-4">
                    <img src="/images/logo.jpeg" alt="YY Collection Logo" className="w-16 h-16 rounded-full border border-secondary/30" />
                    <span className="text-2xl font-bold font-serif text-white tracking-[0.2em]">YY COLLECTION</span>
                </div>
                
                <div className="w-12 h-px bg-white/20"></div>

                <p className="text-white/50 text-sm tracking-wide">
                    &copy; {new Date().getFullYear()} YY Collection. جميع الحقوق محفوظة.
                </p>
            </div>
        </footer>
    );
}
