import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import OrderCallout from '../components/OrderCallout';
import Contact from '../components/Contact';

export default function HomePage() {
    const location = useLocation();

    useEffect(() => {
        const id = location.hash?.replace(/^#/, '') || '';
        if (!id) return;
        const el = document.getElementById(id);
        if (el) {
            const t = window.setTimeout(() => {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 80);
            return () => window.clearTimeout(t);
        }
    }, [location.hash, location.pathname]);

    return (
        <>
            <Hero />
            <HowItWorks />
            <AboutUs />
            <Testimonials />
            <OrderCallout />
            <Contact />
        </>
    );
}
