import { checkSession } from "../utils/checkSession";
import Header from './Header';
import Spinner from './Spinner';
import Frasco from './Frasco';
import {BACKEND_URL} from '../utils/BackendUrl.js';

import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const createJar = async (name) => {
    const token = sessionStorage.getItem('token');
    const response = await fetch(`${BACKEND_URL + '/jars'}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', token },
        body: JSON.stringify({ name }),
    });
    const data = await response.json();
    return data;
};


function FrascosYMoscas() {
    const navigate = useNavigate();
    const [jars, setJars] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {

        const fetchJars = async () => {
            const token = sessionStorage.getItem('token');
            const response = await fetch(`${BACKEND_URL + '/jars'}`, {
              method: 'GET',
              headers: { token },
            });
            const data = await response.json();
            setJars(data);
            setLoading(false);
        }

        const verifySession = async () => {
            const isLoggedIn = await checkSession();
            if (!isLoggedIn) {
                navigate('/login');
            }else{
                await fetchJars();
            }
        };
        
        verifySession();

    }, []);

    if (loading) {
        return <Spinner />;
      }
    return ( 
    <div className="bg-gradient-to-b from-black to-gray-800 min-h-screen p-4">
       <Header title="Frascos y Moscas" description="Aquí puedes crear tus frascos y ver las moscas que has atrapado. Selecciona un frasco para gestionar sus moscas"/>  
       <div className="flex justify-center">
            <form className="w-fit max-w-4xl rounded-lg overflow-hidden shadow-lg bg-white p-6 " action="">
                <div>
                    <label className='text-black text-2xl font-light mb-1 mr-4' htmlFor="name">Nombre del frasco:</label>
                    <input className=' px-6 py-3 bg-white text-black rounded-full text-lg border-2 border-blue-500 transform transition duration-500 hover:scale-105 shadow-sm mb-4' type="text" id="name" name="name" required />
                </div>
                <button className='w-full px-6 py-3 bg-blue-500 text-white rounded-full text-lg transform transition duration-500 hover:scale-105 shadow-sm hover:bg-blue-700' onClick={async (e) => {
                    e.preventDefault();
                    const name = e.target.form.name.value;
                    await createJar(name);
                    window.location.reload();
                }}>Crear frasco</button>
            </form>
        </div>
        <div className="w-full max-w-4xl rounded-lg overflow-hidden shadow-lg bg-white p-8 mt-8 justify-self-center">
            <h1 className='text-3xl font-light mb-6'>Frascos:</h1>
            <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {jars.map((jar) => (
                <Link to={`/Frasco/${jar.id}`} className="text-black">
                    <li key={jar.id} className="bg-gray-100 p-8 rounded-lg shadow-md">
                        <Frasco name={jar.name} id={jar.id}/>
                    </li>
                </Link>
                ))}
            </ul>
      </div>
    </div> );
}

export default FrascosYMoscas;