import React, { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
                
                {/* Logo */}
                <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                    <img src="/images/logo.jpeg" alt="YY Collection" className="w-10 h-10 rounded-full border border-secondary" />
                    <span className="text-xl font-bold font-serif text-primary tracking-widest hidden md:block">YY COLLECTION</span>
                </div>

                {/* Links */}
                <div className="hidden md:flex items-center gap-8">
                    <button onClick={() => scrollTo('how-it-works')} className="text-primary hover:text-contrast transition-colors font-medium">آلية العمل</button>
                    <button onClick={() => scrollTo('about-us')} className="text-primary hover:text-contrast transition-colors font-medium">قصتنا</button>
                    <button onClick={() => scrollTo('testimonials')} className="text-primary hover:text-contrast transition-colors font-medium">آراء العملاء</button>
                    <button onClick={() => scrollTo('contact')} className="text-primary hover:text-contrast transition-colors font-medium">تواصل معنا</button>
                </div>

                {/* CTA */}
                <div>
                    <button onClick={() => scrollTo('order-form')} className="btn-primary text-sm px-6 py-2">
                        اطلبي الآن
                    </button>
                </div>
            </div>
        </nav>
    );
}
