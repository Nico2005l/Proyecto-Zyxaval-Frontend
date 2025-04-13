import Header from "./Header";
import Spinner from "./Spinner";
import Frasco from "./Frasco";
import ColorPicker from "./ColorPicker";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { checkSession } from "../utils/checkSession";
import {BACKEND_URL} from '../utils/BackendUrl.js';
import { deleteFly, createFly, changeJarName, deleteJar, fetchJar, fetchFlies } from "../fetchs/BackendFetchs.js";
import { s } from "framer-motion/client";

function MenuFrasco() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [jar, setJar] = useState({});
    const [flies, setFlies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedColor, setSelectedColor] = useState("#FFFFFF"); 

    const handleDelete = () => {
        deleteJar(id);
        navigate('/FrascosYMoscas');
    }; 

    const handleChangeName = (event) => {
        event.preventDefault();
        const name = event.target.elements.name.value;
        changeJarName(name, id);
        fetchJar();
    };

    const handleColorSelect = (color) => {
        setSelectedColor(color); 
    };

    useEffect(() => {

        const verifySession = async () => {
            const isLoggedIn = await checkSession();
            if (!isLoggedIn) {
                navigate('/login');
            }else{
                const data = fetchJar(id);
                const dataFlies = fetchFlies(id);
                dataFlies.then((response) => {
                    setFlies(response);
                });
                data.then((response) => {
                    setJar(response);
                    setLoading(false);
                });
            };
        };
        verifySession(); 
        
    }, [flies]);

    if (loading) {
        return <Spinner />;
    }

    return (
        <div className="bg-gradient-to-b from-black to-gray-800 min-h-screen p-4">
            <Header title="Menu Frasco" description="Aquí puedes gestionar tu frasco. Ademas de añadir y quitar moscas"/>  
            <div className="w-full max-w-6xl rounded-lg overflow-hidden shadow-2xl bg-white p-8 flex flex-col md:flex-row items-center gap-6 justify-self-center">
                <div className="bg-gray-100 p-8 rounded-lg shadow-md w-full md:w-auto">
                    <Frasco name={jar.name} id={jar.id} key={flies}/>
                </div>
                <div className="bg-gray-100 p-8 rounded-lg shadow-md w-full h-full">
                    <form onSubmit={handleChangeName} className="w-full max-w-4xl rounded-lg overflow-hidden bg-gray-100 p-6 space-y-4">
                        <div>
                            <label className='text-black text-2xl font-light  mr-4' htmlFor="name">Cambiar nombre del frasco:</label>
                            <input className='px-6 py-3 bg-white text-black rounded-full text-lg border-2 mt-4 border-blue-500 transform transition duration-500 hover:scale-105 shadow-sm mb-4 w-full' type="text" id="name" name="name" required />
                        </div>
                        <button className='px-6 py-3 bg-blue-500 text-white rounded-full text-lg transform transition duration-500 hover:scale-105 shadow-sm hover:bg-blue-700 w-full' type="submit">Cambiar Nombre</button>
                    </form>
                    <div className="flex flex-col md:flex-row gap-4 justify-self-center mt-4">
                        <button onClick={handleDelete} className='px-6 py-3 bg-red-500 text-white rounded-full text-lg transform transition duration-500 hover:scale-105 shadow-sm hover:bg-red-700 w-full md:w-auto' type="button">Eliminar Frasco</button>
                        
                    </div>
                    
                </div>
            </div>
            <div className="w-full max-w-6xl rounded-lg overflow-hidden shadow-lg bg-white p-8 mt-8 justify-self-center">
                <h1 className='text-3xl font-light mb-6'>Añadir Mosca</h1>
                <form className="grid gap-4" onSubmit={async (e) => {
                    e.preventDefault();
                    await createFly(id, selectedColor);
                    setFlies([...flies, { id: flies.length + 1, bodyColor: selectedColor }]);
                }}>
                    <div>
                        <h2 className="text-2xl font-light">Elige un color:</h2>
                        <div className="gap-4">
                            <ColorPicker onColorSelect={handleColorSelect} />
                            <div className="flex items-center gap-4">
                                <p className="text-2xl font-light text-gray-600">Color seleccionado:</p>
                                <div
                                    className="size-20 rounded-full border-2 border-gray-300"
                                    style={{ backgroundColor: selectedColor }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <button className='px-6 py-3 bg-blue-500 text-white rounded-full text-lg transform transition duration-500 hover:scale-105 shadow-sm hover:bg-blue-700' type="submit">Añadir Mosca</button>
                </form>
            </div>
            <div className="w-full max-w-6xl rounded-lg overflow-hidden shadow-lg bg-white p-8 mt-8 justify-self-center">
                <h1 className='text-3xl font-light mb-6'>Moscas:</h1>
                <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    
                    {flies.map((fly) => (
                        <li key={fly.id} className="bg-gray-100 p-8 rounded-lg shadow-md flex flex-col items-center">
                            <div className="flex items-center justify-center mb-4">
                                <div className="size-6 rounded-full border-2 border-gray-300" style={{ backgroundColor: fly.bodyColor }}></div>
                            </div>
                            <p className="text-xl font-light mb-4">
                            Tipo: {(() => {
                                const rarityCycle = fly.id % 6;
                                if (rarityCycle === 0) return 'Mítica';
                                if (rarityCycle === 1) return 'Legendaria';
                                if (rarityCycle === 2) return 'Épica';
                                if (rarityCycle === 3) return 'Rara';
                                if (rarityCycle === 4) return 'Inusual';
                                return 'Común';
                            })()}
                            </p>
                            <button onClick={async () => {
                                await deleteFly(id, fly.id);
                                setFlies(flies.filter((f) => f.id !== fly.id));
                            }} className="px-6 py-3 bg-red-500 text-white rounded-full text-lg transform transition duration-500 hover:scale-105 shadow-sm hover:bg-red-700">Eliminar</button>
                        
                        </li>
                    ))}
                </ul>
            </div>
        </div>  
    );
}

export default MenuFrasco;

