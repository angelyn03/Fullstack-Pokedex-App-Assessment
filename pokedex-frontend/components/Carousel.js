"use client";

import { useEffect, useState } from "react";

const images = [
  "https://via.placeholder.com/800x150?text=Image1",
  "https://via.placeholder.com/800x150?text=Image2",
  "https://via.placeholder.com/800x150?text=Image3",
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 3000); // rotate every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "150px",
        backgroundColor: "pink",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Carousel Image */}
      <img
        src={images[index]}
        alt={`Banner ${index + 1}`}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "opacity 0.5s ease-in-out",
          fontWeight: "bold"
        }}
      />

      {/* Slide indicators as horizontal rectangles */}
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "8px",
        }}
      >
        {images.map((_, i) => (
          <div
            key={i}
            style={{
              width: "20px",          // rectangle width
              height: "6px",          // rectangle height
              borderRadius: "3px",    // optional rounded corners
              backgroundColor: i === index ? "orange" : "rgba(255,255,255,0.5)",
              transition: "background-color 0.3s",
            }}
          />
        ))}
      </div>
    </div>
  );
}