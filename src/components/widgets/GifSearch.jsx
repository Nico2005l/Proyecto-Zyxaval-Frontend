import { useState } from "react";


export default function GifSearch () {
  const [query, setQuery] = useState("");
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchGifs = async () => {
    if (!query) return;
    setLoading(true);
    try {
      const apiKey = import.meta.env.VITE_APP_GIF_API_KEY; // Reemplaza con tu API key de Giphy
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