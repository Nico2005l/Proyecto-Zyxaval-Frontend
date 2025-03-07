import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';

export default function News() {
  const [category, setCategory] = useState('business');
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categories = {
    politics: 'politica',
    business: 'economia',
    technology: 'tecnologia',
    sports: 'deportes',
  };

  useEffect(() => {
    async function fetchNews() {
      const apiKey = import.meta.env.VITE_APP_NEWS_API_KEY; 
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
            `https://newsdata.io/api/1/latest?apikey=${apiKey}&language=es&category=${category}&country=ar&size=5`
          );
        const data = await response.json();
        if (data.error) {
          setError(data.error.message);
        } else {
          setNews(data.results);
        }
      } catch (err) {
        setError('Error al cargar las noticias.');
      }
      setLoading(false);
    }
    fetchNews();
  }, [category]);

return (
    <div className="p-6 rounded-xl shadow-lg bg-gray-100">
        <h3 className="text-2xl font-bold mb-4">Noticias</h3>
        <div className="flex gap-1 mb-4 items-center justify-between">
            <button
                onClick={() => {
                    const keys = Object.keys(categories);
                    const currentIndex = keys.indexOf(category);
                    const newIndex = (currentIndex - 1 + keys.length) % keys.length;
                    setCategory(keys[newIndex]);
                }}
                className="px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors duration-300  "
            >
                <FontAwesomeIcon icon={faArrowLeft} className="text-xl text-white mt-1" />
            </button>
            <span className="px-4 py-2 rounded-full bg-blue-500 capitalize text-white">
                {categories[category]}
            </span>
            <button
                onClick={() => {
                    const keys = Object.keys(categories);
                    const currentIndex = keys.indexOf(category);
                    const newIndex = (currentIndex + 1) % keys.length;
                    setCategory(keys[newIndex]);
                }}
                className="px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors duration-300  "
            >
                <FontAwesomeIcon icon={faArrowRight} className="text-xl text-white mt-1" />
            </button>
        </div>
        {loading && <p className="mt-2 text-blue-600">Cargando noticias...</p>}
        {error && <p className="mt-2 text-red-600">{error}</p>}
        <ul className="mt-4 space-y-4">
            {news.map((item, index) => (
                <li key={index} className="p-4 rounded-lg shadow-2xl bg-gray-50">
                    <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-semibold hover:underline"
                    >
                        {item.title}
                    </a>
                    {item.image_url && (
                        <img src={item.image_url} alt="imagen noticia" className="mt-2 w-full h-48 object-cover rounded-lg" />
                    )}
                    <p className="mt-2 text-sm text-gray-600">{item.source_name}</p>
                </li>
            ))}
        </ul>
    </div>
);
}
