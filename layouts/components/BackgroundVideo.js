import React, { useState, useEffect } from "react";

const YouTubeVideo = ({ children }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    setIsLargeScreen(window.innerWidth > 768);
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768); // Cambia condizione a seconda della tua definizione di "sm"
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        height: 500,
        width: "100%",
        overflow: "hidden", // Nasconde il contenuto che sborda
        position: "relative", // Necessario per i children assoluti
      }}
    >
      <div
        style={{
          position: "relative",
          width: isLargeScreen ? "100%" : "177.77%", // 16:9 ratio se "sm", altrimenti inverso
          paddingTop: isLargeScreen ? "56.25%" : "100%", // Altezza dinamica basata sullo schermo
          margin: isLargeScreen ? "0" : "auto", // Centra se è piccolo
          backgroundColor: "black", // Per evitare un fondo bianco se il video non carica subito
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/TX_UNMLgo94?autoplay=1&mute=1&controls=0&loop=1&playlist=TX_UNMLgo94&modestbranding=1&showinfo=0&rel=0&fs=0&iv_load_policy=3&disablekb=1"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
            pointerEvents: "none",
          }}
          frameBorder="0"
          allow="autoplay; loop; fullscreen"
          allowFullScreen
          title="YouTube Video"
        />
      </div>
      {children && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "auto", // Permette interazioni con i children
            zIndex: 1, // Sovrappone i children sopra il video
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default YouTubeVideo;
