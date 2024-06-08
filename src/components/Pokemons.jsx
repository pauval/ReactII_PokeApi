import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then(response => response.json())
      .then(data => setPokemons(data.results));
  }, []);

  const handleChange = (event) => {
    navigate(`/pokemon/${event.target.value}`);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Selecciona un pokemon</h1>
      <select onChange={handleChange}>
        <option value="">Pokemons</option>
        {pokemons.map(pokemon => (
          <option key={pokemon.name} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Pokemons;
