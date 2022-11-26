<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'email',
        'phone',
        'address',
        'sallary',
        'photo',
        'nid',
        'date',
    ];
    protected $table = "employee";
}