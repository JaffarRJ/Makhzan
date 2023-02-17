<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AccountSubAccount extends Model
{
    use HasFactory;
    protected $fillable = [
        'account_id',
        'sub_account_id'
    ];
}
