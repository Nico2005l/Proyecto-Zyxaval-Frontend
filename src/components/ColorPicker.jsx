import React from "react";

const ColorPicker = ({ onColorSelect }) => {
  // Lista de colores disponibles
  const colors = [
    // Naranjas y Amarillos
    "#FF5733", "#FF8D1A", "#FFC300", "#FFD700", "#FFE933",
    // Verdes vibrantes
    "#33FF57", "#6BFF33", "#A1FF33", "#D4FF33", "#F3FF33",
    // Tonos Aqua y Azules
    "#33FFBD", "#33FFF1", "#33D4FF", "#33A1FF", "#337BFF",
    // Morados y Rosados
    "#5733FF", "#8D33FF", "#A133FF", "#D433FF", "#FF33F6",
    // Rojos y Coral
    "#FF33A1", "#FF337B", "#FF3357", "#FF3333", "#FF6B33",
    // Neutros y Grises
    "#FFFFFF", "#E0E0E0", "#B3B3B3", "#808080", "#4D4D4D",
    // Tonos Tierra
    "#3B2F2F", "#6E2C2C", "#8B4513", "#A0522D", "#CD853F",
    // Nuevos Colores
    "#000000", // Negro
    "#D9AD26",
    "#C0C0C0", // Plateado
    "#FF69B4", // Rosa fuerte
    "#40E0D0", // Turquesa
    "#8A2BE2", // Azul violeta
  ];

  return (
    <div className="grid grid-cols-5 md:grid-cols-12 gap-3 p-4">
      {colors.map((color, index) => (
        <div
          key={index}
          className="w-10 h-10 rounded-full cursor-pointer border-2 border-gray-300 hover:scale-110 transition-transform"
          style={{ backgroundColor: color }}
          onClick={() => onColorSelect(color)} // Notifica el color seleccionado
        ></div>
      ))}
    </div>
  );
};

export default ColorPicker;