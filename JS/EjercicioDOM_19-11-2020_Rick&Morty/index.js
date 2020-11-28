let nextPage = ''

let characters = {}

const paintCharacter = (element, chars) => {

  chars.forEach((char) => {
    const card = document.createElement('div')
    card.className = 'card'

    card.innerHTML = `
    <div class='two-columns'>
      <p class='name ellipsis'>${char.name}</p>
      <p id='status-${char.id}' class='status'>${char.status}</p>
    </div>
    <img src="${char.image}" alt="${char.name}">
    <div class='two-columns'>
      <div class='species'>
        <p class='species-type'>${char.species}</p>
      </div>
      <div class='gender'>
        <p class='gender-type'>${char.gender}</p>
      </div>
    </div>
      <div class='location'>
        <p class='location-place'>${char.location.name}</p>
      </div>
    </div>
    <a href='character.html?id=${char.id}'>VER MÁS</a>
    `

    element.append(card)

    const status = document.querySelector(`#status-${char.id}`)

    if (char.status === 'Alive') {
      status.classList.add('alive')
    }
    if (char.status === 'Dead') {
      status.classList.add('dead')
    }
  });
}
const characterUrl = 'https://rickandmortyapi.com/api/character';

const getCharacters = async (url) => {

  const res = await fetch(url)
  const data = await res.json()

  nextPage = data.info.next

  const formattedCharacters = data.results.map((character) => ({
    id: character.id,
    name: character.name,
    status: character.status,
    species: character.species,
    gender: character.gender,
    location: {
      name: character.location.name,
    },
    image: character.image
  }));

  return formattedCharacters;
}

// getCharacters()
//   .then(characters => {
//     paintCharacter(cards, characters);
//   })

const start = async () => {
  const characters = await getCharacters(characterUrl)
  const cards = document.querySelector('#cards')
  paintCharacter(cards, characters)
}

start()

const loadMore = document.querySelector('#load-more')
const loadMoreHandler = async () => {

  const chars = await getCharacters(nextPage)
 
  const cards = document.querySelector('#cards')
  paintCharacter(cards, chars)

}
loadMore.addEventListener('click', loadMoreHandler)