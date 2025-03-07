import { useState, useEffect } from "react";


export default function WeatherWidget() {
  const [city, setCity] = useState("Londres");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(null);
        const apiKey = import.meta.env.VITE_APP_WEATHER_API_KEY;
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`,
          { signal: abortController.signal }
        );

        if (!response.ok) {
          throw new Error("Ciudad no encontrada");
        }

        const data = await response.json();
        setWeather(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Error fetching weather:", error);
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();

    return () => {
      abortController.abort(); // Cancelar la solicitud si el componente se desmonta
    };
  }, [city]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCity = e.target.city.value.trim();
    if (newCity) {
      setCity(newCity);
    } else {
      setError("Por favor, ingresa una ciudad.");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Clima</h2>
      <form className="flex flex-row gap-4 mb-4" onSubmit={handleSubmit}>
        <input
          id="city"
          type="text"
          placeholder="Buscar ciudad..."
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Cambiar
        </button>
      </form>

      {loading ? (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      ) : error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : weather ? (
        <div className="flex flex-row gap-4 justify-evenly items-center">
          <div className="flex flex-col gap-2 items-center">
            <p className="text-xl font-medium text-gray-700">
              {weather.name}, {weather.sys.country}
            </p>
            <p className="text-3xl font-bold text-blue-600">
              {weather.main.temp}°C
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="imagen del clima"
              className="w-20 h-20"
            />
            <p className="text-lg capitalize text-gray-600">
              {weather.weather[0].description}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};