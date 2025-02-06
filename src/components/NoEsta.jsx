import Header from './Header';

function NoEsta() {
    return ( 
        <div className='bg-gradient-to-b from-black to-gray-600 min-h-screen'>
            <Header title="No Esta" description="Si no encontarste lo que buscabas prueba aqui abajo. Seguro encuentras algo."/>
            <div className='container mx-auto p-6 flex-grow bg-white rounded-lg shadow-2xl max-w-md '>
                <form action=" ">

                    <input className='px-6 py-3 bg-white text-black rounded-full text-lg border-2  border-blue-500 transform transition duration-500 hover:scale-105 shadow-sm mb-4 w-full' placeholder='Buscar Seccion' type="text" />

                    <button className='w-full px-6 py-3 bg-blue-500 text-white rounded-full text-lg transform transition duration-500 hover:scale-105 shadow-sm hover:bg-blue-700' type="submit">Buscar</button>

                </form>
            </div>
        </div>

     );
}

export default NoEsta;