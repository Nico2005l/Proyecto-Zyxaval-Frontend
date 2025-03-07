import { Link } from 'react-router-dom';
import Footer from './Footer';


const ChallengeCard = ({ title, description }) => {
    return (
        <div className="relative bg-gray-200 rounded-lg shadow-lg transform hover:scale-105 hover:bg-gray-300 transition-all duration-300">
            <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
                <p className="text-gray-700">{description}</p>
            </div>
        </div>
    );
}

const ImageCard = ({ href, imageSrc, imageAlt, overlayText }) => {
    return (
        <Link
        to={href}
        className="relative bg-gray-800 rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300"
        >
        <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-64 object-contain brightness-50 hover:brightness-100 transition-all duration-300"
        />
        <p className="text-white text-xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">{overlayText}</p>
        </Link>
    );
};

function Home() {
    return (
        <div className="bg-gradient-to-b from-black to-gray-600">
            <section className="text-white h-screen flex flex-col justify-center items-center text-center">
                <img src={'/media/zyxaval.jpg'} alt="" className="w-60 h-60 rounded shadow-lg mb-16 transition-transform transform hover:translate-y-2 duration-300 ease-in-out"/>
                <h1 className="text-4xl font-light mb-4">Bienvenido a ZYXAVAL</h1>
                <p className="text-lg max-w-2xl mx-auto mb-6">Este es el lugar donde guardo y doy vida a todas las ideas que me inspiran. Cada proyecto que comparto aquí refleja mi pasión por la tecnología y la creatividad. ¡Explora, aprende y acompáñame en este viaje!</p>
                <a href="aboutMe" className="px-6 py-3 bg-blue-500 text-black rounded-full text-lg hover:text-white transition duration-500">Descubre más sobre mí</a>
            </section>
            <section id="about" className="py-16 bg-gray-100">
                <h2 className="text-3xl font-light text-center mb-6">¿Qué es ZYXAVAL?</h2>
                <p className="text-lg max-w-3xl mx-auto text-center mb-8">ZYXAVAL es un espacio personal donde guardo todas mis ideas, proyectos y pensamientos que quiero materializar. Este sitio refleja mi evolución como desarrollador y las diferentes tecnologías y herramientas que voy aprendiendo a lo largo del tiempo.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ChallengeCard title="El Proyecto" description="ZYXAVAL es una plataforma que utilizo para poner en práctica mis habilidades de desarrollo, desde proyectos simples hasta aplicaciones más complejas. Es un lugar donde la creatividad se encuentra con la tecnología, y donde todo lo que quiero aprender o explorar tiene cabida." />
                    <ChallengeCard title="La Visión" description="Mi visión es seguir creciendo como desarrollador, crear soluciones útiles y compartirlas con la comunidad. Este proyecto está en constante evolución, y cada nueva idea es una oportunidad para aprender algo nuevo y mejorar." />
                </div>
            </section>
            <section className="py-16 text-white">
                <h2 className="text-4xl font-light text-center mb-8">Explora mi Galería</h2>
                <p className="text-lg text-center max-w-2xl mx-auto mb-8">Aquí encontrarás una muestra de algunas de mis ideas más creativas, desde proyectos experimentales hasta bocetos visuales. Todo lo que se me ocurre, ¡lo guardo aquí!</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    <ImageCard
                        href="/pokemon"
                        imageSrc={'/media/poke.png'}
                        imageAlt="Idea Creativa 1"
                        overlayText="1000 Pokemones"
                    />

                    <ImageCard

                        href="/FrascosYMoscas"
                        imageSrc={'/media/mosqiña.jpg'}
                        imageAlt="Idea Creativa 4"
                        overlayText="Frascos Y Moscas"
                    />

                    <ImageCard
                        href="/"
                        imageSrc={'/media/roto.jpg'}
                        imageAlt="Idea Creativa 2"
                        overlayText="Rompe y Juega"
                    />

                    <ImageCard
                        href="/"
                        imageSrc={'/media/siempreEnFalta.jpg'}
                        imageAlt="Idea Creativa 3"
                        overlayText="Falta de Ideas"
                    />
                </div>
            </section>
                    
            <section className="py-16 bg-white">
                <h2 className="text-4xl font-light text-center mb-8 text-gray-800">Mis Desafíos</h2>
                <p className="text-lg text-center max-w-2xl mx-auto mb-8 text-gray-600">Cada desafío es una oportunidad para aprender algo nuevo. Aquí comparto algunos de los proyectos más difíciles y emocionantes que estoy trabajando actualmente.</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ChallengeCard title="Desafío 1: React Avanzado" description="Trabajando con React para crear aplicaciones web más interactivas y eficientes, implementando conceptos avanzados." />
                    <ChallengeCard title="Desafío 2: API RESTful" description="Desarrollando APIs con Django y DRF, aprendiendo sobre autenticación, permisos y optimización de datos." />
                    <ChallengeCard title="Desafío 3: Base de Datos Completa" description="Implementando una base de datos robusta con MySQL, SQL Server y optimizando consultas para aplicaciones en producción." />
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Home;