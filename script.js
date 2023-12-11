
let allFetchedPokemon = [];
let favourites = [];

let currentPokemonToFetch = 20;
let loadedPokemonCount = 20;


async function loadAllPokemonData() {
  loadFav();
  for (let i = 1; i <= 20; i++) {
    let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let response = await fetch(url);
    let responseAsJson = await response.json();
    allFetchedPokemon.push(responseAsJson);
  }
  renderAllPokemon();
  for (let i = 21; i <= 1017; i++) {
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

  for (let i = 0; i < loadedPokemonCount; i++) {
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
  renderBaseStats(ThisPokemon);
  BgColoursDetailCard(ThisPokemon, i);

}

function toggleFavorite(i) {
  let ThisPokemon = allFetchedPokemon[i];
  let isFavorite = false;
  const heart = document.getElementById(`heart${i}`);
  isFavorite = !isFavorite; // Umkehrung des Status
  
  // Wenn das Pokemon bereits favorisiert ist
  if (isFavorite) {
    favourites.push(ThisPokemon); // Hinzufügen zum Favoriten-Array
    heart.src = './img/icons/heartR.png'  // Ändert die Farbe des Herzens auf Rot
  } else {
    favourites = favourites.filter(pokemon => pokemon !== ThisPokemon); // Entfernt das Pokemon aus den Favoriten
    heart.src = './img/icons/heart.png'; // Setzt die Herzfarbe zurück
  }
  localStorage.setItem('fav', 'favourites');
  
  // Hier kannst du mit dem "favourites"-Array weiterarbeiten oder es rendern
  console.log(favourites); // Zeigt das aktuelle "favourites"-Array in der Konsole an (kann für das Rendering verwendet werden)
}

function loadFav(){
  localStorage.getItem('fav');
}

async function loadMorePokemons() {

  if (loadedPokemonCount >= 1017) {
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
  let leerInput = document.getElementById('InputHeader').value
  let renderSearch = document.getElementById('PokeRenderContainer');
  renderSearch.innerHTML = '';
  if(leerInput === ''){
    renderAllPokemon();
  }
  else {
  for (let i = 0; i < allFetchedPokemon.length; i++) {
    const name = allFetchedPokemon[i].name.toLowerCase();
    if (name.includes(search)) {
      let ThisPokemon = allFetchedPokemon[i]
      renderSearch.innerHTML += miniCardHtml(allFetchedPokemon[i], i); renderTypes(ThisPokemon, i);;
    }
  }}
}


function closePokeCard(){
  document.getElementById('PokemonDetail').classList.add('d-none');
}

function renderBaseStats(ThisPokemon){
  let stats = document.getElementById('PokeInfoFeld');
  stats.innerHTML = '';
  stats.innerHTML = baseStatsHTML(ThisPokemon);
}


