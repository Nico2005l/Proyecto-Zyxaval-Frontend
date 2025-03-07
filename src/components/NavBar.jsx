import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { checkSession } from '../utils/checkSession';





function NavBar(props) {


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation(); // Obtiene la ruta actual
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const verifySession = async () => {
      const isLoggedIn = await checkSession();
      setIsLoggedIn(isLoggedIn);
    };

    verifySession();
  }, [location]);

    

  return (
    <nav className="bg-black p-4 shadow-md sticky top-0 z-50">
      <div className="mx-auto flex justify-between items-center flex-wrap">
        <div className="flex justify-between w-full lg:w-auto">
          <img src={' /media/zyxaval.jpg'} alt="" className='w-20 rounded transition-transform transform hover:scale-110 duration-300 ease-in-out' />
          <button className="text-white lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <ul className={`flex-col space-x-6 transition-all duration-300 ease-in-out pt-4 justify-start lg:pt-0 lg:flex-row lg:flex  ${menuOpen ? 'flex' : 'hidden'} `}>
          {props.sites.map((site, index) => (
            <li key={index} className="py-2 ml-5"> 
              <Link
                to={site.url === '/login' && isLoggedIn ? '/profile' : site.url}
                className={`text-white hover:text-blue-400 flex flex-row gap-2 ${location.pathname === site.url || (location.pathname === '/profile' && site.url === '/login') ? 'font-bold' : ''}`}
              >
                <img src={site.icon} alt="" className='size-6 ' />
                {site.name === 'Login' && isLoggedIn ? 'Perfil' : site.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;