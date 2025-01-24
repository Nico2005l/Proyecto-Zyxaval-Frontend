import { Link } from 'react-router-dom';
import Footer from './Footer';

function Home() {
    return (
    
    <div className="bg-gradient-to-b from-black to-gray-600">
        <section class=" text-white h-screen flex flex-col justify-center items-center text-center">
            <img src={'/media/zyxaval.jpg'} alt="" className="w-60 h-60 rounded shadow-lg mb-16 transition-transform transform hover:translate-y-2 duration-300 ease-in-out"/>
            <h1 className="text-4xl font-light mb-4">Bienvenido a ZYXAVAL</h1>
            <p className="text-lg max-w-2xl mx-auto mb-6">Este es el lugar donde guardo y doy vida a todas las ideas que me inspiran. Cada proyecto que comparto aquí refleja mi pasión por la tecnología y la creatividad. ¡Explora, aprende y acompáñame en este viaje!</p>
            <a href="aboutMe" className="px-6 py-3 bg-blue-500 text-black rounded-full text-lg hover:text-white transition duration-500">Descubre más sobre mí</a>
        </section>
        <section id="about" className="py-16 bg-gray-100">
            <h2 className="text-3xl font-light text-center mb-6">¿Qué es ZYXAVAL?</h2>
            <p className="text-lg max-w-3xl mx-auto text-center mb-8">ZYXAVAL es un espacio personal donde guardo todas mis ideas, proyectos y pensamientos que quiero materializar. Este sitio refleja mi evolución como desarrollador y las diferentes tecnologías y herramientas que voy aprendiendo a lo largo del tiempo.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">El Proyecto</h3>
                <p>ZYXAVAL es una plataforma que utilizo para poner en práctica mis habilidades de desarrollo, desde proyectos simples hasta aplicaciones más complejas. Es un lugar donde la creatividad se encuentra con la tecnología, y donde todo lo que quiero aprender o explorar tiene cabida.</p>
                </div>
                
                <div className="p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">La Visión</h3>
                <p>Mi visión es seguir creciendo como desarrollador, crear soluciones útiles y compartirlas con la comunidad. Este proyecto está en constante evolución, y cada nueva idea es una oportunidad para aprender algo nuevo y mejorar.</p>
                </div>
            </div>
        </section>
        <section className="py-16  text-white">
            <h2 className="text-4xl font-light text-center mb-8">Explora mi Galería  </h2>
            <p className="text-lg text-center max-w-2xl mx-auto mb-8">Aquí encontrarás una muestra de algunas de mis ideas más creativas, desde proyectos experimentales hasta bocetos visuales. Todo lo que se me ocurre, ¡lo guardo aquí!</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/pokemon">
                <div className="relative bg-gray-800 rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300">
                    <img src={'/media/poke.png'} alt="Idea Creativa 1" className="w-fit h-64 object-contain" />
                    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 hover:bg-opacity-0 transition-all duration-300">
                    <p className="text-white text-xl font-bold">1000 Pokemones</p>
                    </div>
                </div>
            </Link>

            <Link to="/FrascosYMoscas">
                <div className="relative bg-gray-800 rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300">
                    <img src={' /media/mosqiña.jpg'} alt="Idea Creativa 1" className="w-fit h-64 object-contain justify-self-center" />
                    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 hover:bg-opacity-0 transition-all duration-300">
                    <p className="text-white text-xl font-bold">Frascos Y Moscas</p>
                    </div>
                </div>
            </Link>

            <div className="relative bg-gray-800 rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300">
                <img src={' /media/roto.jpg'} alt="Idea Creativa 2" className="w-full h-64 object-cover" />
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 hover:bg-opacity-0 transition-all duration-300">
                <p className="text-white text-xl font-bold">Rompe y Juega</p>
                </div>
            </div>

            <div className="relative bg-gray-800 rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300">
                <img src={' /media/siempreEnFalta.jpg'} alt="Idea Creativa 3" className="w-full h-64 object-cover" />
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 hover:bg-opacity-0 transition-all duration-300">
                <p className="text-white text-xl font-bold">Falta de Ideas</p>
                </div>
            </div>
            </div>
        </section>
        <section className="py-16 bg-white">
            <h2 className="text-4xl font-light text-center mb-8 text-gray-800">Mis Desafíos </h2>
            <p className="text-lg text-center max-w-2xl mx-auto mb-8 text-gray-600">Cada desafío es una oportunidad para aprender algo nuevo. Aquí comparto algunos de los proyectos más difíciles y emocionantes que estoy trabajando actualmente.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="relative bg-gray-200 rounded-lg shadow-lg transform hover:scale-105 hover:bg-gray-300 transition-all duration-300">
                <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Desafío 1: React Avanzado</h3>
                    <p className="text-gray-700">Trabajando con React para crear aplicaciones web más interactivas y eficientes, implementando conceptos avanzados.</p>
                </div>
                </div>

                <div className="relative bg-gray-200 rounded-lg shadow-lg transform hover:scale-105 hover:bg-gray-300 transition-all duration-300">
                <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Desafío 2: API RESTful</h3>
                    <p className="text-gray-700">Desarrollando APIs con Django y DRF, aprendiendo sobre autenticación, permisos y optimización de datos.</p>
                </div>
                </div>

                <div className="relative bg-gray-200 rounded-lg shadow-lg transform hover:scale-105 hover:bg-gray-300 transition-all duration-300">
                <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Desafío 3: Base de Datos Completa</h3>
                    <p className="text-gray-700">Implementando una base de datos robusta con MySQL, SQL Server y optimizando consultas para aplicaciones en producción.</p>
                </div>
                </div>
            </div>
        </section>
        <Footer />
    </div> );
}

export default Home;