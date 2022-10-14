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
    document.querySelector("#sectionAlbum").innerHTML += `<div class="card" style="width: 18rem;">
        <img src= "${albumTot[index].album.cover_medium}" class="card-img-top" alt="img">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>`;
  }
}

// `<div class="cover-title"> <img class="cover-album" src = "${albumTot[index].album.cover_medium}">
//     <audio controls>
//     <source src="${albumTot[index].preview}" type="audio/ogg"> </div>
// </audio> `;

// // SEARCH
// const searchAlbum = (query) => {
//     let albumSelected = albumTot.filter((book)) => {
//     return book.title-toLower
//     }
// }

{
  /* <audio controls style="width: 100px;">
    <source src="${m.preview}" type="audio/ogg">
</audio> */
}

chargeApi();
