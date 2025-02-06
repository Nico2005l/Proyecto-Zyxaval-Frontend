import React, { useState, useEffect } from "react";
import Header from "./Header";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'


const MuroWidgets = () => {
  const [widgets, setWidgets] = useState([ClockWidget, WeatherWidget, GifSearchWidget , CalendarWidget, ExchangeRateWidget]);


  return (
    <div className="bg-gradient-to-b from-black to-gray-600 min-h-screen p-6">
      <Header title="Widgets" description="Diversos widgets algunos mas interesantes que otros." />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {widgets.map((Widget, index) => (
          <div className="bg-white h-full p-6 rounded-lg shadow-lg" key={index}>
            <Widget />
          </div>
        ))}
      </div>
    </div>
  );
};

const ExchangeRateWidget = () => {

  const currencyNames = {
    USD: "Dólar estadounidense",
    EUR: "Euro",
    ARS: "Peso argentino",
    GBP: "Libra esterlina",
    JPY: "Yen japonés",
    AUD: "Dólar australiano",
    CAD: "Dólar canadiense",
    CHF: "Franco suizo",
    CNY: "Yuan chino",
    SEK: "Corona sueca",
    NZD: "Dólar neozelandés"
  };

  const apiKey = "a0806b0f916a44c57f3e1c1d"
  const [amount, setAmount] = useState(1);
  const [currencies, setCurrencies] = useState(["USD", "ARS"]);
  const [exchangeRate, setExchangeRate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${currencies[0]}/${currencies[1]}/${amount}`
        );
        const data = await response.json();
        setExchangeRate(data);
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExchangeRate();
  }, [amount, currencies]);

  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Tipos de cambio</h2>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <input
              type="number"
              value={amount}
              onChange={(e) => {
                const value = e.target.value.replace(/[^0-9.]/g, "");
                if (!isNaN(value.replace(",", "."))) {
                  setAmount(value);
                }
              }}
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              value={currencies[0]}
              onChange={(e) => setCurrencies([e.target.value, currencies[1]])}
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {["USD", "EUR", "ARS", "GBP", "JPY", "AUD", "CAD", "CHF", "CNY", "SEK", "NZD"].map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
            <select
              value={currencies[1]}
              onChange={(e) => setCurrencies([currencies[0], e.target.value])}
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {["USD", "EUR", "ARS", "GBP", "JPY", "AUD", "CAD", "CHF", "CNY", "SEK", "NZD"].map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
          {exchangeRate && (
            <div className="flex flex-col gap-2">
              <p className=" px-6 py-3 rounded-xl text-lg border-2 border-gray-500 transform transition duration-500 hover:scale-105 shadow-sm ">
                {amount} {currencyNames[currencies[0]]}
              </p>
              <p className="text-md text-gray-500">Es igual a</p>
              <p className=" px-6 py-3 rounded-xl text-lg border-2 border-gray-500 transform transition duration-500 hover:scale-105 shadow-sm mb-4">
              {exchangeRate.conversion_result?.toFixed(2)} {currencyNames[currencies[1]]}
              </p>
              <p className="text-sm text-gray-500">
                Última actualización: {exchangeRate.time_last_update_utc.replace("+0000", "UTC")}
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
};



const HoroscopoWidget = () => {
  const [signo, setSigno] = useState("gemini"); // Estado para almacenar el signo seleccionado
  const [horoscopo, setHoroscopo] = useState(null); // Estado para almacenar la respuesta de la API
  const [cargando, setCargando] = useState(false); // Estado para manejar la carga

  // Función para obtener el horóscopo
  const obtenerHoroscopo = async () => {

    setCargando(true); // Activamos el estado de carga

    try {
      const apiKey = "46ApryzaDH6bqMWV7YqjZ39PHNxnb6np5s0b5HG3"; // Reemplaza con tu API key de Ohmanda
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

const CalendarWidget = () =>  {
  return (
    <FullCalendar
      plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth"
      locale="esLocale" // Añadir configuración de idioma
    />
  )
}


// Widget 1: Reloj en tiempo real
const ClockWidget = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

return (
    <>
        <h2 className="text-2xl font-semibold mb-4">Reloj</h2>
        <p className="text-4xl font-medium text-blue-600">
            {time.toLocaleTimeString()}
        </p>
    </>
);
};

// Widget 2: Clima actual
const WeatherWidget = () => {
  const [city, setCity] = useState("Londres");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = "440590ed9c477faf922f0be72f5e314a"; // Reemplaza con tu API key de OpenWeatherMap
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`
        );
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("Error fetching weather:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

return (
  <>
    <h2 className="text-2xl font-semibold mb-4">Clima</h2>
    {loading ? (
      <p className="text-gray-500">Cargando...</p>
    ) : (
      <div>
        <form className="flex flex-row gap-4 mb-4" onSubmit={(e) => { 
          e.preventDefault();
          const newCity = e.target.city.value;
          setCity(newCity);
        }}>
          <input
            id="city"
            type="text"
            placeholder="Buscar ciudad..."
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"> 
            Cambiar
          </button>
        </form>
        <div className="flex flex-row gap-4 justify-evenly items-center">
          <div className="flex flex-col gap-2 items-center">
            <p className="text-xl font-medium text-gray-700">{weather.name}, {weather.sys.country}</p>
            <p className="text-3xl font-bold text-blue-600">{weather.main.temp}°C</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="imagen del clima" className="w-20 h-20" />
            <p className="text-lg capitalize text-gray-600">
                {weather.weather[0].description}
            </p>
          </div>
        </div>
      </div>
    )}
  </>
);
};

// Widget 3: Buscador de GIFs
const GifSearchWidget = () => {
  const [query, setQuery] = useState("");
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchGifs = async () => {
    if (!query) return;
    setLoading(true);
    try {
      const apiKey = "aGqjKydspjQLpBb0UAHPkmfXBxWa3F3G"; // Reemplaza con tu API key de Giphy
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=10`
      );
      const data = await response.json();
      setGifs(data.data);
    } catch (error) {
      console.error("Error fetching GIFs:", error);
    } finally {
      setLoading(false);
    }
  };

return (
    <>
        <h2 className="text-2xl font-semibold mb-4">Buscador de GIFs</h2>
        <div className="flex gap-4 mb-4">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar GIFs..."
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                onClick={searchGifs}
                className="bg-blue-500 text-white px-4 rounded-lg hover:bg-blue-600 transition-colors"
            >
                Buscar
            </button>
        </div>
        {loading ? (
            <p className="text-gray-500">Cargando GIFs...</p>
        ) : (
            <div className="grid grid-cols-2 gap-4">
                {gifs.map((gif) => (
                    <img
                        key={gif.id}
                        src={gif.images.fixed_height.url}
                        alt={gif.title}
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                ))}
            </div>
        )}
    </>
);
};

export default MuroWidgets;