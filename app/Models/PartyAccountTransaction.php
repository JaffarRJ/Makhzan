<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PartyAccountTransaction extends Model
{
    use HasFactory;
    protected $fillable = [
        'party_transaction_id',
        'account_id',
        'dr',
        'cr'
    ];
}
