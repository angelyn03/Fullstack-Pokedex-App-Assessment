<?php

return [
    'paths' => ['api/*', 'pokemons'],   // allow your API routes
    'allowed_methods' => ['*'],         // allow GET, POST, etc.
    'allowed_origins' => ['http://localhost:3000'],  // your frontend
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => false,
];