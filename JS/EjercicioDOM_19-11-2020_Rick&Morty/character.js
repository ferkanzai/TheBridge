const paintCharacter = (element, char) => {

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
    `

  element.append(card)

  const status = document.querySelector(`#status-${char.id}`)

  if (char.status === 'Alive') {
    status.classList.add('alive')
  }
  if (char.status === 'Dead') {
    status.classList.add('dead')
  }
}

const getSingleCharacter = async () => {
  const id = new URLSearchParams(window.location.search).get('id')
  const url = `https://rickandmortyapi.com/api/character/${id}`

  const res = await fetch(url)
  const data = await res.json()

  const formattedCharacter = {
    id: data.id,
    name: data.name,
    status: data.status,
    species: data.species,
    gender: data.gender,
    location: {
      name: data.location.name,
    },
    image: data.image
  }

  return formattedCharacter;
}

getSingleCharacter();


const start = async () => {
  const character = await getSingleCharacter()
  document.title = `${character.name} page`
  const cards = document.querySelector('#cards')
  paintCharacter(cards, character)
}

start()