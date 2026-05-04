<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'name',
        'phone',
        'brand',
        'size',
        'product_link',
        'product_image',
        'status',
        'notes',
    ];

    protected $casts = [
        'status' => 'string',
    ];
}
