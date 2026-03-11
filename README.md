# Fullstack Pokedex

## Backend (Laravel)

### Install
- cd pokedex-api
- composer install
- php artisan serve

- API Endpoint :
GET /api/pokemons?page=1&limit=20

- Example Response
[
 { name, image, types, height, weight }
]


## Frontend (Next.js)
- cd pokedex-frontend
- npm install
- npm run dev

Frontend fetches data from Laravel API.

# Fullstack Pokédex App
A fullstack Pokédex app using **Laravel** as the backend API and **Next.js** as the frontend.  
It fetches Pokémon data from [PokeAPI](https://pokeapi.co/) via the Laravel backend and displays it in a scrollable, searchable list with a carousel and static banners.  

---

## Project Structure
assessment/
├─ pokedex-api/ # backend Laravel API
│ ├─ app/
│ ├─ routes/
│ ├─ database/
│ └─ ...
├─ pokedex-frontend/ # Next.js frontend
│ ├─ app/
│ ├─ components/
│ ├─ services/
│ └─ ...
├─ README.md

---

## Backend Setup (Laravel)

### Prerequisites

- PHP >= 8.1
- Composer
- SQLite/MySQL/PostgreSQL (optional for this demo)
- Node.js & npm (only if using Laravel Mix for assets)

### Steps
1. Navigate to the backend folder:
- cd pokedex-api

2. Install dependencies:
- composer install

3. Copy .env example:
- cp .env.example .env

4. Generate application key:
- php artisan key:generate

5. Start the Laravel server:
- php artisan serve
- The backend API is now available at http://127.0.0.1:8000.

## CORS Setup
Since frontend and backend run on different ports, you need to allow CORS:

1. If using Laravel 12, edit app/Http/Middleware/HandleCors.php (or create config/cors.php) and allow your frontend origin:
- 'paths' => ['api/*', 'pokemons'],
- 'allowed_origins' => ['http://localhost:3000'],

2. Clear config cache:
- php artisan config:clear
- php artisan route:clear
- php artisan cache:clear

## Frontend Setup (Next.js)
- Prerequisites
- Node.js >= 18
- npm or yarn

### Steps
1. Navigate to frontend folder:
- cd pokedex-frontend

2. Install dependencies:
- npm install
# or
yarn install

3. Start development server:
- npm run dev
# or
yarn dev
- Frontend available at http://localhost:3000.

## API Documentation
1. GET /pokemons: Fetch a paginated list of Pokémon with details.

2. Request: GET http://127.0.0.1:8000/pokemons?page=<number>&limit=<number>

3. Query Parameters:
| Parameter | Type | Description                              |
| --------- | ---- | ---------------------------------------- |
| page      | int  | Page number (default: 1)                 |
| limit     | int  | Number of Pokémon per page (default: 10) |

4. Response:
[
  {
    "name": "bulbasaur",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    "types": ["grass", "poison"],
    "height": 10,
    "weight": 130
  },
  {
    "name": "ivysaur",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    "types": ["grass", "poison"],
    "height": 10,
    "weight": 130
  }
]

## Frontend Features
1. Top Section:
- Carousel banner with 3 images (auto-rotate)
- Two static banners on the right
- Smooth hide/show for carousel & banners on scroll

2. Middle Section:
- Left and right static boxes (sticky)
- Pokémon list in the center

3. Pokémon Cards:
- Horizontal rectangle cards
- Image on the left, name (bold) and types on the right
- Search functionality triggered via a button
- Pagination via “Load More” button
- Sticky left/right boxes and search bar

## Packages & Libraries
1. Backend: Laravel 12, HTTP Client (Http::get) for PokeAPI
2. Frontend: Next.js 16, React 18 hooks, CSS inline styles

## Run Project
1. Start pokedex-api(backend): php artisan serve
2. Start pokedex-frontend(frontend): npm run dev
3. Visit http://localhost:3000 to see the full app
