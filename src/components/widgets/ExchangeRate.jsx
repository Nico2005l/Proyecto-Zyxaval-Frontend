import { useEffect, useState } from "react";

export default function ExchangeRateWidget() {

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
  
    const apiKey = import.meta.env.VITE_APP_EXCHANGE_API_KEY;
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