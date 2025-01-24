import React, { useEffect, useState } from "react";

const Mosca = (props) => {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const moveFly = () => {
      // Generar un nuevo destino aleatorio dentro del rango del contenedor
      const newX = Math.random() * 90;
      const newY = Math.random() * 90;

      setPosition({ x: newX, y: newY });
    };

    const interval = setInterval(moveFly, 200); // Cambiar destino cada 1 segundo
    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
  }, []);
  
  return (
    <div
      className={`absolute size-2  rounded-full`}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: "translate(-50%, -50%)",
        transition: "all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)", // Movimiento suave
        backgroundColor: props.color
      }}
    ></div>
  );
};

export default Mosca;