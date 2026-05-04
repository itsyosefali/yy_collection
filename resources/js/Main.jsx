import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import OrderForm from './components/OrderForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Main() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow pt-20"> {/* Add pt-20 for navbar space */}
                <Hero />
                <HowItWorks />
                <AboutUs />
                <Testimonials />
                <OrderForm />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
