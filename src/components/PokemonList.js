const PokemonList = ({ date, pokemons, setPokemons }) => {
  const addPokemon = () => {
    setPokemons([...pokemons, { id: 150, name: 'Mewtwo' }]);
  };
  return (
    <div>
      {pokemons.map(pokemon => (
        <li key={pokemon.id}>{pokemon.name}</li>
      ))}
      <button onClick={addPokemon}>Add Pokemon</button>
    </div>
  );
};

export default PokemonList;
