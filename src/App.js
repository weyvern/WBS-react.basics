import { useState } from 'react';
import PokemonList from './components/PokemonList';

const App = () => {
  const [pokemons, setPokemons] = useState([
    { id: 1, name: 'Bulbasaur' },
    { id: 4, name: 'Charmander' },
    { id: 7, name: 'Squirtle' }
  ]);
  return <PokemonList pokemons={pokemons} setPokemons={setPokemons} date={Date.now()} />;
};

export default App;
