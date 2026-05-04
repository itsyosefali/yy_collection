import React from 'react';

export default function AboutUs() {
    return (
        <section id="about-us" className="py-24 px-6 lg:px-12 border-b border-secondary/30 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    
                    {/* Text Side (First in grid = Right in RTL) */}
                    <div className="flex flex-col justify-center order-2 lg:order-1 relative p-8 md:p-12 bg-white/60 backdrop-blur-md border border-secondary/50">
                        <div className="absolute -top-6 right-8 text-8xl text-contrast opacity-10 font-serif leading-none">"</div>
                        <div className="mb-8 relative z-10">
                            <span className="text-sm font-bold tracking-widest text-contrast uppercase mb-4 block">قصتنا</span>
                            <h2 className="text-4xl font-bold tracking-tight font-serif text-primary">أكثر من مجرد خدمة توصيل</h2>
                        </div>
                        
                        <p className="text-xl leading-relaxed font-light text-primary relative z-10 mb-8">
                            نسعى في YY Collection لكسر حواجز المسافات. نوفر لك إمكانية اقتناء أرقى القطع من الماركات العالمية مثل Zara وغيرها، ونتكفل بكافة تفاصيل الشراء والشحن حتى باب منزلك في ليبيا، بكل سهولة وأمان.
                        </p>
                        <div className="w-16 h-px bg-contrast mb-8"></div>
                        <p className="text-xl leading-relaxed text-primary/70 relative z-10 font-serif italic">
                            اختاري ما يعبر عنكِ، ودعي الباقي لنا.
                        </p>
                        <div className="absolute -bottom-12 left-8 text-8xl text-contrast opacity-10 font-serif leading-none">"</div>
                    </div>

                    {/* Image Side (Second in grid = Left in RTL) */}
                    <div className="relative order-1 lg:order-2">
                        <div className="absolute inset-0 bg-contrast/5 translate-x-4 -translate-y-4"></div>
                        <img 
                            src="/images/about_us.png" 
                            alt="Luxury Fashion Boutique" 
                            className="relative z-10 w-full h-[600px] object-cover object-center border border-secondary/50 shadow-sm"
                        />
                    </div>
                    
                </div>
            </div>
        </section>
    );
}
