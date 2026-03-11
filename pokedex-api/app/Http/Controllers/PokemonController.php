<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class PokemonController extends Controller
{
    public function index(Request $request)
    {
        $page = $request->query('page', 1);
        $limit = $request->query('limit', 20);
        $offset = ($page - 1) * $limit;

        // Fetch list from PokeAPI
        $response = Http::get("https://pokeapi.co/api/v2/pokemon", [
            'limit' => $limit,
            'offset' => $offset
        ])->json();

        $pokemons = [];

        foreach ($response['results'] as $pokemon) {
            $detail = Http::get($pokemon['url'])->json();
            $pokemons[] = [
                'name' => $pokemon['name'],
                'image' => $detail['sprites']['other']['official-artwork']['front_default'],
                'types' => array_map(fn($t) => $t['type']['name'], $detail['types']),
                'height' => 10,
                'weight' => 130
            ];
        }

        return response()->json($pokemons);
    }
}