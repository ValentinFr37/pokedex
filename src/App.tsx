import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PokemonCard from './components/PokemonCard'

import "./App.css";
import PokemonButton from './components/PokemonButton';

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
  {
    name: "Jigglypuff",
    imgSrc:"https://www.pokepedia.fr/images/thumb/c/cd/Rondoudou-RFVF.png/375px-Rondoudou-RFVF.png"
    
  }
];

function App() {
  const [pokemonSelect, setPokemonSelect] = useState(pokemonList[0])


  return (
    <div>
      <PokemonCard pokemon={pokemonSelect} />

      {pokemonList.map((pokemon) => (
      <PokemonButton
          name={pokemon.name}
          onClick={() => setPokemonSelect(pokemon)}
        />
      ))}
    </div>
  );
}

export default App;
