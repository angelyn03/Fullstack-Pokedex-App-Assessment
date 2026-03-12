"use client";

export default function SearchBar({ search, setSearch, onSearch }) {
  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
      {/* Input */}
      <input
        type="text"
        placeholder="Pokemon Name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          flex: 1,
          padding: "10px",
          border: "2px solid #ccc",
          borderRadius: "30px",
          backgroundColor: "white",
          outline: "none",
          fontSize: "16px",
        }}
      />

      {/* Search Button */}
      <button
        onClick={onSearch}
        style={{
          padding: "10px 20px",
          backgroundColor: "orange",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        Search
      </button>
    </div>
  );
}