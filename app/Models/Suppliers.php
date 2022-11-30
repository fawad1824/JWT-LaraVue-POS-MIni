<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Suppliers extends Model
{
    use HasFactory;
    protected $table = "suppliers";
    protected $fillable = [
        'id',
        'name',
        'email',
        'phone',
        'address',
        'photo',
        'shopname',
    ];

    public static function CreateSuppliers($request)
    {
        if ($request->id) {
            $employee =  Suppliers::where('id', $request->id)->first();
            $employee->name = $request->name;
            $employee->email = $request->email;
            $employee->phone = $request->phone;
            $employee->address = $request->address;
            $employee->shopname = $request->shopname;
            if ($request->hasFile('photo')) {
                unlink($employee->photo);
                $image = $request->file('photo');
                $ext = $image->extension();
                $file = $request->name . '.' . $ext;
                $image->move('images/', $file);
                $employee->photo = 'images/' . $file;
            }
            return $employee->save();
        } else {
            $employee = new Suppliers();
            $employee->name = $request->name;
            $employee->email = $request->email;
            $employee->phone = $request->phone;
            $employee->address = $request->address;
            $employee->shopname = $request->shopname;
            if ($request->hasFile('photo')) {
                unlink($employee->photo);
                $image = $request->file('photo');
                $ext = $image->extension();
                $file = $request->name . '.' . $ext;
                $image->move('images/', $file);
                $employee->photo = 'images/' . $file;
            }
            return $employee->save();
        }
    }
}
