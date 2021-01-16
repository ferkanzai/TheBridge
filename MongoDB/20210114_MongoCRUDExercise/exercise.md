## Crea una base de datos que se llame Pokedex
## Crea una colección que se llame pokemons
## Importa el fichero pokemons.json (se encuentra en datasets) a la colección recién creada

### Recuerda que puedes hacerlo desde Compass o desde la propia terminal

```js
mongoimport --db {databaseName} --collection {collectionName} --file {fileName}.json
```

## Ejercicios (Nunca muestres los ObjectID)

1- Muestra los nombres y el id de los primeros 151 pokemons
  - db.pokemons.find({}, { _id: 0, id: 1, name: 1 }).sort({ id: 1 }).limit(151)
2- Muestra los nombres y el tipo de todos los pokemons que sean únicamente de tipo planta (Grass)
  - db.pokemons.find({ $and: [ { type: { $in: [ "Grass" ] } }, { type: { $size: 1 } } ] }, { type: 1, _id: 0, name: 1 } )
3- Muestra los nombres y el tipo de todos los pokemons sean tipo agua (no únicamente agua)
  - db.pokemons.find({ type: { $in: [ "Water" ] } }, { type: 1, _id: 0, name: 1 } )
4- Muestra todos los pokemons que tengan más de 100 puntos de defensa base
  - db.pokemons.find({ "base.Defense": { $gt: 100 } }, { _id: 0 })
5- Muestra el nombre, ataque base e id del top 10 de los pokemons más fuertes ordenados de mayor a menor teniendo en cuenta el ataque base
  - db.pokemons.find({}, { _id: 0, name: 1, "base.Attack": 1, id: 1 }).sort({ "base.Attack": -1 }).limit(10)
6- Muestra el nombre, defensa base e id del top 10 de los más débiles ordenados de más débil a menos débil teniendo en cuenta la defensa base
  - db.pokemons.find({}, { _id: 0, name: 1, "base.Defense": 1, id: 1 }).sort({ "base.Defense": 1 }).limit(10)
7- Muestra el nombre, velocidad e id del top 5 de los pokemons más rápidos de la segunda generación (ids: 152 - 251)
  - db.pokemons.find({ $and: [ { id: { $gte: 152 } }, { id: { $lte: 251 } } ] }, { name: 1, "base.Speed": 1, id: 1, _id: 0 }).sort({ "base.Speed": -1 }).limit(5)
8- Crea un Gyarados Shiny que tenga todos los stats a 1000 y sea de tipo Agua/Dragón
  - db.pokemons.insertOne({ id: 810, name: { english: "Gyarados Shiny" }, type: [ "Water", "Dragon" ], base: { HP: 1000, Attack: 1000, Defense: 1000, "Sp. Attack": 1000, "Sp. Defense": 1000, Speed: 1000 } } )
9- Crea 3 Pokemon bicho que tengan 20 puntos de stat y cuyos nombres serán Firebug, Waterbug y Grassbug. Los tipos serán Fuego/Bicho, Agua/Bicho y Planta/Bicho. No olvidéis los ids de cada uno!
  - db.pokemons.insertMany([
    { id: 811, name: { english: "Firebug" }, type: [ "Fire", "Bug" ], base: { HP: 20, Attack: 20, Defense: 20, "Sp Attack": 20, "Sp Defense": 20, Speed: 20 } },
    { id: 812, name: { english: "Waterbug" }, type: [ "Water", "Bug" ], base: { HP: 20, Attack: 20, Defense: 20, "Sp Attack": 20, "Sp Defense": 20, Speed: 20 } },
    { id: 813, name: { english: "Grassbug" }, type: [ "Grass", "Bug" ], base: { HP: 20, Attack: 20, Defense: 20, "Sp Attack": 20, "Sp Defense": 20, Speed: 20 } }
  ])
10- Consulta todos los pokemons que tengan 1000 puntos de velocidad y 20 puntos de velocidad, ataque base, defensa base y vida
  - db.pokemons.find({ $and: [ { "base.Speed": { $eq: 1000 } }, {  }] } )
11- Actualiza el pokemon Blastoise para que sea shiny (cámbiale el nombre y auméntale la vida a 700 puntos y el resto de stats a 500
  - 
12- Elimina a todos los pokemons que tengan menos de 100 de ataque base
  - 