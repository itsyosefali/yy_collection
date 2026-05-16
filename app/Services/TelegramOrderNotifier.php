<?php

namespace App\Services;

use App\Models\Order;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class TelegramOrderNotifier
{
    public function notifyNewOrder(Order $order): void
    {
        $token = config('services.telegram.bot_token');
        $chatId = config('services.telegram.order_chat_id');

        if (! is_string($token) || $token === '' || ! is_string($chatId) || $chatId === '') {
            return;
        }

        $url = "https://api.telegram.org/bot{$token}/sendMessage";

        $response = Http::timeout(10)->asForm()->post($url, [
            'chat_id' => $chatId,
            'text' => $this->buildText($order),
            'disable_web_page_preview' => true,
        ]);

        if (! $response->successful() || ! ($response->json('ok') ?? false)) {
            Log::warning('Telegram order notification failed', [
                'order_id' => $order->id,
                'status' => $response->status(),
                'body' => $response->body(),
            ]);
        }
    }

    private function buildText(Order $order): string
    {
        $base = rtrim((string) config('app.url'), '/');
        $adminUrl = "{$base}/admin/orders/{$order->id}/edit";

        $lines = [
            'New order #'.$order->id,
            'Name: '.$order->name,
            'Phone: '.$order->phone,
            'Brand: '.($order->brand ?? '—'),
            'Size: '.($order->size ?? '—'),
            'Link: '.($order->product_link ?? '—'),
            'Status: '.($order->status ?? 'pending'),
            'Admin: '.$adminUrl,
        ];

        return implode("\n", $lines);
    }
}
