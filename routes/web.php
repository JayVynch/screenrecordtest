<?php

use App\Http\Controllers\AdiloController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [ AdiloController::class,'index'])->name('home');


Route::get('/records/lists',[ AdiloController::class,'lists'] )->name('record.list');

Route::get('/records/lists/mine',[ AdiloController::class,'mylists'] );

Route::get('/records/screens/1',[ AdiloController::class,'record'] );
