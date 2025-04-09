import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Spinner from './Spinner';
import {BACKEND_URL} from '../utils/BackendUrl.js';

const AsignPokemon = async (name) => {
    const token = sessionStorage.getItem('token');
    const response = await fetch(BACKEND_URL + '/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', token },
        body: JSON.stringify({ pokemon: name }),
    });
    const data = await response.json();
    return data;
};

const handleFavorite = async (name) => {
    const data = await AsignPokemon(name);
    if (data.error) {
        alert(data.error);
    } else {
        window.location.reload();
    }
};

const PokemonInfo = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [profileData, setProfileData] = useState([]);
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(true);

    useEffect(() => {

    const fetchProfile = async () => {
        const token = sessionStorage.getItem('token');
        const response = await fetch(URL + '/profile', {
            method: 'GET',
            headers: { token },
        });
        const data = await response.json();
        setProfileData(data);
    };

    const fetchPokemonDetail = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();
        setPokemon(data);
        const response2 = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`);
        const data2 = await response2.json();
        setPokemonData(data2);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Pokémon details:', error);
      }
    };

    fetchPokemonDetail();
    fetchProfile();
  }, [name]);

  if (loading) {
    return <Spinner />;
  }

  const typeColors = {
    fire: 'bg-red-300 text-red-900',
    water: 'bg-blue-300 text-blue-900',
    electric: 'bg-yellow-300 text-yellow-900',
    grass: 'bg-green-300 text-green-900',
    ice: 'bg-teal-300 text-teal-900',
    fighting: 'bg-orange-300 text-orange-900',
    poison: 'bg-purple-300 text-purple-900',
    ground: 'bg-yellow-700 text-yellow-100',
    flying: 'bg-indigo-300 text-indigo-900',
    psychic: 'bg-pink-300 text-pink-900',
    bug: 'bg-lime-300 text-lime-900',
    rock: 'bg-gray-400 text-gray-900',
    ghost: 'bg-indigo-900 text-indigo-100',
    dragon: 'bg-purple-700 text-purple-100',
    dark: 'bg-gray-800 text-gray-100',
    steel: 'bg-gray-300 text-gray-900',
    fairy: 'bg-pink-300 text-pink-900',
    normal: 'bg-gray-300 text-gray-900',
    none: 'bg-gray-300 text-gray-500',
};

const gradientColors = {
    fire: 'from-red-300 to-red-500',
    water: 'from-blue-200 to-blue-500',
    electric: 'from-yellow-200 to-yellow-500',
    grass: 'from-green-200 to-green-500',
    ice: 'from-teal-200 to-teal-500',
    fighting: 'from-orange-200 to-orange-500',
    poison: 'from-purple-200 to-purple-500',
    ground: 'from-yellow-700 to-yellow-500',
    flying: 'from-indigo-200 to-indigo-500',
    psychic: 'from-pink-200 to-pink-500',
    bug: 'from-lime-200 to-lime-500',
    rock: 'from-gray-400 to-gray-500',
    ghost: 'from-indigo-900 to-indigo-500',
    dragon: 'from-purple-700 to-purple-500',
    dark: 'from-gray-800 to-gray-500',
    steel: 'from-gray-300 to-gray-500',
    fairy: 'from-pink-300 to-pink-500',
    normal: 'from-gray-200 to-gray-500',
    none: 'from-gray-200 to-gray-500',
};

const primaryType = pokemon.types[0].type.name;

const spanishFlavorText = pokemonData.flavor_text_entries.find(entry => entry.language.name === 'es').flavor_text.replace("", " ");

return (
    <div className={`max-h-full p-6 bg-gradient-to-t ${gradientColors[primaryType]}`}>
        <div className="flex justify-end">
            {profileData.pokemon === name ? 
            <p className='px-4 py-2 bg-black text-white font-bold rounded-full w-fit'>Este es tu Pokémon Favorito</p> 
            : 
            <button className={`px-4 py-2 ${typeColors[pokemon.types[0].type.name]} text-white font-bold rounded-full hover:bg-black transition duration-300 ease-in-out`} onClick={() => handleFavorite(name)}>
                Marcar como Favorito &#x2661;
            </button>}
        </div>
        
        <Header title={pokemon.name} description={spanishFlavorText}/>
        
        <div className="w-full h-full flex justify-center bg-transparent">
            <div className='w-full max-w-6xl rounded-lg overflow-hidden shadow-2xl bg-transparent p-8 gap-5 align-text-top grid grid-cols-1 md:grid-cols-2'>
                <img
                    src={pokemon.sprites.other['official-artwork'].front_default}
                    alt={pokemon.name}
                    className="border-4 border-transparent rounded-lg shadow-lg  w-full"
                />
                <div className="text-left text-2xl text-black bg-white bg-opacity-50 p-6 rounded-lg shadow-lg flex-col w-full">
                    <div className='flex items-center'>
                        <h2 className="font-sans m-4">Tipos:</h2>
                        <div className=" justify-center space-x-4 my-4">
                            {pokemon.types.map((typeInfo, index) => (
                                <span
                                    key={index}
                                    className={`px-4 py-2 text-sm font-medium rounded-full ${typeColors[typeInfo.type.name]} `}
                                >
                                    {typeInfo.type.name.charAt(0).toUpperCase() + typeInfo.type.name.slice(1)}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className='flex  items-center m-4'>
                        <h2 className="text-2xl  font-sans mr-4">Altura:</h2>
                        <p className='text-xl'>{pokemon.height / 10} m</p>
                    </div>
                    <div className='flex items-center m-4 '>
                        <h2 className="text-2xl  font-sans mr-4">Peso:</h2>
                        <p className='text-xl'>{pokemon.weight / 10} kg</p>
                    </div>
                    <div className='flex items-center m-4'>
                        <h2 className="text-2xl  font-sans mr-4">Habilidades:</h2>
                        <div className='flex flex-wrap'>
                            {pokemon.abilities.map((ability, index) => (
                                <p key={index} className='text-xl m-1'>{ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)}</p>
                            ))}
                        </div>
                    </div>
                    <div className='flex items-center m-4'>
                        <h2 className="text-2xl  font-sans mr-4">Nro. Pokedex:</h2>
                        <p className='text-xl'>{pokemonData.pokedex_numbers[0].entry_number} </p>
                    </div>
                    <div className='grid grid-cols-1 items-baseline m-4 '>
                        <h2 className="text-2xl  font-sans mr-4 mb-4">Estadisticas:</h2>
                        <div className='items-center grid grid-cols-1 gap-2 md:grid-cols-2 ml-4'>
                            {pokemon.stats.map((stat, index) => (
                                <p key={index} className='text-xl m-1'>{stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}: {stat.base_stat}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Header title="Visuales" description="Mira la galería de imágenes de este Pokémon"/>
        <div className="w-full h-full flex justify-center items-center bg-transparent">
            <div className='w-full max-w-6xl rounded-lg overflow-hidden shadow-2xl bg-transparent p-8 flex items-center justify-center gap-5 flex-wrap'>
                {pokemon.sprites.other && Object.keys(pokemon.sprites.other).map((key, index) => {
                    if (key.includes('dream_world') || key.includes('home')|| key.includes('showdown')) {
                        return (
                            <img
                                key={index}
                                src={pokemon.sprites.other[key].front_default}
                                alt={pokemon.name}
                                className="border-4 border-transparent rounded-lg shadow-lg w-60 h-60 transition-transform transform hover:rotate-6 duration-300 ease-in-out"
                            />
                        );
                    }
                })}

                {pokemon.sprites.versions && Object.keys(pokemon.sprites.versions).map((generationKey, index) => (
                    Object.keys(pokemon.sprites.versions[generationKey]).map((versionKey, subIndex) => (
                        pokemon.sprites.versions[generationKey][versionKey].front_default && (
                            <img
                                key={`${index}-${subIndex}`}
                                src={pokemon.sprites.versions[generationKey][versionKey].front_default}
                                alt={pokemon.name}
                                className="border-4 border-transparent rounded-lg shadow-lg w-60 h-60 transition-transform transform hover:rotate-6 duration-300 ease-in-out"
                            />
                        )
                    ))
                ))}
            </div>
        </div>
    </div>
);


};

export default PokemonInfo;