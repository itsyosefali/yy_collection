<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreOrderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true; // Public form, no auth needed
    }

    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'phone' => ['required', 'string', 'max:20'],
            'brand' => ['required', 'string', 'max:255'],
            'product_link' => ['nullable', 'url', 'max:2048'],
            'product_image' => ['nullable', 'image', 'max:5120'], // 5MB max
        ];
    }

    /**
     * Custom validation: at least one of product_link or product_image is required.
     */
    public function withValidator($validator): void
    {
        $validator->after(function ($validator) {
            if (empty($this->product_link) && !$this->hasFile('product_image')) {
                $validator->errors()->add(
                    'product_link',
                    'يرجى إدخال رابط المنتج أو صورة المنتج على الأقل'
                );
            }
        });
    }

    /**
     * Get custom messages for validator errors (Arabic).
     */
    public function messages(): array
    {
        return [
            'name.required' => 'الاسم مطلوب',
            'name.max' => 'الاسم طويل جداً',
            'phone.required' => 'رقم الهاتف مطلوب',
            'phone.max' => 'رقم الهاتف طويل جداً',
            'brand.required' => 'اسم البراند مطلوب',
            'brand.max' => 'اسم البراند طويل جداً',
            'product_link.url' => 'يرجى إدخال رابط صحيح',
            'product_image.image' => 'يرجى رفع صورة صحيحة',
            'product_image.max' => 'حجم الصورة يجب أن لا يتجاوز 5 ميجابايت',
        ];
    }
}
