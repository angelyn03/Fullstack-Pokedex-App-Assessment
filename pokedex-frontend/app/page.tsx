"use client";

import { useEffect, useState, useRef } from "react";
import PokemonList from "../components/PokemonList";
import Carousel from "../components/Carousel";

export default function Home() {
  const topRef = useRef(null);
  const [hideTop, setHideTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!topRef.current) return;
      const topHeight = topRef.current.offsetHeight;
      setHideTop(window.scrollY > topHeight); // hide after scrolling past top
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {/* Top Section */}
      <div
        ref={topRef}
        style={{
          display: "flex",
          marginBottom: "20px",
          transition: "transform 0.3s",
          transform: hideTop ? "translateY(-100%)" : "translateY(0)",
          zIndex: 5,
        }}
      >
        {/* Carousel */}
        <div style={{ flex: 1 }}>
          <Carousel />
        </div>

        {/* Right Static Banners */}
        <div
          style={{
            width: "200px",
            marginLeft: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div
            style={{
              height: "70px",
              backgroundColor: "pink",
              textAlign: "center",
              lineHeight: "70px",
              fontWeight: "bold"
            }}
          >
            Static Banner
          </div>
          <div
            style={{
              height: "70px",
              backgroundColor: "pink",
              textAlign: "center",
              lineHeight: "70px",
              fontWeight: "bold"
            }}
          >
            Static Banner
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "200px 1fr 200px",
          gap: "10px",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Left Box */}
        <div
          style={{
            width: "200px",
            height: "300px",
            backgroundColor: "lightgrey",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "sticky",
            top: 0,
            fontWeight: "bold"
          }}
        >
          <img
            src="https://via.placeholder.com/180x400?text=Left+Image"
            alt="Static Image"
            style={{
              width: "90%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Center Pokémon List */}
        <div>
          <PokemonList />
        </div>

        {/* Right Box */}
        <div
          style={{
            width: "200px",
            height: "300px",
            backgroundColor: "lightgrey",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "sticky",
            top: 0,
            fontWeight: "bold"
          }}
        >
          <img
            src="https://via.placeholder.com/180x400?text=Right+Image"
            alt="Static Image"
            style={{
              width: "90%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
}