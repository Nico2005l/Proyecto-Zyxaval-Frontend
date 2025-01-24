import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faJsSquare, faHtml5, faJava, } from '@fortawesome/free-brands-svg-icons';
import {faDatabase, faCode} from '@fortawesome/free-solid-svg-icons';

function Skills() {
  return (
    <section className="w-full max-w-6xl rounded-lg mx-auto text-center py-12 mb-8 ">
      <h2 className="text-4xl font-light text-white capitalize">Mis Habilidades</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-10'>
        <div className="w-full max-w-6xl rounded-lg overflow-hidden shadow-2xl bg-white p-8 items-center hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Lenguajes</h3>
          <ul className="mt-6 space-y-6">
            <li className="text-xl text-gray-600 flex items-center justify-center hover:text-blue-500 transition-colors duration-300">
              <FontAwesomeIcon icon={faPython} className="mr-4 text-2xl" />
              Python
            </li>
            <li className="text-xl text-gray-600 flex items-center justify-center hover:text-yellow-500 transition-colors duration-300">
              <FontAwesomeIcon icon={faJsSquare} className="mr-4 text-2xl" />
              JavaScript
            </li>
            <li className="text-xl text-gray-600 flex items-center justify-center hover:text-orange-500 transition-colors duration-300">
              <FontAwesomeIcon icon={faHtml5} className="mr-4 text-2xl" />
              HTML & CSS
            </li>
            <li className="text-xl text-gray-600 flex items-center justify-center hover:text-red-500 transition-colors duration-300">
              <FontAwesomeIcon icon={faJava} className="mr-4 text-2xl" />
              Java
            </li>
            <li className="text-xl text-gray-600 flex items-center justify-center hover:text-purple-500 transition-colors duration-300">
              <FontAwesomeIcon icon={faCode} className="mr-4 text-2xl" />
              C#
            </li>
            <li className="text-xl text-gray-600 flex items-center justify-center hover:text-green-500 transition-colors duration-300">
              <FontAwesomeIcon icon={faDatabase} className="mr-4 text-2xl" />
              SQL
            </li>
          </ul>
        </div>

        <div className="w-full max-w-6xl rounded-lg overflow-hidden shadow-2xl bg-white p-8 items-center hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Tecnologias</h3>
          <ul className="mt-6 space-y-6">
            <li className="text-xl text-gray-600 flex items-center justify-center hover:text-blue-500 transition-colors duration-300">
              <FontAwesomeIcon icon={faJsSquare} className="mr-4 text-2xl" />
              React
            </li>
            <li className="text-xl text-gray-600 flex items-center justify-center hover:text-blue-500 transition-colors duration-300">
              <FontAwesomeIcon icon={faJsSquare} className="mr-4 text-2xl" />
              Next.js
            </li>
            <li className="text-xl text-gray-600 flex items-center justify-center hover:text-green-500 transition-colors duration-300">
              <FontAwesomeIcon icon={faDatabase} className="mr-4 text-2xl" />
              Django
            </li>
            <li className="text-xl text-gray-600 flex items-center justify-center hover:text-green-500 transition-colors duration-300">
              <FontAwesomeIcon icon={faDatabase} className="mr-4 text-2xl" />
              DRF (Django Rest Framework)
            </li>
            <li className="text-xl text-gray-600 flex items-center justify-center hover:text-red-500 transition-colors duration-300">
              <FontAwesomeIcon icon={faDatabase} className="mr-4 text-2xl" />
              SQL Server
            </li>
            <li className="text-xl text-gray-600 flex items-center justify-center hover:text-orange-500 transition-colors duration-300">
              <FontAwesomeIcon icon={faDatabase} className="mr-4 text-2xl" />
              MySQL
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;