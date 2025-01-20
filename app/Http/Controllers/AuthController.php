<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request){

        $credentails= $request->validate([
         'email'=>['required','email'],
         'password' =>'required',
         'remember'=>'boolean',

        ]);
        $remember=$credentails['remember'] ?? false;
        unset($credentails['remember']);
        if (!Auth::attempt($credentails,$remember)){
            return response([
             'message'=>'Email or Password is incorrect'
            ], 422);
        }
    }
}
