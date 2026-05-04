import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        if (!isHome) {
            navigate(`/#${id}`);
            return;
        }
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
                <Link
                    to="/"
                    className="flex items-center gap-3 group/logo transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                    <img
                        src="/images/logo.jpeg"
                        alt="YY Collection"
                        className="w-10 h-10 rounded-full border border-secondary shadow-sm transition-shadow duration-300 group-hover/logo:shadow-md"
                    />
                    <span className="text-xl font-bold font-serif text-primary tracking-widest hidden md:block transition-colors duration-300 group-hover/logo:text-contrast">
                        YY COLLECTION
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <button type="button" onClick={() => scrollTo('how-it-works')} className="nav-link text-primary hover:text-contrast transition-colors font-medium">
                        آلية العمل
                    </button>
                    <button type="button" onClick={() => scrollTo('about-us')} className="nav-link text-primary hover:text-contrast transition-colors font-medium">
                        قصتنا
                    </button>
                    <button type="button" onClick={() => scrollTo('testimonials')} className="nav-link text-primary hover:text-contrast transition-colors font-medium">
                        آراء العملاء
                    </button>
                    <button type="button" onClick={() => scrollTo('contact')} className="nav-link text-primary hover:text-contrast transition-colors font-medium">
                        تواصل معنا
                    </button>
                </div>

                <div>
                    <Link to="/order" className="btn-primary text-sm px-6 py-2 inline-flex">
                        اطلبي الآن
                    </Link>
                </div>
            </div>
        </nav>
    );
}
