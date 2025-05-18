
import './App.css';
import AboutMe from './components/AboutMe';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Pokemon151 from './components/Pokemon151';
import PokemonInfo from './components/PokemonInfo';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Registro from './components/Registro';
import Login from './components/Login';
import Profile from './components/Profile';
import FrascosYMoscas from './components/FrascosYMoscas';
import NotFound from './components/NotFound';
import MenuFrasco from './components/MenuFrasco';
import Sombras from './components/Sombras';
import NoEsta from './components/NoEsta';
import MuroWidgets from './components/MuroWidgets';
import InteligenseTests from './components/InteligenseTests';

function App() {


  return (
  <Router>
    <ScrollToTop />
    <NavBar 
      sites={[
        {"url":'/', "name":'Home', "icon": ' /media/home.png'},
        {"url":'/login', "name":'Login', "icon": ' /media/user.png'},
        {"url":'/aboutMe', "name":'About Me', "icon": ' /media/me.png'},
        {"url":'/pokemon', "name":'Pokemons', "icon": ' /media/pokeball.png'},
        {"url":'/FrascosYMoscas', "name":'Frascos Y Moscas', "icon": ' /media/mosca.png'},
        {"url":'/Widgets', "name":'Widgets', "icon": ' /media/widgets.jpg'

        }
      ]}/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Registro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/aboutMe" element={<AboutMe />} />
      <Route path="/pokemon" element={<Pokemon151 />} />
      <Route path="/pokemon/:name" element={<PokemonInfo />} />
      <Route path="/FrascosYMoscas" element={<FrascosYMoscas />} />
      <Route path="/Frasco/:id" element={<MenuFrasco />} />
      <Route path="/NoEsta" element={<NoEsta />} />
      <Route path="/Widgets" element={<MuroWidgets />} />
      <Route path="/ia" element={ <InteligenseTests/>} />
      
      <Route path="*" element={<NotFound/>} />
    </Routes>
  </Router>
  );
}

const ScrollToTop = () => {
  const location = useLocation(); // Obtiene la ubicación actual de la ruta

  useEffect(() => {
    // Desplaza la página hacia arriba cada vez que cambie la ruta
    window.scrollTo(0, 0);
  }, [location]); // Ejecuta este efecto cada vez que cambia la ruta

  return null;
};



export default App;
