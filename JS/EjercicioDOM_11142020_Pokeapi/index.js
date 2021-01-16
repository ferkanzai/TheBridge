const createDiv = (className, appendTo) => {
  const div = document.createElement('div')
  div.classList.add(className)
  appendTo.appendChild(div)

  return div
}

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const createP = (pkmnObj, arr, classNameDiv, classNameP, appendTo) => {
  arr.forEach((val) => {

    const typeDiv = createDiv(classNameDiv, appendTo)

    const p = document.createElement('p')
    p.className = classNameP
    p.innerText = capitalize(val.name)

    typeDiv.append(p)

    if (classNameP === 'type-name') {
      pkmnObj[val.name].forEach((val) => {
        const p = document.createElement('p')
        p.innerText = capitalize(val)

        typeDiv.append(p)
      })
    }
  })
}

let pokemon = {}

const getPokemon = async (id) => {
  const pokeapiUrl = `https://pokeapi.co/api/v2/pokemon/${id}/`
  const res = await fetch(pokeapiUrl)
  const data = await res.json()

  pokemon[data.id] = {
    name: data.name,
    sprite: data.sprites.other['official-artwork'].front_default,
    types: data.types.map((type) => type.type),
    abilities: data.abilities.map((ability) => ability.ability)
  }
  console.log(pokemon)
};

const getThree = (length) => [Math.floor(Math.random() * length), Math.floor(Math.random() * length), Math.floor(Math.random() * length)]

const paintPokemon = (id) => {

  let pkmn = pokemon[`${id}`]
  console.log(pkmn)

  const pkmnTypesVal = Object.values(pkmn.types)
  const pkmnAbilitiesVal = Object.values(pkmn.abilities)

  const typesUrl = pkmnTypesVal.map((val, i, arr) => arr[i].url)

  const urlPromises = typesUrl.map(url => {
    return fetch(url).then(res => res.json())
  })

  Promise.all(urlPromises).then((data) => {

    data.forEach(d => {
      const typeName = d.name
      const arrPkmn = getThree(d.pokemon.length).reduce((acc, current, i) => [...acc, d.pokemon[current].pokemon.name], [])
      pkmn = {
        ...pkmn,
        [typeName]: arrPkmn
      }
    })
    const pkmnCard = createDiv('pkmn', cards)

    pkmnCard.innerHTML = `
        <h2>#${id} ${capitalize(pkmn.name)}</h2>
        <img src="${pkmn.sprite}" alt="${pkmn.name}">
        <h3 class='title'>Types:</h3>
        <div class='types' id='types-${pkmn.name}'></div>
        <h3 class='title'>Abilities:</h3>
        <div class='abilities' id='abilities-${pkmn.name}'></div>`

    const pkmnTypes = document.querySelector(`#types-${pkmn.name}`)
    createP(pkmn, pkmnTypesVal, 'type', 'type-name', pkmnTypes)

    const pkmnAbilities = document.querySelector(`#abilities-${pkmn.name}`)
    createP(pkmn, pkmnAbilitiesVal, 'ability', 'ability-name', pkmnAbilities)
  })
}

getPokemon(1), getPokemon(4), getPokemon(7), getPokemon(25), getPokemon(133), getPokemon(77)
Object.keys(pokemon).forEach(pkmn => paintPokemon(pkmn))

const cards = document.querySelector('#cards')
// const choosePkmnSelect = document.querySelector('#choose-pkmn')

// choosePkmnSelect.addEventListener('change', () => {
//   cards.innerHTML = ''
//   const data = choosePkmnSelect.value
//   paintPokemon(getPokemon(data))
// })

const choosePkmnBtn = document.querySelector('#choose-pkmn-btn')
choosePkmnBtn.addEventListener('click', () => {
  cards.innerHTML = ''
  pkmnId = document.querySelector('#choose-pkmn').value
  if (pkmnId > 893 || pkmnId <= 0) {
    alert('Maximum ID is 893 and minimum 1')
  } else {
    if (pokemon.hasOwnProperty(pkmnId)) {
      paintPokemon(pkmnId)
    } else {
      getPokemon(pkmnId)
      paintPokemon(pkmnId)
    }
  }
})