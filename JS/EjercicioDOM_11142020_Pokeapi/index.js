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

    if(classNameP === 'type') {
      pkmnObj[val.name].forEach((val) => {
        const p = document.createElement('p')
        p.innerText = capitalize(val)
  
        typeDiv.append(p)
      })
    }
  })
}

const pokemon = {}

const getPokemon = (id) => {
  const pokeapiUrl = `https://pokeapi.co/api/v2/pokemon/${id}/`
  return fetch(pokeapiUrl).then(res => res.json())
};

const paintPokemon = (...fn) => {
  Promise.all(fn).then(data => {

    data.forEach(d => {

      pokemon[d.id] = {
        name: d.name,
        sprite: d.sprites.other['official-artwork'].front_default,
        types: d.types.map((type) => type.type),
        abilities: d.abilities.map((ability) => ability.ability)
      }
    })

    const pokemonIds = Object.keys(pokemon)

    pokemonIds.forEach((id) => {
      let pkmn = pokemon[`${id}`]
      
      const pkmnTypesVal = Object.values(pkmn.types)
      const pkmnAbilitiesVal = Object.values(pkmn.abilities)

      const typesUrl = pkmnTypesVal.map((val, i, arr) => arr[i].url)

      const urlPromises = typesUrl.map(url => {
        return fetch(url).then(res => res.json())
      })

      Promise.all(urlPromises).then((data) => {

        data.forEach(d => {
          const typeName = d.name
          const arrPkmn = d.pokemon.map((pkm, i) => i < 4 && i > 0 ? pkm.pokemon.name : false).filter(el => el)
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
        createP(pkmn, pkmnTypesVal, 'type-name', 'type', pkmnTypes)

        const pkmnAbilities = document.querySelector(`#abilities-${pkmn.name}`)
        createP(pkmn, pkmnAbilitiesVal, 'ability-name', 'ability', pkmnAbilities)
      })
    })
  });
}

// paintPokemon(getPokemon(1), getPokemon(4), getPokemon(7), getPokemon(25), getPokemon(151))

const cards = document.querySelector('#cards')
const choosePkmnBtn = document.querySelector('#choose-pkmn')

choosePkmnBtn.addEventListener('change', () => {
  cards.innerHTML = ''
  const data = choosePkmnBtn.value
  paintPokemon(getPokemon(data))
})