<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Request;

class Employee extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
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

    public static function EmployeesCreate($request)
    {
        if ($request->id) {
            $employee =  Employee::where('id', $request->id)->first();
            $employee->name = $request->name;
            $employee->email = $request->email;
            $employee->phone = $request->phone;
            $employee->sallary = $request->salary;
            $employee->address = $request->address;
            $employee->nid = $request->nid;
            $employee->date = $request->date;
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
            $employee = new Employee();
            $employee->name = $request->name;
            $employee->email = $request->email;
            $employee->phone = $request->phone;
            $employee->sallary = $request->salary;
            $employee->address = $request->address;
            $employee->nid = $request->nid;
            $employee->date = $request->date;
            if ($request->hasFile('photo')) {
                $image = $request->file('photo');
                $ext = $image->extension();
                $file = $request->name . '.' . $ext;
                $image->move('images/', $file);
                $employee->photo = 'images/' . $file;
            }
            return  $employee->save();
        }
    }
}
