export default function PokemonCard({ pokemon }) {
    return (
      <div
        className="pokemon-card"
        style={{
          display: "flex",             // horizontal layout
          alignItems: "center",
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "10px",
          margin: "5px",
          width: "300px",             // fixed width for rectangle
          gap: "10px",
          backgroundColor: "#fff",
        }}
      >
        {/* Left: Pokémon Image */}
        <img
          src={pokemon.image}
          alt={pokemon.name}
          width={80}
          height={80}
          style={{ borderRadius: "8px", objectFit: "cover" }}
        />
  
        {/* Right: Name + Types */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h3 style={{ margin: 0, textTransform: "capitalize", fontWeight: "bold" }}>{pokemon.name}</h3>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "4px" }}>
            {pokemon.types.map((type) => (
              <span
                key={type}
                style={{
                  backgroundColor: "#eee",
                  borderRadius: "4px",
                  padding: "2px 6px",
                  fontSize: "12px",
                  textTransform: "capitalize",
                }}
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }