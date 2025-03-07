import React, { useState } from "react";

export default function DailyQuoteWidget() {
  const quotes = [
    "El único límite para nuestra realización de mañana son nuestras dudas de hoy.",
    "Haz lo que puedas, con lo que tengas, donde estés.",
    "Siempre parece imposible hasta que se hace.",
    "Actúa como si lo que haces marca la diferencia. Lo hace.",
    "La vida es 10% lo que me ocurre y 90% cómo reacciono a ello.",
    "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito.",
    "No cuentes los días, haz que los días cuenten.",
    "La única manera de hacer un gran trabajo es amar lo que haces.",
    "El fracaso es una gran oportunidad para empezar otra vez con más inteligencia.",
    "La mejor manera de predecir el futuro es inventarlo.",
    "La vida es lo que pasa mientras estás ocupado haciendo otros planes.",
    "El único lugar donde el éxito viene antes que el trabajo es en el diccionario.",
    "No esperes. El tiempo nunca será justo.",
    "La felicidad no es algo hecho. Viene de tus propias acciones.",
    "El único modo de hacer un gran trabajo es amar lo que haces.",
    "La vida es corta, vive apasionadamente.",
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    "No sueñes con el éxito, trabaja para lograrlo.",
    "La vida es un 10% lo que me ocurre y un 90% cómo reacciono a ello.",
    "El éxito no es definitivo, el fracaso no es fatal: lo que cuenta es el valor para continuar."
  ];

  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font- mb-4 text-gray-800">Frase Diaria</h2>
      <blockquote className="text-lg text-gray-700 mb-4 italic">"{quote}"</blockquote>
      <button
        onClick={getRandomQuote}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Nueva Frase
      </button>
    </div>
  );
};