import { useNavigate } from 'react-router-dom';

function Pokemon({ name, image, type1, type2 }) {

    const navigate = useNavigate();

    const handleClick = () => {
    navigate(`/pokemon/${name}`);
    };

    const typeColors = {
        fire: 'bg-red-200 text-red-900',
        water: 'bg-blue-200 text-blue-900',
        electric: 'bg-yellow-200 text-yellow-900',
        grass: 'bg-green-200 text-green-900',
        ice: 'bg-teal-200 text-teal-900',
        fighting: 'bg-orange-200 text-orange-900',
        poison: 'bg-purple-200 text-purple-900',
        ground: 'bg-yellow-700 text-yellow-100',
        flying: 'bg-indigo-200 text-indigo-900',
        psychic: 'bg-pink-200 text-pink-900',
        bug: 'bg-lime-200 text-lime-900',
        rock: 'bg-gray-400 text-gray-900',
        ghost: 'bg-indigo-900 text-indigo-100',
        dragon: 'bg-purple-700 text-purple-100',
        dark: 'bg-gray-800 text-gray-100',
        steel: 'bg-gray-300 text-gray-900',
        fairy: 'bg-pink-300 text-pink-900',
        normal: 'bg-gray-200 text-gray-900',
        none: 'bg-gray-200 text-gray-500',
    };

    return (
        <div onClick={handleClick} className="size-min mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 transform transition duration-500 hover:scale-105">
            <img
                src={image}
                alt={name.charAt(0).toUpperCase() + name.slice(1)}
                className="w-full h-40 object-scale-down bg-gray-200"
            />
            <div className="p-6 text-center">
                <h2 className="text-xl font-bold text-gray-900 capitalize">{name}</h2>
                <div className="mt-4 flex justify-center space-x-3">
                    <span className={`px-4 py-2 text-sm font-semibold rounded-full capitalize transform transition duration-500 hover:scale-110 shadow-sm ${typeColors[type1]}`}>
                        {type1.charAt(0).toUpperCase() + type1.slice(1)} 
                    </span>
                    <span className={`px-4 py-2 text-sm font-semibold rounded-full capitalize transform transition duration-500 hover:scale-110 shadow-sm ${typeColors[type2 || 'none']}`}>
                        {(type2 || 'none')}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Pokemon;