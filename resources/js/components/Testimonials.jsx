import React from 'react';
import Reveal from './Reveal';

export default function Testimonials() {
    const reviews = [
        {
            text: "تجربتي مع YY Collection كانت ممتازة! كنت أدور على قطعة من زارا ومش متوفرة عندنا، وفرولي إياها بوقت قياسي وبسعر ممتاز.",
            author: "رؤى ع.",
            location: "طرابلس"
        },
        {
            text: "أفضل خدمة تسوق شخصية تعاملت معاها. القطع وصلتني مغلفة بشكل راقي جداً والتعامل كان احترافي من أول مسج.",
            author: "سارة م.",
            location: "بنغازي"
        },
        {
            text: "دايماً أطلب منهم الماركات اللي مو موجودة بليبيا، سريعين ومضمونين ويوفرون لك كل شي تبيه بكل سهولة.",
            author: "نور أ.",
            location: "مصراتة"
        }
    ];

    const reviewDelays = ['delay-100', 'delay-200', 'delay-300'];

    return (
        <section id="testimonials" className="py-24 px-6 lg:px-8 border-t border-secondary/20 relative z-10">
            <div className="max-w-7xl mx-auto">
                <Reveal className="text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight font-serif text-primary">آراء عميلاتنا</h2>
                </Reveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image Side */}
                    <Reveal className="relative order-2 lg:order-1 reveal-scale" delayClass="delay-200">
                        <div className="absolute inset-0 bg-contrast/5 translate-x-4 translate-y-4 transition-transform duration-700 hover:translate-x-5 hover:translate-y-5" />
                        <img 
                            src="/images/fashion_lifestyle_2.png" 
                            alt="Luxury Shopping Experience" 
                            className="relative z-10 w-full h-[600px] object-cover object-center border border-secondary/50 shadow-sm transition-transform duration-[2.2s] ease-out hover:scale-[1.02]"
                        />
                    </Reveal>

                    {/* Reviews Side */}
                    <div className="flex flex-col justify-center space-y-12 order-1 lg:order-2">
                        {reviews.map((review, index) => (
                            <Reveal key={index} className="relative" delayClass={reviewDelays[index] ?? 'delay-100'}>
                                <div className="text-5xl text-contrast/30 font-serif absolute -right-6 -top-4 transition-transform duration-500 hover:scale-110">"</div>
                                <p className="text-xl leading-relaxed text-primary font-light mb-4 relative z-10">
                                    {review.text}
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-primary text-white flex items-center justify-center rounded-none text-lg font-bold font-serif shadow-md transition-transform duration-300 hover:scale-105 hover:bg-contrast">
                                        {review.author.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-primary">{review.author}</h4>
                                        <p className="text-primary/60 text-sm">{review.location}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
