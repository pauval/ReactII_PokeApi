import React from 'react';
import { Routes, Route, NavLink, Link, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Pokemons from './components/Pokemons';
import PokemonDetail from './components/PokemonDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './App.css';

const App = () => {
  const location = useLocation();

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="map-icon" />
          </Link>
        </div>
        <div className="navbar-right">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
          <NavLink
            to="/pokemons"
            className={location.pathname.includes('/pokemon') ? 'active' : ''}
          >
            Pokemons
          </NavLink>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
      </Routes>
    </div>
  );
};

export default App;

