<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreOrderRequest;
use App\Models\Order;

class OrderController extends Controller
{
    /**
     * Store a new order request.
     */
    public function store(StoreOrderRequest $request)
    {
        $data = $request->validated();

        if ($request->hasFile('product_image')) {
            $data['product_image'] = $request->file('product_image')
                ->store('orders', 'public');
        } else {
            unset($data['product_image']);
        }

        $order = Order::create($data);

        return response()->json([
            'success' => true,
            'message' => 'تم إرسال طلبك بنجاح! سنتواصل معك قريباً',
            'order_id' => $order->id,
        ], 201);
    }
}
