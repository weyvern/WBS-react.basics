import React, { useState } from 'react';
import PokemonList from './components/PokemonList';

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const style = { backgroundColor: 'red' };
  return (
    <div>
      <PokemonList pokemons={pokemons} setPokemons={setPokemons} />
      {/*  Return button with JSX*/}
      <button style={style} onClick={() => console.log('Hello')}>
        Hello
      </button>
      {/*  Return button withOUT JSX*/}
      {React.createElement(
        'button',
        { onClick: () => console.log('Hello'), style: { backgroundColor: 'blue' } },
        `Hello`
      )}
    </div>
  );
};

export default App;
