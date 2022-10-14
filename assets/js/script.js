async function chargeApi() {
  let linkArtist = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=Nicola%20Lerra`);
  let responseText = await linkArtist.json();
  let musicArray = responseText.data;
  console.log(musicArray);

  const albumOne = musicArray.slice(0, 4);
  const albumTwo = musicArray.slice(6, 8);
  const albumThree = musicArray[14];
  const albumFour = musicArray.slice(16, 18);

  let albumTot = albumOne.concat(albumTwo, albumThree, albumFour);
  console.log(albumTot);

  for (let index = 0; index < albumTot.length; index++) {}
}

// document.body.innerHTML += `<img src = "${albumTot[index].album.cover_medium}" >`;
