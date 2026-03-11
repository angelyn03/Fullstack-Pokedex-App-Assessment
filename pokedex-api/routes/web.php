<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PokemonController;

// Route for Pokédex API (in web.php)
Route::get('/pokemons', [PokemonController::class, 'index']);