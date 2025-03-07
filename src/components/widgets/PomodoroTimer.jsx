import { useState, useEffect } from "react";

export default function PomodoroTimer() {
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
  
    useEffect(() => {
      let interval;
      if (isActive) {
        interval = setInterval(() => {
          if (seconds === 0) {
            if (minutes === 0) {
              clearInterval(interval);
              setIsActive(false);
              alert(minutes === 25 ? "¡Tiempo de descanso!" : "¡Volver al trabajo!");
              setMinutes(minutes === 25 ? 5 : 25);
            } else {
              setMinutes(minutes - 1);
              setSeconds(59);
            }
          } else {
            setSeconds(seconds - 1);
          }
        }, 1000);
      }
      return () => clearInterval(interval);
    }, [isActive, minutes, seconds]);
  
    const toggleTimer = () => {
      setIsActive(!isActive);
    };
  
    const resetTimer = () => {
      setIsActive(false);
      setMinutes(25);
      setSeconds(0);
    };
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Temporizador Pomodoro</h2>
        <div className="text-4xl font-bold text-blue-600 mb-4">
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </div>
        <div className="flex gap-4">
          <button
            onClick={toggleTimer}
            className={`px-4 py-2 rounded-lg text-white ${isActive ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"} transition-colors`}
          >
            {isActive ? "Pausar" : "Iniciar"}
          </button>
          <button
            onClick={resetTimer}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Reiniciar
          </button>
        </div>
      </div>
    );
  };