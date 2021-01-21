import axios from 'axios';

const PokemonList = ({ pokemons, setPokemons }) => {
  const getPokemons = () => {
    axios('https://jsonplaceholder.typicode.com/photos')
      .then(data => setPokemons(data.data))
      .catch(e => console.error(e));
  };
  return (
    <div>
      {pokemons.splice(0, 20).map(pokemon => (
        <li key={pokemon.id}>
          <img src={pokemon.thumbnailUrl} alt={pokemon.title} />
        </li>
      ))}
      <button onClick={getPokemons}>Fetch</button>
    </div>
  );
};

export default PokemonList;
