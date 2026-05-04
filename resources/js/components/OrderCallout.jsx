import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';

export default function OrderCallout() {
    return (
        <section className="py-20 px-6 lg:px-12 border-t border-secondary/30 relative z-10 bg-gradient-to-b from-white/40 to-transparent">
            <Reveal className="max-w-4xl mx-auto">
                <div className="relative overflow-hidden border border-secondary/60 bg-white/90 backdrop-blur-md p-10 lg:p-14 text-center shadow-lg">
                    <div
                        className="pointer-events-none absolute -top-24 start-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-contrast/15 blur-3xl"
                        aria-hidden
                    />
                    <p className="text-sm font-bold tracking-widest text-contrast uppercase mb-3">طلب سريع</p>
                    <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary mb-4">جاهزة لطلب قطعتك؟</h2>
                    <p className="text-lg text-primary/70 mb-8 max-w-2xl mx-auto leading-relaxed">
                        صفحة طلب مخصصة، خطوات واضحة، وحقل للمقاس — أرسلي التفاصيل الآن وسنتواصل معك لتأكيد السعر والتوصيل.
                    </p>
                    <ul className="flex flex-wrap justify-center gap-6 text-primary/80 text-sm mb-10">
                        <li className="flex items-center gap-2">
                            <span className="flex h-6 w-6 items-center justify-center bg-secondary text-contrast font-bold text-xs rounded-full">1</span>
                            بياناتك
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="flex h-6 w-6 items-center justify-center bg-secondary text-contrast font-bold text-xs rounded-full">2</span>
                            رابط أو صورة
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="flex h-6 w-6 items-center justify-center bg-secondary text-contrast font-bold text-xs rounded-full">3</span>
                            المقاس
                        </li>
                    </ul>
                    <Link to="/order" className="btn-primary text-lg px-14 py-4 inline-flex cta-glow">
                        ابدئي الطلب الآن
                    </Link>
                </div>
            </Reveal>
        </section>
    );
}
