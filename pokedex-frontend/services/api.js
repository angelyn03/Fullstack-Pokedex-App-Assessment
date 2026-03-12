export async function fetchPokemons(page = 1, limit = 20) {
    const res = await fetch(
      `http://localhost:8000/pokemons?page=${page}&limit=${limit}`
    );
    if (!res.ok) throw new Error("Failed to fetch Pokemons");
    return res.json();
  }