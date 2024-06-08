import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PokemonDetail.css';

const PokemonDetail = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => response.json())
      .then(data => setPokemon(data));
  }, [name]);

  if (!pokemon) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="pokemon-detail-container">
      <div className="pokemon-detail">
        <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} className="pokemon-image" />
        <div className="pokemon-info">
          <h1>{pokemon.name}</h1>
          <ul>
            {pokemon.stats.map(stat => (
              <li key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</li>
            ))}
          </ul>
          <p className="pokemon-types">{pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;

