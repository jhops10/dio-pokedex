

function convertPokemonToLi(pokemon) {
  return `
  <li class="pokemon ${pokemon.type}">
    <span class="number">#${pokemon.pokemonNumber}</span>
    <span class="name">${pokemon.name}</span>
    <div class="detail">
      <ol class="types">
        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
      </ol>
      <img src="${pokemon.photo}" alt="${pokemon.name}">
    </div>
  </li>
  `
}

const pokemonsOl = document.getElementById('pokemonsOl');

pokeApi.getPokemons().then((pokemonList = []) => {

  pokemonsOl.innerHTML += pokemonList.map((pokemon) => convertPokemonToLi(pokemon)).join('')

  })



  // sprites.other.dream_world.front_default