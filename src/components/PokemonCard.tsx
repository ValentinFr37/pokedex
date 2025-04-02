interface pokemonInterface {
  pokemon: {
    name: string;
    imgSrc?: string;
  }
}

function PokemonCard({ pokemon }: pokemonInterface) {
  

  
  
    return <figure>
      {pokemon.imgSrc ? (<img src={pokemon.imgSrc} alt={pokemon.name} />) : (<p>???</p>)}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  }
  
  export default PokemonCard;






