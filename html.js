function generateHTMLCard(ThisPokemon, i) {
  /*html*/
  return `
    <div id="PokeCardContainer${i}" class="PokeCardContainer">
        <div class="pokeCard" id="pokeCard${i}">
          <div class="headerPokeCard">
            <img class="close-Poke" onclick="closePokeCard()" src="img/icons/zuruck-gezeichneter-pfeil.png" alt="pfeil" />
          </div>
          <h1 class="pokemonName">${ThisPokemon.name}</h1>
          <img id="PokemonImg" src="${ThisPokemon.sprites.other.home.front_default}" />
        </div>
        <div class="InfoContainer">
          <div class="Infonavbar">
            
            <div class="pokeInfoContainer">Base Stats</div>
           
          </div>
          <div id="PokeInfoFeld" onload="renderBaseStats()">
           

            
          </div>
        </div>
      </div>
    `
}

function miniCardHtml(ThisPokemon, i) {
  /*HTML*/
  return `
  <div class="miniCard" id="miniCard${i}" onclick="showDetailCard(${i})">
  <h1 class="capitalize">${ThisPokemon.name}</h1>
  <div id="PrimaryTypeContainer${i}"> </div>
  <img src="${ThisPokemon.sprites.other.home.front_default}" alt="" srcset="" />
  <div id="miniCardId${i}">#${ThisPokemon.id}</div>
  </div>
  `
}

function baseStatsHTML(ThisPokemon) {
  /*html*/
  return `
  <table class="table table">
  <tbody>
    <tr>
      <td class="width-10 capitalize">${ThisPokemon.stats[0].stat.name}</td>
      <td class="width-10 capitalize">${ThisPokemon.stats[0].base_stat}</td>
      <td>
        <div
          class="progress"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow="${ThisPokemon.stats[0].base_stat}"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar" style="width: ${ThisPokemon.stats[0].base_stat}%"></div>
        </div>
      </td>
    </tr>
    <tr>
      <td class="width-10 capitalize">${ThisPokemon.stats[1].stat.name}</td>
      <td class="width-10 capitalize">${ThisPokemon.stats[1].base_stat}</td>
      <td>
        <div
          class="progress"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar" style="width: ${ThisPokemon.stats[1].base_stat}%"></div>
        </div>
      </td>
    </tr>
    <tr>
      <td class="width-10 capitalize">${ThisPokemon.stats[2].stat.name}</td>
      <td class="width-10">${ThisPokemon.stats[2].base_stat}</td>
      <td>
        <div
          class="progress"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar" style="width: ${ThisPokemon.stats[2].base_stat}%"></div>
        </div>
      </td>
    </tr>
    <tr>
      <td class="width-10 capitalize">${ThisPokemon.stats[3].stat.name}</td>
      <td class="width-10">${ThisPokemon.stats[3].base_stat}</td>
      <td>
        <div
          class="progress"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar" style="width: ${ThisPokemon.stats[3].base_stat}%"></div>
        </div>
      </td>
    </tr>
    <tr>
      <td class="width-10 capitalize">${ThisPokemon.stats[4].stat.name}</td>
      <td class="width-10">${ThisPokemon.stats[4].base_stat}</td>
      <td>
        <div
          class="progress"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar" style="width: ${ThisPokemon.stats[4].base_stat}%"></div>
        </div>
      </td>
    </tr>
    <tr>
      <td class="width-10">${ThisPokemon.stats[5].stat.name}</td>
      <td class="width-10">${ThisPokemon.stats[5].base_stat}</td>
      <td>
        <div
          class="progress"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div class="progress-bar" style="width: ${ThisPokemon.stats[5].base_stat}%"></div>
        </div>
      </td>
    </tr>
  </tbody>
</table>
  `
}