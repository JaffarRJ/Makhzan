<?php

use App\Http\Controllers\Api\Auth\AuthController;
use App\Http\Controllers\Api\Auth\ForgetController;
use App\Http\Controllers\Api\Auth\RegisterController;
use App\Http\Controllers\Api\User\ProfileController;
use App\Http\Controllers\Api\Admin\UserController;
use App\Http\Controllers\Api\Admin\RoleController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
// Authentication Routes
Route::prefix('auth')->group(function () {
    Route::controller(AuthController::class)->group(function () {
        Route::post('login', 'login');
        Route::post('logout', 'logout');
    });
    Route::controller(RegisterController::class)->group(function () {
        Route::post('register', 'register');
        Route::post('verifyEmailVerificationCode', 'verifyEmailVerificationCode');
        Route::post('verificationCodeResend', 'verificationCodeResend');
    });
    Route::controller(ForgetController::class)->group(function () {
        Route::post('forgetPasswordMail', 'forgetPasswordMail');
        Route::post('verifyResetCode', 'verifyResetCode');
        Route::post('resetPassword', 'resetPassword');
    });
});

Route::middleware(['auth:sanctum'])->prefix('admin')->group(function () {
    Route::prefix('profile')->group(function () {
        Route::controller(ProfileController::class)->group(function () {
            Route::get('getUser', 'getUser');
            Route::post('uploadPhoto', 'uploadPhoto');
            Route::post('storeGeneralData', 'storeGeneralData');
            Route::post('updatePassword', 'updatePassword');
        });
    });
    Route::prefix('user')->group(function () {
        Route::controller(UserController::class)->group(function () {
            Route::get('listing', 'listing');
            Route::post('detail', 'detail');
            Route::get('role/listing', 'roleListing');
            Route::post('store', 'store');
            Route::post('update', 'update');
            Route::post('delete', 'delete');
        });
    });
    Route::prefix('role')->group(function () {
        Route::controller(RoleController::class)->group(function () {
            Route::get('listing', 'listing');
        });
    });
});

