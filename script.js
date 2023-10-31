
let allFetchedPokemon = [];

let currentPokemonToFetch = 20;
let loadedPokemonCount = 20;


async function loadSpecificPokemondata() {
  for (let i = 1; i < currentPokemonToFetch; i++) {


    let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let response = await fetch(url);
    let responseAsJson = await response.json();
    allFetchedPokemon.push(responseAsJson);

  }
  renderAllPokemon();
}

function renderAllPokemon() {
  let renderAll = document.getElementById('PokeRenderContainer');
  renderAll.innerHTML = '';

  for (let i = 0; i < allFetchedPokemon.length; i++) {
    const ThisPokemon = allFetchedPokemon[i];
    renderAll.innerHTML += miniCardHtml(ThisPokemon, i);
    renderTypes(ThisPokemon, i);

  }

}

function showDetailCard(i) {
  let detail = document.getElementById('PokemonDetail');
  detail.classList.remove('d-none');
  detail.innerHTML = '';
  let ThisPokemon = allFetchedPokemon;
  ThisPokemon = ThisPokemon[i];
  detail.innerHTML += generateHTMLCard(ThisPokemon, i);
  BgColoursDetailCard(ThisPokemon, i);

}

async function loadMorePokemons() {

  if (loadedPokemonCount >= 1292) {
    alert("Du hast bereits alle verfügbaren Pokemon geladen!");
    return;
  }

  // Aktualisiere das Laden-Ziel (um 20 erhöhen)
  loadedPokemonCount += 20;

  // Rufe die zusätzlichen Pokemon ab und füge sie zur Liste hinzu
  for (let i = loadedPokemonCount - 20; i < loadedPokemonCount; i++) {
    let url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;
    let response = await fetch(url);
    let responseAsJson = await response.json();
    allFetchedPokemon.push(responseAsJson);
  }

  // Aktualisiere die Anzeige der Pokemon
  renderAllPokemon();
}

function renderTypes(ThisPokemon, i) {
  let PrimaryTypeContainer = document.getElementById(`PrimaryTypeContainer${i}`);
  PrimaryTypeContainer.innerHTML = '';
  for (let j = 0; j < ThisPokemon.types.length; j++) {
    const type = ThisPokemon.types[j];
    PrimaryTypeContainer.innerHTML += `
    <span class="badge rounded-pill text-bg-primary">${type.type.name}</span>
    `;
    changeColourPrimary(ThisPokemon, i, j)
  }
}

function changeColourPrimary(ThisPokemon, i) {

  let primary = ThisPokemon.types[0].type.name;
  document.getElementById(`miniCard${i}`).classList.add(primary);

}

function BgColoursDetailCard(ThisPokemon, i) {
  let colour = ThisPokemon.types[0].type.name;
  document.getElementById(`pokeCard${i}`).classList.add(colour);
}

function searchName() {
  let search = document.getElementById('InputHeader').value.toLowerCase();
  let renderSearch = document.getElementById('PokeRenderContainer');
  renderSearch.innerHTML = '';

  for (let i = 0; i < allFetchedPokemon.length; i++) {
    const name = allFetchedPokemon[i].name.toLowerCase();
    if (name.includes(search)) {
      renderSearch.innerHTML += miniCardHtml(allFetchedPokemon[i], i);
    }
  }
}

