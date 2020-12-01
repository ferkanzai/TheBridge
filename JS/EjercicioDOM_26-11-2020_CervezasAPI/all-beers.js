const topButton = document.querySelector('#go-top')

window.onscroll = function() {
  scrollFunction()
};

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
let nextPage = 1

const beersSection = document.querySelector('#beers')

const getBeers = async () => {
  url = `https://api.punkapi.com/v2/beers?page=${nextPage}&per_page=80`

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
      <div class='beer-img'>
        <a href='single-beer.html?id=${element.id}'><img src="${element.image}" alt="${element.name} beer"></a>
      </div>
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
      </div>
    `

    beersSection.append(beer)
    paintFoodPairings(element.food_pairing, element.id)
  });
}

const start = async () => {
  beers = await getBeers()
  nextPage = 1
  paintBeers(beers)
}

start()

const loadMoreBeers = document.querySelector('#load-more-beers')
const loadMoreBeersHandler = async (event) => {
  nextPage += nextPage
  beers = await getBeers()
  if (beers.length !== 0) {
    paintBeers(beers)
  } else {
    const main = document.querySelector('#main')
    loadMoreBeers.id = 'load-more-beers-hidden'
    const noMoreBeers = document.createElement('p')
    noMoreBeers.className = 'no-more-beers'
    noMoreBeers.innerText = 'NO MORE BEERS TO LOAD'
    main.append(noMoreBeers)
  }
}
loadMoreBeers.addEventListener('click', loadMoreBeersHandler)