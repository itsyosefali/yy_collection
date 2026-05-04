import React from 'react';

export default function HowItWorks() {
    const steps = [
        {
            title: 'اختر المنتج',
            description: 'ابحث عن المنتج الذي تريده من أي براند عالمي.',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            )
        },
        {
            title: 'أرسل الرابط أو الصورة',
            description: 'املأ النموذج السهل وضع رابط المنتج أو صورته.',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
            )
        },
        {
            title: 'نؤكد السعر والتوفر',
            description: 'سنتواصل معك لتأكيد السعر بالدينار الليبي وتوفر المنتج.',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: 'يتم الطلب والتوصيل',
            description: 'نقوم بالشراء وشحنه وتوصيله إليك في ليبيا.',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
            )
        }
    ];

    return (
        <section id="how-it-works" className="py-24 px-6 lg:px-12 border-b border-secondary/30 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    
                    {/* Image Side (First in grid = Right in RTL) */}
                    <div className="relative order-1">
                        <div className="absolute inset-0 bg-contrast/5 -translate-x-4 translate-y-4"></div>
                        <img 
                            src="/images/how_it_works.png" 
                            alt="Browsing Fashion App" 
                            className="relative z-10 w-full h-[600px] object-cover object-center border border-secondary/50 shadow-sm"
                        />
                    </div>

                    {/* Text Side (Second in grid = Left in RTL) */}
                    <div className="flex flex-col justify-center order-2">
                        <div className="mb-12">
                            <h2 className="text-4xl font-bold tracking-tight mb-4 font-serif text-primary">آلية العمل</h2>
                            <p className="text-xl text-primary/60">بكل بساطة، تسوقي من العالم وأنتِ في بيتك</p>
                        </div>
                        
                        <div className="space-y-8">
                            {steps.map((step, index) => (
                                <div key={index} className="flex items-start gap-6 group">
                                    <div className="w-12 h-12 shrink-0 bg-white/50 backdrop-blur-sm flex items-center justify-center text-primary border border-secondary/50 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        {step.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-primary tracking-wide">{step.title}</h3>
                                        <p className="text-primary/70 text-base leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}
