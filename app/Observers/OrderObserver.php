<?php

namespace App\Observers;

use App\Models\Order;
use App\Services\TelegramOrderNotifier;

class OrderObserver
{
    public function __construct(
        private TelegramOrderNotifier $telegramOrderNotifier,
    ) {}

    public function created(Order $order): void
    {
        $this->telegramOrderNotifier->notifyNewOrder($order);
    }
}
