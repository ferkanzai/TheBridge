let houseToFilter = "";
let isWhiteWalkers = false;

const characters = [
  {
    name: "Jon Snow",
    house: "Stark",
    age: 24,
    picture:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Jon_Snow_Season_8.png/220px-Jon_Snow_Season_8.png",
    banner:
      "https://static.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG"
  },
  {
    name: "Eddard Stark",
    house: "Stark",
    age: 41,
    picture:
      "https://vignette.wikia.nocookie.net/gameofthronesfanon/images/1/13/Eddard_Stark_HBO.jpg/revision/latest?cb=20181021172732&path-prefix=es",
    banner:
      "https://static.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG"
  },
  {
    name: "Arya Stark",
    house: "Stark",
    age: 11,
    picture:
      "https://vignette.wikia.nocookie.net/gameofthronesfanon/images/a/a9/AryaShipIronThrone.PNG.png/revision/latest?cb=20190909001444&path-prefix=es",
    banner:
      "https://static.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG"
  },
  {
    name: "Ramsay Bolton",
    house: "Bolton",
    age: 20,
    picture:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Ramsay_Bolton-_-Iwan_Rheon.jpg/220px-Ramsay_Bolton-_-Iwan_Rheon.jpg",
    banner:
      "https://static.wikia.nocookie.net/gameofthrones/images/d/dd/House-Bolton-Main-Shield.PNG"
  },
  {
    name: "Theon Greyjoy",
    house: "Greyjoy",
    age: 19,
    picture:
      "https://upload.wikimedia.org/wikipedia/en/5/51/Theon_Greyjoy-Alfie_Allen.jpg",
    banner:
      "https://awoiaf.westeros.org/images/thumb/5/5b/House_Greyjoy.svg/1200px-House_Greyjoy.svg.png"
  },
  {
    name: "Davos Seaworth",
    house: "Seaworth",
    age: 37,
    picture:
      "https://vignette.wikia.nocookie.net/gameofthronesfanon/images/0/00/DAVOSINFOBOXBELLS.PNG.png/revision/latest/top-crop/width/360/height/450?cb=20200518042045&path-prefix=es",
    banner:
      "https://awoiaf.westeros.org/images/thumb/6/61/House_Seaworth.svg/1200px-House_Seaworth.svg.png"
  },
  {
    name: "Cersei Lannister",
    house: "Lannister",
    age: 30,
    picture:
      "https://vignette.wikia.nocookie.net/juego-detronos-fanon/images/0/06/D83429bddc3666e1584276658ac7d215.png/revision/latest?cb=20190713200100&path-prefix=es",
    banner:
      "https://static.wikia.nocookie.net/iceandfire/images/8/88/House_Lannister.png"
  },
  {
    name: "Tyrion Lannister",
    house: "Lannister",
    age: 24,
    picture:
      "https://vignette.wikia.nocookie.net/juego-detronos-fanon/images/4/46/42tgru65.jpg/revision/latest?cb=20190715005327&path-prefix=es",
    banner:
      "https://static.wikia.nocookie.net/iceandfire/images/8/88/House_Lannister.png"
  },
  {
    name: "Jaime Lannister",
    house: "Lannister",
    age: 31,
    picture:
      "https://vignette.wikia.nocookie.net/gameofthronesfanon/images/1/1e/Jaime_Lannister.jpg/revision/latest?cb=20181025045714&path-prefix=es",
    banner:
      "https://static.wikia.nocookie.net/iceandfire/images/8/88/House_Lannister.png"
  }
];

function paintCharacters(chars) {
  const container = document.querySelector("#container");
  container.innerHTML = "";

  chars.forEach((character) => {
    const charCard = document.createElement("div");
    charCard.className = "card";

    charCard.innerHTML = `
      <h2>${character.name}</h2>
      <p class='house-name'>${character.house}</p>
    <img src="${character.banner}" alt="${character.house} house banner" class='house-banner'>
    <p>Age: <span class='age'>${character.age}</span></p>
    <div class='char-image'><img src='${character.picture}' alt="${character.name}" class='character-picture'></div>
  </p>
      `;

    container.append(charCard);
  });
}

const selectHouseToFilter = document.querySelector("#house-filter");

function handleSelectHouseToFilter(event) {
  houseToFilter = event.target.value;
  //console.log(houseToFilter)
  const filteredCharacters = characters.filter((character) => {
    return character.house === houseToFilter;
  });
  //console.log(filteredCharacters)

  if (houseToFilter === "reset") {
    paintCharacters(characters);
  } else {
    paintCharacters(filteredCharacters);
  }
}
selectHouseToFilter.addEventListener("change", handleSelectHouseToFilter);

function handleConversionButton() {
  isWhiteWalkers = true;
  const whiteWalkers = characters.map((character) => {
    return {
      ...character,
      picture: "https://s2.r29static.com/bin/entry/8ce/x/1837616/image.png"
    };
  });
  paintCharacters(whiteWalkers);
}
const conversionButton = document.querySelector("#conversion-button");
conversionButton.addEventListener("click", handleConversionButton);

function handleRevertButton() {
  //console.log(characters[0]);
  isWhiteWalkers = false;
  paintCharacters(characters);
}
const revertButton = document.querySelector("#revert-button");
revertButton.addEventListener("click", handleRevertButton);

paintCharacters(characters);
