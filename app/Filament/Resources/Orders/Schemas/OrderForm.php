<?php

namespace App\Filament\Resources\Orders\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;

class OrderForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->required(),
                TextInput::make('phone')
                    ->tel()
                    ->required(),
                TextInput::make('brand')
                    ->required(),
                TextInput::make('size')
                    ->label('Size / المقاس')
                    ->maxLength(120)
                    ->nullable(),
                Textarea::make('product_link')
                    ->default(null)
                    ->columnSpanFull(),
                FileUpload::make('product_image')
                    ->image()
                    ->disk('public')
                    ->directory('orders')
                    ->visibility('public'),
                Select::make('status')
                    ->options([
            'pending' => 'Pending',
            'contacted' => 'Contacted',
            'confirmed' => 'Confirmed',
            'ordered' => 'Ordered',
            'delivered' => 'Delivered',
        ])
                    ->default('pending')
                    ->required(),
                Textarea::make('notes')
                    ->default(null)
                    ->columnSpanFull(),
            ]);
    }
}
