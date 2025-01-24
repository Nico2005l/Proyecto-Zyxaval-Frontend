import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from './Header';
import Frasco from './Frasco';
import Spinner from './Spinner';
import { checkSession } from '../utils/checkSession';

function Profile() {
    const [profileData, setProfileData] = useState([]);
    const [jars, setJars] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {

        const fetchProfile = async () => {
            const token = sessionStorage.getItem('token');
            const response = await fetch('http://localhost:5000/profile', {
              method: 'GET',
              headers: { token },
            });
            const data = await response.json();
            setProfileData(data);
        };

        const fetchJars = async () => {
            const token = sessionStorage.getItem('token');
            const response = await fetch('http://localhost:5000/jars', {
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
            navigate('/login'); // Asumiendo que tienes react-router-dom configurado
          } else {
            await fetchProfile();
            await fetchJars();
          }
        };

        
        
        verifySession();

        

      }, []);
      
      if (loading) {
          return <Spinner />;
        }

      

    return (
    <div className='bg-gradient-to-b from-black to-gray-800 min-h-screen flex flex-col items-center'>
      <Header title="Perfil" description="Aquí puedes ver tu perfil"/>
      <div className="w-full max-w-4xl rounded-lg overflow-hidden shadow-lg bg-white p-8 mt-8 flex flex-row items-center justify-between">
        <h1 className='text-3xl font-light '>Usuario: {profileData.username}</h1>
        <p className='text-lg font-medium text-green-800 bg-green-200 rounded-lg p-4 border border-green-800 '>{profileData.message}</p>
        <button className='px-6 py-3 bg-red-500 text-white rounded-full text-lg transform transition duration-500 hover:scale-105 shadow-sm hover:bg-red-700'
         onClick={() => {
          sessionStorage.removeItem('token');
          window.location.replace('/');
        }}>Cerrar Sesion</button>
      </div>
      <div className="w-full max-w-4xl rounded-lg overflow-hidden shadow-lg bg-white p-8 mt-8">
      {profileData.pokemon ? 
        <div className='flex flex-col justify-between gap-4 mb-8'>
          <h1 className='text-3xl capitalize font-light mb-4'>Pokemon Favorito: {profileData.pokemon}</h1> 
          <div className='grid grid-cols-3 gap-4 items-stretch'>
            <img className='rounded-xl p-4 bg-slate-200 border-4 border-zinc-300 transition-transform transform hover:rotate-6 duration-300 ease-in-out' src={`https://img.pokemondb.net/sprites/home/normal/${profileData.pokemon}.png`} alt={profileData.pokemon}/>
            <img className='rounded-xl p-4 bg-slate-200 border-4 border-zinc-300 transition-transform transform hover:rotate-6 duration-300 ease-in-out' src={`https://img.pokemondb.net/sprites/home/shiny/${profileData.pokemon}.png`} alt={`${profileData.pokemon} shiny`} />
            <img className='rounded-xl p-4 bg-slate-200 border-4 border-zinc-300 transition-transform transform hover:rotate-6 duration-300 ease-in-out' src={`https://img.pokemondb.net/sprites/go/normal/${profileData.pokemon}.png`} alt={`${profileData.pokemon} `} />

          </div>
        </div>
      :
        <h1 className='text-3xl font-light mb-8'>Pokemon Favorito: No tienes un pokemon favorito</h1>}
      <Link to='/pokemon' className="px-6 py-3 bg-blue-500 text-white rounded-full text-lg transform transition duration-500 hover:scale-105 shadow-sm hover:bg-blue-700 w-full">Elegir Pokemon Favorito</Link>
      </div>
      <div className="w-full max-w-4xl rounded-lg overflow-hidden shadow-lg bg-white p-8 mt-8">
      <h1 className='text-3xl font-light mb-6'>Frascos:</h1>
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        <li className="bg-gray-100 p-8 rounded-lg shadow-md "> 
          <Link to='/FrascosYMoscas'>
            <div className='w-40 h-64 justify-self-center shadow-2xl mb-4 transform transition duration-500 hover:scale-105 hover:shadow-3xl '>
              <img className='size-full bg-gradient-to-b from-gray-200 to-gray-400 object-scale-down rounded-lg' src={"/media/iconMas.png"} alt="Añadir Frasco" />
            </div> 
          </Link>
          <p className='font-medium text-black bg-gray-300 rounded-full justify-self-start p-2 border-2 shadow-sm'>Añadir Frasco</p>  
        </li>
        {jars.length > 0 ? jars.map((jar) => (
        <li key={jar.id} className="bg-gray-100 p-8 rounded-lg shadow-md">
          <Frasco name={jar.name} id={jar.id}/>
        </li>
        )) : <p className='text-lg font-medium text-red-800 bg-red-200 rounded-lg p-4 border border-red-800'>No tienes frascos</p>}
      </ul>
      </div>
    </div>
    );
}

export default Profile;