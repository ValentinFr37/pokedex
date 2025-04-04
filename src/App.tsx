import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PokemonCard from './components/PokemonCard'

import "./App.css";
import PokemonButton from './components/PokemonButton';
{/** Tableaux des pokemon **/}
const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  }
];
{/**  **/}
function App() {

  {/*State qui sert à changer de facon dynamique le pokemon selectionné*/}
  const [pokemonSelect, setPokemonSelect] = useState(pokemonList[0])


  return (
    <div>
      {/**  **/}
      <PokemonCard pokemon={pokemonSelect} />

      {pokemonList.map((pokemon) => (
      <PokemonButton
          key={pokemon.name}
          name={pokemon.name}
          onClick={() => setPokemonSelect(pokemon)}
        />
      ))}
    </div>
  );
}
    
export default App;
