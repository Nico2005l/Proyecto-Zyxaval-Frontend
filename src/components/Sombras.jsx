import React, { useState } from "react";
import Header from "./Header";

const Sombras = () => {
  const [size, setSize] = useState(50); // Control del tamaño
  const [blur, setBlur] = useState(15); // Difuminado
  const [spread, setSpread] = useState(5); // Expansión
  const [borderRadius, setBorderRadius] = useState(20); // Forma
  const [shadowColor, setShadowColor] = useState("#000000"); // Color de la sombra

  const resetValues = () => {
    setSize(50);
    setBlur(15);
    setSpread(5);
    setBorderRadius(20);
    setShadowColor("#000000");
  };

  return (
    <div className="bg-gradient-to-b from-black to-gray-600 min-h-screen">
      <Header
        title="Generador de sombras"
        description="Experimenta con formas, colores y patrones para crear sombras únicas y dinámicas."
      />
      <div className="flex flex-col items-center gap-6 p-6">
        {/* Controles */}
        <div className="flex flex-wrap gap-6 justify-center">
          <div>
            <label className="block text-lg text-white font-light">Tamaño ({size}px)</label>
            <input
              type="range"
              min="30"
              max="100"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-lg text-white font-light">Difuminado ({blur}px)</label>
            <input
              type="range"
              min="10"
              max="20"
              value={blur}
              onChange={(e) => setBlur(e.target.value)}
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-lg text-white font-light">Expansión ({spread}px)</label>
            <input
              type="range"
              min="10"
              max="20"
              value={spread}
              onChange={(e) => setSpread(e.target.value)}
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-lg text-white font-light">Forma ({borderRadius}%)</label>
            <input
              type="range"
              min="0"
              max="50"
              value={borderRadius}
              onChange={(e) => setBorderRadius(e.target.value)}
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-lg text-white font-light mb-2">Color</label>
            <div className="flex items-center gap-4">
              <input
                type="color"
                value={shadowColor}
                onChange={(e) => setShadowColor(e.target.value)}
                className="size-cover border-2 rounded-lg" 
              />
              <span className="text-white">{shadowColor}</span>
            </div>
          </div>
        </div>

        {/* Vista previa */}
        <div className="relative flex items-center justify-center mt-8">
          <div
            className="transition-all duration-300 ease-in-out"
            style={{
              boxShadow: `0px 0px ${blur}px ${spread}px ${shadowColor}`,
              borderRadius: `${borderRadius}%`,
              width: `${size}px`,
              height: `${size}px`,
              background: `${shadowColor}`,
            }}
          />
        </div>

        {/* Botones */}
        <div className="flex gap-4 mt-6">
          <button
            className="px-6 py-3 bg-blue-500 text-white rounded-full text-lg transform transition duration-500 hover:scale-105 shadow-sm hover:bg-blue-700"
            onClick={resetValues}
          >
            Reiniciar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sombras;
