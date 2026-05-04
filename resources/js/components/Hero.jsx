import React from 'react';

export default function Hero() {
    const scrollToOrder = () => {
        document.getElementById('order-form').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative w-full min-h-[90vh] flex flex-col lg:flex-row overflow-hidden bg-transparent">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-20 pt-24 pb-16 lg:py-0 z-10 animate-fade-in">
                <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-right">
                    <img 
                        src="/images/logo.jpeg" 
                        alt="YY Collection Logo" 
                        className="w-24 h-24 object-cover rounded-full mb-8 mx-auto lg:mx-0 shadow-sm"
                    />
                    
                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 font-serif text-primary leading-tight">
                        أناقة عالمية، <br/> <span className="text-contrast italic">بين يديك</span>
                    </h1>
                    
                    <p className="mt-6 text-xl leading-relaxed text-primary/70 mb-10 max-w-lg mx-auto lg:mx-0">
                        خدمة تسوق شخصية. اختاري ما يعجبك من أي ماركة عالمية، ونحن نتكفل بالشراء والتوصيل إلى باب بيتك في ليبيا.
                    </p>
                    
                    <button 
                        onClick={scrollToOrder}
                        className="btn-primary text-lg px-12 py-4 shadow-lg hover:bg-contrast hover:border-contrast hover:text-white transition-colors duration-300 w-full md:w-auto"
                    >
                        اطلبي الآن
                    </button>
                </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto relative delay-200 animate-fade-in">
                <div className="absolute inset-0 bg-primary/5 z-10"></div>
                <img 
                    src="/images/hero_fashion.png" 
                    alt="Premium Fashion Shopping" 
                    className="w-full h-full object-cover object-center"
                />
            </div>
        </section>
    );
}
