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

  // const searchAlbum = (query) => {
  //   return Object.keys(albumTot).filter((item) => {
  //     return item.album.title.includes(query);
  //   });
  // };

  function searchAlbum() {
    let input = document.querySelector("#searchbar").value;
    let filter = input.toUpperCase();
    let cards = document.querySelectorAll("#sectionAlbum");
    for (i = 0; i < cards.length; i++) {
      txtValue = [i].textContent || cards[i].innerHTML;
      if (txtValue.toUpperCase().index0f(filter) > -1) {
        cards[i].style.display = "";
      } else {
        cards[i].style.display = "none";
      }
    }
  }
  console.log(searchAlbum());
}
chargeApi();
