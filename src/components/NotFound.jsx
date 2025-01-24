import { Link } from "react-router-dom";
import Header from "./Header";

function NotFound() {
    return ( 
    <div className='bg-gradient-to-b from-black to-gray-800 min-h-screen'>
        <div className="items-center flex flex-col">
            <Header title="Not Found" description="Lo sentimos, la página que estás buscando no existe."/>
            <Link to='/' className="px-6 py-3 bg-blue-500 text-white rounded-full text-lg transform transition duration-500 hover:scale-105 shadow-sm hover:bg-blue-700">Ir al Inicio</Link>
        </div>
    </div> );
}

export default NotFound;