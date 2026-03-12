"use client";
import { useEffect, useState } from "react";
import { fetchPokemons } from "../services/api";
import PokemonCard from "./PokemonCard";
import SearchBar from "./SearchBar";

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const [inputValue, setInputValue] = useState(""); // input inside SearchBar
  const [search, setSearch] = useState(""); // filter applied after clicking Search

  const [filteredPokemons, setFilteredPokemons] = useState([]);

  const loadPokemons = async () => {
    setLoading(true);
    try {
      const data = await fetchPokemons(page, 10);
      setPokemons(prev => [...prev, ...data]);
      setPage(prev => prev + 1);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  // Only filter after clicking Search
  useEffect(() => {
    setFilteredPokemons(
      pokemons.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, pokemons]);

  const handleSearch = () => {
    setSearch(inputValue);
  };

  return (
    <div>
      {/* Sticky Search Bar */}
      <div
        style={{
          position: "sticky",
          top: 0,
          backgroundColor: "white",
          zIndex: 5,
          paddingBottom: "10px",
        }}
      >
        {/* Pass the handleSearch function into SearchBar */}
        <SearchBar
          search={inputValue}
          setSearch={setInputValue}
          onSearch={handleSearch}
        />
      </div>

      {/* Pokémon Cards */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {filteredPokemons.map((pokemon, idx) => (
          <PokemonCard key={idx} pokemon={pokemon} />
        ))}
      </div>

      {/* Load More button */}
      <div style={{ marginTop: "10px", textAlign: "center" }}>
        <button
          onClick={loadPokemons}
          disabled={loading}
          style={{ padding: "6px 12px", borderRadius: "4px" }}
        >
          {loading ? "Loading..." : "Load More"}
        </button>
      </div>
    </div>
  );
}