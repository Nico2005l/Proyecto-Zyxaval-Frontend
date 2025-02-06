import React, { useState, useEffect } from "react";
import Header from "./Header";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'


const MuroWidgets = () => {
  
  const [widgets, setWidgets] = useState([ClockWidget, WeatherWidget,ExchangeRateWidget  , CalendarWidget, GifSearchWidget]);


  return (
    <div className="bg-gradient-to-b from-black to-gray-600 min-h-screen p-6">
      <Header title="Widgets" description="Diversos widgets algunos mas interesantes que otros." />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {widgets.map((Widget, index) => (
          <div className="bg-white h-fit p-6 rounded-lg shadow-lg" key={index}>
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
    NZD: "Dólar neozelandés",
    BRL: "Real brasileño",
    PYG: "Guaraní paraguayo",
    UYU: "Peso uruguayo",
    BOB: "Boliviano",
    CLP: "Peso chileno",
    COP: "Peso colombiano",
    MXN: "Peso mexicano",
    PEN: "Sol Peruano",
  };

  const flags = {
    USD: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/513px-Flag_of_the_United_States.svg.png",
    EUR: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/180px-Flag_of_Europe.svg.png",
    ARS: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/432px-Flag_of_Argentina.svg.png",
    GBP: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/450px-Flag_of_the_United_Kingdom_%283-5%29.svg.png",
    JPY: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/405px-Flag_of_Japan.svg.png",
    AUD: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/540px-Flag_of_Australia_%28converted%29.svg.png",  
    CAD: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada.svg/540px-Flag_of_Canada.svg.png",
    CHF: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_of_Switzerland_%28Pantone%29.svg/270px-Flag_of_Switzerland_%28Pantone%29.svg.png",
    CNY: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/405px-Flag_of_the_People%27s_Republic_of_China.svg.png",
    SEK: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/432px-Flag_of_Sweden.svg.png",
    NZD: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/540px-Flag_of_New_Zealand.svg.png",
    BRL: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/386px-Flag_of_Brazil.svg.png",
    PYG: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/491px-Flag_of_Paraguay.svg.png",
    UYU: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/406px-Flag_of_Uruguay.svg.png",
    BOB: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Bolivia.svg/396px-Flag_of_Bolivia.svg.png",
    CLP: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/405px-Flag_of_Chile.svg.png",
    COP: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/405px-Flag_of_Colombia.svg.png",
    MXN: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/473px-Flag_of_Mexico.svg.png",
    PEN: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/405px-Flag_of_Peru.svg.png"
  };

  const apiKey = process.env.REACT_APP_EXCHANGE_API_KEY;
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
              className="size-fit p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              value={currencies[0]}
              onChange={(e) => setCurrencies([e.target.value, currencies[1]])}
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {Object.keys(flags).map((currency) => (
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
              {Object.keys(flags).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
            <button className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={() => setCurrencies([currencies[1], currencies[0]])}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v6h6M20 20v-6h-6M4 10l6-6M20 14l-6 6" />
              </svg>
            </button>
          </div>
          {exchangeRate && (
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 px-6 py-3 rounded-xl text-lg border-2 border-gray-500 transform transition duration-500 hover:scale-105 shadow-sm">
                <p>{amount} {currencyNames[currencies[0]]}</p>
                <img className="w-6 h-8 object-scale-down" src={flags[currencies[0]]} alt="" />
              </div>
              <p className="text-md text-gray-500">Es igual a</p>
              <div className="flex items-center gap-2 px-6 py-3 rounded-xl text-lg border-2 border-gray-500 transform transition duration-500 hover:scale-105 shadow-sm mb-4">
                <p>{exchangeRate.conversion_result?.toFixed(2)} {currencyNames[currencies[1]]}</p>
                <img className="w-6 h-8 object-scale-down" src={flags[currencies[1]]} alt="" />
              </div>
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
            {time.toLocaleTimeString()} UTC -3
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
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY; // Reemplaza con tu API key de OpenWeatherMap
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
      const apiKey = process.env.REACT_APP_GIF_API_KEY; // Reemplaza con tu API key de Giphy
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