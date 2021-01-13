## Importa la colección restaurants en la base de datos simple-queries-exercise a través del comando:

```js
mongoimport --db {dbName} --collection {collectionName} --file {filaName}.json
```

## Ejercicio

1- Muestra todos los restaurantes
  - db.restaurants.find({}, { "_id": 0 })
2- Muestra todos los restaurantes en el barrio de Manhattan
  - db.restaurants.find({ "borough": "Manhattan" }, { "_id": 0 })
3- Muestra todos los restaurantes en los barrios de Queens y Brooklyn
  - db.restaurants.find({ $or: [ { "borough": "Brooklyn" }, { "borough": "Queens" } ] }, { "_id": 0 })
4- Muestra todos los restaurantes de comida americana
  - db.restaurants.find({ "cuisine": "American " }, { "_id": 0 })
5- Muestra todos los restaurantes de comida americana en el barrio de Queens
  - db.restaurants.find({ $and: [ { "cuisine": "American " }, { "borough": "Queens" } ] }, { "_id": 0 })
6- Muestra solo los nombres de los restaurantes de comida Jewish/Kosher
  - db.restaurants.find({ "cuisine": "Jewish/Kosher" }, { "_id": 0 })
7- Muestra solo los 10 primeros restaurantes
  - db.restaurants.find({}, { "_id": 0 }).limit(10)
8- Muestra todos los restaurantes cuyo código postal sea 11374
  - db.restaurants.find({ "address": { "zipcode": "11374" } }, { "_id": 0 })
9- Muestra todos los restaurantes que tengan grado A y dos puntuaciones (scores = 2)
  - db.restaurants.find({ $and: [ { 'grades.grade': { $in: [ 'A' ] } }, { $where: 'this.grades.length === 2'} ] }, { "_id": 0 })
  - db.restaurants.find({ $and: [ { 'grades.grade': { $in: [ 'A' ] } }, { grades: { $size: 2 } } ] }, { "_id": 0 })
10- Muestra los nombres y el código postal de todos los restaurantes cuyo código postal sea inferior a 10500 y ordenados de mayor a menor (por código postal)
  - db.restaurants.find({ "address.zipcode": { $lt: "10500" } }, {_id: 0, name: 1, "address.zipcode": 1}).sort({ "address.zipcode": -1 })