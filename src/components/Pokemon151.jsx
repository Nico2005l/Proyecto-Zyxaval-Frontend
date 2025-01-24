import Header from "./Header";
import Pokemon from "./Pokemon";
import Spinner from "./Spinner";
import { useEffect, useState } from 'react';
import { checkSession } from "../utils/checkSession";
import { useNavigate } from "react-router-dom";


const Pokemon151 = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
  
    useEffect(() => {

      const fetchPokemon = async () => {
        try {
          const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=900');
          const data = await response.json();
  
          
          const detailedPokemon = await Promise.all(
            data.results.map(async (pokemon) => {
              const detailsResponse = await fetch(pokemon.url);
              const details = await detailsResponse.json();
  
              return {
                name: details.name,
                image: details.sprites.other.showdown.front_default,
                type1: details.types[0]?.type.name || 'Unknown',
                type2: details.types[1]?.type.name || null,
              };
            })
          );
  
          setPokemonList(detailedPokemon);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching Pokémon data:', error);
        }
      };

      const verifySession = async () => {
        const isLoggedIn = await checkSession();
        if (!isLoggedIn) {
          navigate('/login');
        } else {
          await fetchPokemon();
        }
      };

      verifySession();

    }, []);
  
    if (loading) {
      return <Spinner />;
    }



    return (
    
    <div className="mx-auto  bg-gradient-to-b from-black to-gray-600 min-h-screen pt-8">
        <Header title="Pokemon 151" description="Conoce a los primeros 151 Pokemon. Utiliza CTRL+F para buscar por nombre"/>
        <div className="grid grid-cols-1 md:grid-cols-4  gap-6 p-6 backdrop-brightness-200 rounded-lg shadow-lg">
            {pokemonList.map((pokemon, index) => (
                <Pokemon
                key={index}
                name={pokemon.name}
                image={pokemon.image}
                type1={pokemon.type1}
                type2={pokemon.type2}
                />
            ))}
        </div>
    </div>  );
}

export default Pokemon151;