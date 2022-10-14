async function chargeApi() {
  let linkArtist = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=Nicola%20Lerra`);
  let responseText = await linkArtist.json();
  let musicArray = responseText.data;
  console.log(musicArray);

  const albumOne = musicArray.slice(0, 4);
  const albumTwo = musicArray.slice(6, 9);
  const albumThree = musicArray[14];
  const albumFour = musicArray.slice(16, 18);

  let albumTot = albumOne.concat(albumTwo, albumThree, albumFour);
  console.log(albumTot);

  for (let index = 0; index < albumTot.length; index++) {
    document.querySelector("#sectionAlbum").innerHTML += `<div class="card" style="width: 15rem;">
        <img class="imgCover" src= "${albumTot[index].album.cover_medium}" class="card-img-top" alt="img">
        <div class="card-body">
          <h5 class="card-title">${albumTot[index].artist.name}</h5>
          <p class="card-text">${albumTot[index].album.title}</p>
            <audio controls>
                <source src="${albumTot[index].preview}" type="audio/ogg"> </div> 
            </audio>
        </div>
      </div>`;
  }

  const searchAlbum = (query) => {
    return Object.keys(albumTot).filter((item) => {
      return item.album.title.includes(query);
    });
  };
}

chargeApi();
