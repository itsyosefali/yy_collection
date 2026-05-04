import React, { useState } from 'react';

export default function OrderForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        brand: '',
        product_link: '',
        product_image: null
    });
    
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.product_link && !formData.product_image) {
            setErrorMessage('يرجى إدخال رابط المنتج أو صورة المنتج على الأقل');
            return;
        }

        setStatus('submitting');
        setErrorMessage('');

        const data = new FormData();
        data.append('name', formData.name);
        data.append('phone', formData.phone);
        data.append('brand', formData.brand);
        if (formData.product_link) data.append('product_link', formData.product_link);
        if (formData.product_image) data.append('product_image', formData.product_image);

        try {
            const response = await fetch('/api/orders', {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            const result = await response.json();

            if (response.ok) {
                setStatus('success');
                setFormData({
                    name: '',
                    phone: '',
                    brand: '',
                    product_link: '',
                    product_image: null
                });
            } else {
                setStatus('error');
                setErrorMessage(result.message || 'حدث خطأ أثناء إرسال الطلب، يرجى المحاولة مرة أخرى.');
            }
        } catch (error) {
            setStatus('error');
            setErrorMessage('حدث خطأ في الاتصال بالخادم، يرجى التحقق من اتصالك بالإنترنت.');
        }
    };

    if (status === 'success') {
        return (
            <section id="order-form" className="py-24 px-6 lg:px-12 relative z-10">
                <div className="max-w-2xl mx-auto text-center border border-secondary p-16 bg-white/80 backdrop-blur-sm shadow-xl">
                    <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight mb-4 font-serif text-primary">تم استلام طلبك</h2>
                    <p className="text-xl text-primary/70 mb-10 leading-relaxed">
                        شكراً لثقتك بنا. سنتواصل معك قريباً لتأكيد تفاصيل الطلب وتحديد موعد التسليم.
                    </p>
                    <button 
                        onClick={() => setStatus('idle')}
                        className="btn-primary text-lg w-full md:w-auto"
                    >
                        إرسال طلب جديد
                    </button>
                </div>
            </section>
        );
    }

    return (
        <section id="order-form" className="py-24 px-6 lg:px-12 border-t border-secondary/30 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    
                    {/* Text/Form Side (First in grid = Right in RTL) */}
                    <div className="flex flex-col order-2 lg:order-1 bg-white/80 backdrop-blur-md border border-secondary/50 p-8 lg:p-12 shadow-sm">
                        <div className="mb-10">
                            <h2 className="text-4xl font-bold tracking-tight mb-4 font-serif text-primary">اطلبي الآن</h2>
                            <p className="text-lg text-primary/70 leading-relaxed">
                                خطوة واحدة تفصلك عن قطعتك المفضلة. املئي البيانات وسنقوم بالباقي.
                            </p>
                        </div>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {errorMessage && (
                                <div className="bg-red-50 border border-red-200 text-red-600 p-4 mb-6 text-sm">
                                    {errorMessage}
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-primary text-sm font-bold mb-2 uppercase tracking-wide">الاسم</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        value={formData.name} 
                                        onChange={handleChange} 
                                        className="input-field rounded-none border-secondary/60 focus:border-primary focus:ring-0 bg-white" 
                                        required 
                                    />
                                </div>
                                <div>
                                    <label className="block text-primary text-sm font-bold mb-2 uppercase tracking-wide">رقم الهاتف</label>
                                    <input 
                                        type="tel" 
                                        name="phone" 
                                        value={formData.phone} 
                                        onChange={handleChange} 
                                        className="input-field rounded-none border-secondary/60 focus:border-primary focus:ring-0 bg-white text-left" 
                                        dir="ltr"
                                        required 
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-primary text-sm font-bold mb-2 uppercase tracking-wide">اسم البراند</label>
                                <input 
                                    type="text" 
                                    name="brand" 
                                    value={formData.brand} 
                                    onChange={handleChange} 
                                    className="input-field rounded-none border-secondary/60 focus:border-primary focus:ring-0 bg-white" 
                                    placeholder="Zara, Mango, Sephora..."
                                    required 
                                />
                            </div>

                            <div className="border border-secondary/60 p-6 bg-white/50">
                                <label className="block text-primary text-sm font-bold mb-4 uppercase tracking-wide">تفاصيل القطعة</label>
                                
                                <div className="space-y-4">
                                    <div>
                                        <input 
                                            type="url" 
                                            name="product_link" 
                                            value={formData.product_link} 
                                            onChange={handleChange} 
                                            className="input-field rounded-none border-secondary/60 text-sm bg-white" 
                                            placeholder="رابط المنتج (اختياري)"
                                            dir="ltr"
                                        />
                                    </div>
                                    
                                    <div className="text-center relative">
                                        <span className="bg-white/80 px-2 text-xs text-primary/50 relative z-10 uppercase tracking-widest backdrop-blur-sm">أو / و</span>
                                        <div className="absolute top-1/2 left-0 right-0 h-px bg-secondary/60"></div>
                                    </div>

                                    <div>
                                        <label className="block w-full text-center py-4 border border-dashed border-secondary hover:border-primary hover:bg-white/50 transition-colors cursor-pointer text-sm text-primary/70 bg-white/30">
                                            {formData.product_image ? formData.product_image.name : 'إرفاق صورة المنتج (اختياري)'}
                                            <input 
                                                type="file" 
                                                name="product_image" 
                                                onChange={handleChange} 
                                                accept="image/*"
                                                className="hidden" 
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4">
                                <button 
                                    type="submit" 
                                    disabled={status === 'submitting'}
                                    className="btn-primary w-full text-lg py-4 shadow-none hover:shadow-lg disabled:opacity-50"
                                >
                                    {status === 'submitting' ? 'جاري الإرسال...' : 'تأكيد الطلب'}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Image Side (Second in grid = Left in RTL) */}
                    <div className="relative order-1 lg:order-2 h-[400px] lg:h-auto">
                        <img 
                            src="/images/order_img.png" 
                            alt="Luxury Fashion Delivery" 
                            className="absolute inset-0 w-full h-full object-cover object-center border border-secondary/50 shadow-sm"
                        />
                    </div>
                    
                </div>
            </div>
        </section>
    );
}
