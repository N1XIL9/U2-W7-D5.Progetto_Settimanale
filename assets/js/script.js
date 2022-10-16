//PER PRENDERE UN API E TRASFORMARALA IN UN OGGETTO DA POTER UTILIZZARE IN JS
// SI USA LA FUNZIONE async.
// Ho dato un nome alla funzione 'chargeApi' che posizione alla fine di tutto il codice js  e creato una variabile che contiene l'url dell'api utilizzando 'await fetch'

async function chargeApi() {
  let linkArtist = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=Nicola%20Lerra`);
  let responseText = await linkArtist.json();
  let musicArray = responseText.data;

  // PER SELEZIONARE I TITOLI DEGLI ALBUM CHE MI PIACCIONO  CREO DELLE VARIABILI
  // E LE CONCATENO '.concat' IN UN VARIABILE 'albumTot' richiamando la prima variabile 'albumOne'

  const albumOne = musicArray.slice(0, 4);
  const albumTwo = musicArray.slice(6, 9);
  const albumThree = musicArray[14];
  const albumFour = musicArray.slice(16, 18);

  let albumTot = albumOne.concat(albumTwo, albumThree, albumFour);
  for (let index = 0; index < albumTot.length; index++) {
    document.querySelector("#sectionAlbum").innerHTML += `<div class="card" style="width: 15rem;">
    <div class="card-body">
    <img class="imgCover" src= "${albumTot[index].album.cover_medium}" class="card-img-top" alt="img">
          <h5 class="card-title">${albumTot[index].artist.name}</h5>
          <p class="card-text">${albumTot[index].album.title}</p>
            <audio controls>
                <source src=${albumTot[index].preview} type="audio/ogg"> </div> 
            </audio>
        </div>
      </div>`;
  }

  // CREO LA FUNZIONE SearchBar
  const searchBar = document.getElementById("searchBar");
  searchBar.addEventListener("keyup", (e) => {
    document.querySelector("#sectionAlbum").innerHTML = "";
    const searchString = e.target.value;
    albumTot.filter((song) => {
      filter = song.title.toLowerCase().includes(searchString.toLowerCase());
      if (filter) {
        document.querySelector("#sectionAlbum").innerHTML += `<div class="card" style="width: 15rem;">
                                                                <div class="card-body">
                                                                <img class="imgCover" src= "${song.album.cover_medium}" class="card-img-top" alt="img">
                                                                      <h5 class="card-title">${song.artist.name}</h5>
                                                                      <p class="card-text">${song.album.title}</p>
                                                                        <audio controls>
                                                                            <source src=${song.preview} type="audio/ogg"> </div> 
                                                                        </audio>
                                                                    </div>
                                                                  </div>`;
      }
    });
  });
}
chargeApi();
