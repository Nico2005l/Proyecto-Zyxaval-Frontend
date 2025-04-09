import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { Link } from "react-router-dom";
import { checkSession } from "../utils/checkSession";
import {BACKEND_URL} from '../utils/BackendUrl.js';

const loginUser = async (username, password, navigate) => {
    const response = await fetch(`${BACKEND_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (response.ok) {
      sessionStorage.setItem('token', data.token);
      navigate('/');
      
    } else {
      alert(data.error);
    }
  };


function Login() {
    const navigate = useNavigate();
    useEffect(() => {
        const verifySession = async () => {
            const isLoggedIn = await checkSession();
            if (isLoggedIn) {
                navigate('/profile');
            }
        };
        verifySession();
    }, []);
    

    return (
    <div className='bg-gradient-to-b from-black to-gray-600 min-h-screen'>
        <Header title="Inicio de sesión" description="Inicia sesión para acceder a ciertas secciones de la pagina"/>
        <div className="container mx-auto p-6 flex-grow bg-white rounded-lg shadow-2xl max-w-md ">
            <form className='grid gap-4' onSubmit={(e) => { 
                e.preventDefault();
                const username = e.target.username.value;
                const password = e.target.password.value;
                loginUser(username, password, navigate);
            }}>
                <label className='text-black text-2xl font-light mb-1' htmlFor="username">Usuario:</label>
                <input className='px-6 py-3 bg-white text-black rounded-full text-lg border-2 border-blue-500 transform transition duration-500 hover:scale-105 shadow-sm mb-4' type="text" id="username" name="username" required />
                <label className='text-black text-2xl font-light mb-1' htmlFor="password">Contraseña:</label>
                <input className='px-6 py-3 bg-white text-black rounded-full text-lg border-2 border-blue-500 transform transition duration-500 hover:scale-105 shadow-sm mb-4' type="password" id="password" name="password" required />
                <button className='px-6 py-3 bg-blue-500 text-white rounded-full text-lg transform transition duration-500 hover:scale-105 shadow-sm hover:bg-blue-700' type="submit">Iniciar sesión</button>
            </form>
            <p className="mt-4">Si no tienes una cuenta puedes registrarte haciendo <Link to='/register' className="text-blue-700 border-white hover:border-2 border-b-blue-700">click aqui</Link></p>
        </div> 
    </div>);
}

export default Login;