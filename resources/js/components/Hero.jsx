import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <section className="relative w-full min-h-[90vh] flex flex-col lg:flex-row overflow-hidden bg-transparent isolate">
            <div className="hero-mesh z-0" aria-hidden />
            <div className="hero-blob hero-blob--1 z-0" aria-hidden />
            <div className="hero-blob hero-blob--2 z-0" aria-hidden />
            <div className="hero-blob hero-blob--3 z-0" aria-hidden />

            {/* Left Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-20 pt-24 pb-16 lg:py-0 z-10">
                <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-right">
                    <div className="relative inline-block mx-auto lg:mx-0 mb-8">
                        <img
                            src="/images/logo.jpeg"
                            alt="YY Collection Logo"
                            className="w-24 h-24 object-cover rounded-full shadow-lg ring-2 ring-white/80 ring-offset-2 ring-offset-[var(--color-bg)] animate-pop-in"
                        />
                        <span
                            className="absolute left-1/2 -translate-x-1/2 -bottom-3 whitespace-nowrap rounded-full bg-contrast text-white text-xs font-bold px-3 py-1.5 shadow-md animate-float-badge"
                            dir="rtl"
                        >
                            توصيل لكل ليبيا
                        </span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 font-serif text-primary leading-tight animate-fade-in-up delay-100">
                        أناقة عالمية، <br /> <span className="text-contrast italic">بين يديك</span>
                    </h1>

                    <p className="mt-6 text-xl leading-relaxed text-primary/70 mb-10 max-w-lg mx-auto lg:mx-0 animate-fade-in-up delay-200">
                        خدمة تسوق شخصية. اختاري ما يعجبك من أي ماركة عالمية، ونحن نتكفل بالشراء والتوصيل إلى باب بيتك في ليبيا.
                    </p>

                    <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        <Link
                            to="/order"
                            className="btn-primary text-lg px-12 py-4 shadow-lg hover:bg-contrast hover:border-contrast hover:text-white transition-colors duration-300 w-full md:w-auto cta-glow text-center"
                        >
                            اطلبي الآن
                        </Link>
                        <button
                            type="button"
                            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                            className="text-primary/80 font-medium underline-offset-4 hover:text-contrast hover:underline transition-colors duration-300"
                        >
                            كيف نعمل؟
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto min-h-[280px] lg:min-h-0 relative z-10 flex items-stretch">
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent lg:bg-gradient-to-l z-20 pointer-events-none" />
                <div className="absolute inset-0 bg-primary/5 z-10 pointer-events-none" />
                <div className="relative flex-1 overflow-hidden border-y border-secondary/40 lg:border-y-0 lg:border-s border-secondary/40 shadow-inner">
                    <img
                        src="/images/hero_fashion.png"
                        alt="Premium Fashion Shopping"
                        className="w-full h-full object-cover object-center animate-ken-burns"
                    />
                </div>
            </div>
        </section>
    );
}
