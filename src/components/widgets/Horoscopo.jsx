import React, { useState } from "react";

export default function HoroscopoWidget() {
  const [signo, setSigno] = useState("gemini"); // Estado para almacenar el signo seleccionado
  const [horoscopo, setHoroscopo] = useState(null); // Estado para almacenar la respuesta de la API
  const [cargando, setCargando] = useState(false); // Estado para manejar la carga

  // Función para obtener el horóscopo
  const obtenerHoroscopo = async () => {

    setCargando(true); // Activamos el estado de carga

    try {
      const apiKey = process.env.HOROSCOPE_API_KEY; // Reemplaza con tu API key de Ohmanda
      const response = await fetch(
        ``
      );
      const data = await response.json();
      setHoroscopo(data.horoscope); // Guardamos la respuesta en el estado
    } catch (error) {
      console.error("Error al obtener el horóscopo:", error);
    } finally {
      setCargando(false); // Desactivamos el estado de carga
    }
  };

  return (
    <div>
      <h1>Horóscopo Diario</h1>
      <select
        value={signo}
        onChange={(e) => setSigno(e.target.value)}
      >
        <option value="">Selecciona tu signo</option>
        <option value="aries">Aries</option>
        <option value="tauro">Tauro</option>
        <option value="geminis">Géminis</option>
        <option value="cancer">Cáncer</option>
        <option value="leo">Leo</option>
        <option value="virgo">Virgo</option>
        <option value="libra">Libra</option>
        <option value="escorpio">Escorpio</option>
        <option value="sagitario">Sagitario</option>
        <option value="capricornio">Capricornio</option>
        <option value="acuario">Acuario</option>
        <option value="piscis">Piscis</option>
      </select>

      <button onClick={obtenerHoroscopo}>
        {cargando ? "Cargando..." : "Obtener Horóscopo"}
      </button>

      {horoscopo && (
        <div>
          <h2>{signo.toUpperCase()}</h2>
          <p><strong>Fecha:</strong> {horoscopo.current_date}</p>
          <p><strong>Descripción:</strong> {horoscopo.description}</p>
          <p><strong>Color:</strong> {horoscopo.color}</p>
          <p><strong>Número de la suerte:</strong> {horoscopo.lucky_number}</p>
          <p><strong>Tiempo de la suerte:</strong> {horoscopo.lucky_time}</p>
        </div>
      )}
    </div>
  );
};