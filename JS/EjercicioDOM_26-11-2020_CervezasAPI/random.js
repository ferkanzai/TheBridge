const topButton = document.querySelector('#go-top')

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

topButton.addEventListener('click', topFunction)

let beers = {}

const places = [
  'madrid',
  'barcelona',
  'dublin',
  'medellin',
  'rome',
  'prague',
  'brussels',
  'amsterdam',
  'oviedo',
  'moscow',
  'dubrovnik'
]

const accessToken = 'pk.eyJ1IjoiZmVya2FuemFpIiwiYSI6ImNraTFvZGE1azBiY24yd3Fuc3RoYjZ1N3QifQ.825dTY3GMtTjgI5M90Ujrw'

const getRandomPlace = async () => {
  const place = places[Math.floor(Math.random(places.length) * places.length)]
  
  placesUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?types=place&access_token=${accessToken}`

  const res = await fetch(placesUrl)
  const data = await res.json()
  // console.log(typeof data.features[0])
  const location = {
    name: data.features[0].text,
    long: data.features[0].geometry.coordinates[0],
    lat: data.features[0].geometry.coordinates[1]
  }

  return location
}

const beersSection = document.querySelector('#beers')

const getBeers = async () => {
  url = `https://api.punkapi.com/v2/beers/random`

  const res = await fetch(url)
  const data = await res.json()

  // console.log(data)
  // console.log(typeof data)

  const formattedBeers = data.map((el) => ({
    id: el.id,
    name: el.name,
    tagline: el.tagline,
    brewed_since: el.first_brewed,
    description: el.description,
    image: el.image_url ? el.image_url : 'assets/no-beer.png',
    abv: el.abv,
    ibu: el.ibu,
    food_pairing: el.food_pairing,
    brewers_tips: el.brewers_tips
  }))

  return formattedBeers
}

const paintFoodPairings = (food_pairing, beerId) => {
  const foodPairing = document.querySelector(`#food-pairing-${beerId}`)
  const foods = document.createElement(`div`)
  foods.classList.add('foods')
  foods.classList.add('columns')

  food_pairing.forEach((food) => {
    const p = document.createElement('p')
    p.innerText = food
    foods.append(p)
  })

  foodPairing.append(foods)
}

const paintBeers = (beersData) => {

  beersData.forEach(element => {
    const beer = document.createElement('div')
    beer.className = 'beer'

    beer.innerHTML = `
      <img src="${element.image}" alt="${element.name} beer">
        <div class='beer-title'>
          <h2>${element.name}</h2>
          <h3>${element.tagline}</h3>
        </div>
        <div class='beer-info'>
          <p class='description'>${element.description}</p>
          <div class='beer-stats columns'>
            <p>Brewed since: ${element.brewed_since}</p>
            <p>ABV: ${element.abv}%</p>
            <p>IBU: ${element.ibu}</p>
          </div>
          <div id='food-pairing-${element.id}'>
            <p>Food pairing</p>
            </div>
          </div>
        </div>`

    beersSection.append(beer)
    paintFoodPairings(element.food_pairing, element.id)
    document.title = `${element.name} page`
  });
}

const start = async () => {
  beers = await getBeers()
  paintBeers(beers)

  const location = await getRandomPlace()

  const myMap = L.map('mapid').setView([location.lat, location.long], 12);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken
  }).addTo(myMap);

  const beerIcon = L.icon({
    iconUrl: 'assets/beer-icon.png',
    iconSize: [50, 50],
    popupAnchor: [0, -20]
  });

  L.marker([location.lat, location.long], {icon: beerIcon}).addTo(myMap).bindPopup(`Beer brewed since: ${beers[0].brewed_since}`);

}

start()
