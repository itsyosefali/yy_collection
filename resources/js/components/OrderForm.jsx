import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

const SIZE_PRESETS = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'];

function FieldError({ message }) {
    if (!message) return null;
    return <p className="mt-1.5 text-sm text-red-600">{message}</p>;
}

export default function OrderForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        brand: '',
        size: '',
        product_link: '',
        product_image: null,
    });

    const [status, setStatus] = useState('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [fieldErrors, setFieldErrors] = useState({});

    const steps = useMemo(
        () => [
            { id: 1, label: 'معلوماتك' },
            { id: 2, label: 'القطعة' },
            { id: 3, label: 'المقاس والإرسال' },
        ],
        []
    );

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
        setErrorMessage('');
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const setSizePreset = (size) => {
        setFieldErrors((prev) => ({ ...prev, size: undefined }));
        setErrorMessage('');
        setFormData((prev) => ({ ...prev, size }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.product_link && !formData.product_image) {
            setErrorMessage('يرجى إدخال رابط المنتج أو صورة المنتج على الأقل');
            return;
        }

        if (!formData.size?.trim()) {
            setErrorMessage('يرجى اختيار أو كتابة المقاس');
            setFieldErrors((prev) => ({ ...prev, size: ['المقاس مطلوب'] }));
            return;
        }

        setStatus('submitting');
        setErrorMessage('');
        setFieldErrors({});

        const data = new FormData();
        data.append('name', formData.name);
        data.append('phone', formData.phone);
        data.append('brand', formData.brand);
        data.append('size', formData.size.trim());
        if (formData.product_link) data.append('product_link', formData.product_link);
        if (formData.product_image) data.append('product_image', formData.product_image);

        try {
            const response = await fetch('/api/orders', {
                method: 'POST',
                body: data,
                headers: {
                    Accept: 'application/json',
                },
            });

            const result = await response.json().catch(() => ({}));

            if (response.ok) {
                setStatus('success');
                setFormData({
                    name: '',
                    phone: '',
                    brand: '',
                    size: '',
                    product_link: '',
                    product_image: null,
                });
                return;
            }

            setStatus('error');
            if (response.status === 422 && result.errors) {
                setFieldErrors(result.errors);
                const first = Object.values(result.errors).flat()[0];
                setErrorMessage(first || result.message || 'يرجى تصحيح الحقول أدناه.');
            } else {
                setErrorMessage(result.message || 'حدث خطأ أثناء إرسال الطلب، يرجى المحاولة مرة أخرى.');
            }
        } catch {
            setStatus('error');
            setErrorMessage('حدث خطأ في الاتصال بالخادم، يرجى التحقق من اتصالك بالإنترنت.');
        }
    };

    if (status === 'success') {
        return (
            <div id="order-form" className="relative z-10 px-4 pb-24 pt-6 lg:pt-10">
                <div className="mx-auto max-w-lg animate-pop-in text-center">
                    <div className="border border-secondary/60 bg-white/95 p-10 shadow-xl backdrop-blur-sm lg:p-14">
                        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-primary text-white shadow-xl">
                            <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h1 className="mb-4 font-serif text-3xl font-bold tracking-tight text-primary lg:text-4xl">تم استلام طلبك</h1>
                        <p className="mb-10 text-lg leading-relaxed text-primary/70">
                            شكراً لثقتك بنا. سنتواصل معك قريباً لتأكيد تفاصيل الطلب والمقاس والسعر.
                        </p>
                        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                            <button type="button" onClick={() => setStatus('idle')} className="btn-primary text-base px-8 py-3">
                                طلب جديد
                            </button>
                            <Link
                                to="/"
                                className="inline-flex items-center justify-center border border-primary px-8 py-3 text-base font-medium text-primary transition-colors hover:bg-primary hover:text-white"
                            >
                                العودة للرئيسية
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div id="order-form" className="relative z-10">
            <div className="border-b border-secondary/40 bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-10 text-center lg:py-14">
                <nav className="mx-auto mb-6 max-w-3xl text-start text-sm text-primary/60" aria-label="مسار التنقل">
                    <Link to="/" className="transition-colors hover:text-contrast">
                        الرئيسية
                    </Link>
                    <span className="mx-2 text-primary/30">/</span>
                    <span className="font-medium text-primary">طلب جديد</span>
                </nav>
                <h1 className="mx-auto max-w-2xl font-serif text-3xl font-bold text-primary lg:text-5xl">اطلبي قطعتك في خطوات بسيطة</h1>
                <p className="mx-auto mt-4 max-w-xl text-lg text-primary/70">
                    املئي النموذج أدناه — كلما كانت التفاصيل أوضح (خاصة المقاس)، كان التأكيد أسرع.
                </p>

                <ol className="mx-auto mt-10 flex max-w-lg flex-wrap justify-center gap-3 text-sm" dir="rtl">
                    {steps.map((step) => (
                        <li
                            key={step.id}
                            className="flex items-center gap-2 rounded-full border border-secondary/70 bg-white/90 px-4 py-2 font-medium text-primary shadow-sm"
                        >
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-primary text-xs font-bold text-white">
                                {step.id}
                            </span>
                            {step.label}
                        </li>
                    ))}
                </ol>
            </div>

            <div className="mx-auto max-w-6xl px-4 py-10 lg:grid lg:grid-cols-12 lg:gap-12 lg:py-14 lg:px-8">
                <aside className="relative mb-10 hidden h-full min-h-[320px] lg:col-span-5 lg:mb-0 lg:block">
                    <div className="sticky top-28 overflow-hidden border border-secondary/50 shadow-md">
                        <img
                            src="/images/order_img.png"
                            alt=""
                            className="h-full w-full object-cover object-center transition-transform duration-[2.4s] ease-out hover:scale-[1.03]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" aria-hidden />
                        <p className="absolute bottom-6 start-6 end-6 text-lg font-medium leading-relaxed text-white drop-shadow-md">
                            نوصل طلباتك من أشهر الماركات إلى باب منزلك في ليبيا.
                        </p>
                    </div>
                </aside>

                <div className="lg:col-span-7">
                    <div className="border border-secondary/60 bg-white/95 p-6 shadow-lg backdrop-blur-sm md:p-10 lg:p-12">
                        <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                            {(errorMessage || Object.keys(fieldErrors).length > 0) && (
                                <div
                                    className="border border-red-200 bg-red-50 p-4 text-sm text-red-700"
                                    role="alert"
                                >
                                    {errorMessage && <p className="font-medium">{errorMessage}</p>}
                                </div>
                            )}

                            <fieldset className="space-y-5">
                                <legend className="mb-2 font-serif text-xl font-bold text-primary">بيانات التواصل</legend>
                                <div className="grid gap-5 md:grid-cols-2">
                                    <div>
                                        <label htmlFor="order-name" className="mb-2 block text-sm font-bold uppercase tracking-wide text-primary">
                                            الاسم <span className="text-contrast">*</span>
                                        </label>
                                        <input
                                            id="order-name"
                                            type="text"
                                            name="name"
                                            autoComplete="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="input-field rounded-none border-secondary/60 bg-white focus:border-primary focus:ring-0"
                                            required
                                        />
                                        <FieldError message={fieldErrors.name?.[0]} />
                                    </div>
                                    <div>
                                        <label htmlFor="order-phone" className="mb-2 block text-sm font-bold uppercase tracking-wide text-primary">
                                            رقم الهاتف <span className="text-contrast">*</span>
                                        </label>
                                        <input
                                            id="order-phone"
                                            type="tel"
                                            name="phone"
                                            autoComplete="tel"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="input-field rounded-none border-secondary/60 bg-white text-left focus:border-primary focus:ring-0"
                                            dir="ltr"
                                            required
                                        />
                                        <FieldError message={fieldErrors.phone?.[0]} />
                                    </div>
                                </div>
                            </fieldset>

                            <fieldset className="space-y-5">
                                <legend className="mb-2 font-serif text-xl font-bold text-primary">تفاصيل المنتج</legend>
                                <div>
                                    <label htmlFor="order-brand" className="mb-2 block text-sm font-bold uppercase tracking-wide text-primary">
                                        اسم البراند <span className="text-contrast">*</span>
                                    </label>
                                    <input
                                        id="order-brand"
                                        type="text"
                                        name="brand"
                                        value={formData.brand}
                                        onChange={handleChange}
                                        className="input-field rounded-none border-secondary/60 bg-white focus:border-primary focus:ring-0"
                                        placeholder="Zara, Mango, Nike..."
                                        required
                                    />
                                    <FieldError message={fieldErrors.brand?.[0]} />
                                </div>

                                <div>
                                    <p className="mb-2 block text-sm font-bold uppercase tracking-wide text-primary">
                                        المقاس (Size) <span className="text-contrast">*</span>
                                    </p>
                                    <p className="mb-3 text-sm text-primary/60">اختاري مقاساً شائعاً أو اكتبي المقاس بالضبط كما يظهر في الموقع.</p>
                                    <div className="mb-4 flex flex-wrap gap-2" role="group" aria-label="مقاسات شائعة">
                                        {SIZE_PRESETS.map((s) => {
                                            const active = formData.size === s;
                                            return (
                                                <button
                                                    key={s}
                                                    type="button"
                                                    onClick={() => setSizePreset(s)}
                                                    className={`min-w-[3rem] border px-3 py-2 text-sm font-semibold transition-all ${
                                                        active
                                                            ? 'border-primary bg-primary text-white shadow-md'
                                                            : 'border-secondary/80 bg-white text-primary hover:border-primary/50'
                                                    }`}
                                                >
                                                    {s}
                                                </button>
                                            );
                                        })}
                                    </div>
                                    <label htmlFor="order-size" className="sr-only">
                                        المقاس أو توضيح المقاس
                                    </label>
                                    <input
                                        id="order-size"
                                        type="text"
                                        name="size"
                                        value={formData.size}
                                        onChange={handleChange}
                                        className="input-field rounded-none border-secondary/60 bg-white focus:border-primary focus:ring-0"
                                        placeholder="مثال: EU 38، US 8، أو اكتبي المقاس يدوياً"
                                        autoComplete="off"
                                    />
                                    <FieldError message={fieldErrors.size?.[0]} />
                                </div>

                                <div className="border border-secondary/50 bg-white/60 p-5">
                                    <p className="mb-4 text-sm font-bold uppercase tracking-wide text-primary">رابط أو صورة المنتج</p>
                                    <p className="mb-4 text-sm text-primary/65">أحدهما على الأقل مطلوب لتعريف القطعة بدقة.</p>
                                    <div className="space-y-4">
                                        <div>
                                            <label htmlFor="order-link" className="mb-2 block text-xs font-medium text-primary/80">
                                                رابط المنتج
                                            </label>
                                            <input
                                                id="order-link"
                                                type="url"
                                                name="product_link"
                                                value={formData.product_link}
                                                onChange={handleChange}
                                                className="input-field rounded-none border-secondary/60 bg-white text-sm focus:border-primary focus:ring-0"
                                                placeholder="https://..."
                                                dir="ltr"
                                            />
                                            <FieldError message={fieldErrors.product_link?.[0]} />
                                        </div>

                                        <div className="relative text-center">
                                            <span className="relative z-10 bg-white/90 px-3 text-xs uppercase tracking-widest text-primary/45 backdrop-blur-sm">
                                                أو / و
                                            </span>
                                            <div className="absolute top-1/2 right-0 left-0 h-px bg-secondary/60" aria-hidden />
                                        </div>

                                        <div>
                                            <label className="flex w-full cursor-pointer flex-col items-center justify-center border border-dashed border-secondary/80 bg-white/50 px-4 py-8 text-sm text-primary/70 transition-colors hover:border-primary hover:bg-white">
                                                <span className="mb-1 font-medium text-primary">
                                                    {formData.product_image ? formData.product_image.name : 'إرفاق صورة للمنتج'}
                                                </span>
                                                <span className="text-xs text-primary/50">PNG أو JPG حتى 5 ميجابايت</span>
                                                <input
                                                    type="file"
                                                    name="product_image"
                                                    onChange={handleChange}
                                                    accept="image/*"
                                                    className="hidden"
                                                />
                                            </label>
                                            <FieldError message={fieldErrors.product_image?.[0]} />
                                        </div>
                                    </div>
                                </div>
                            </fieldset>

                            <div className="flex flex-col gap-3 border-t border-secondary/40 pt-6 sm:flex-row sm:items-center sm:justify-between">
                                <p className="text-sm text-primary/55">بالضغط على «تأكيد الطلب» أنتِ توافقين على التواصل معك لتأكيد السعر والتوفر.</p>
                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="btn-primary shrink-0 px-10 py-4 text-base disabled:opacity-50"
                                >
                                    {status === 'submitting' ? 'جاري الإرسال...' : 'تأكيد الطلب'}
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="mt-6 overflow-hidden rounded-sm border border-secondary/40 lg:hidden">
                        <img src="/images/order_img.png" alt="" className="h-48 w-full object-cover object-center" />
                    </div>
                </div>
            </div>
        </div>
    );
}
