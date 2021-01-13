## Importa la colección students en la base de datos simple-queries-exercise a través del comando:

```js
mongoimport --db {dbName} --collection {collectionName} --file {filaName}.json
```

## Ejercicios

1- Muestra solo los nombres de todos los estudiantes
  - db.students.find({}, { name: 1, _id: 0 })
2- Muestra el nombre y la edad de todos los usuarios que tengan más de 30 años
  - db.students.find({ age: { $gt: 30 } }, { name: 1, age: 1, _id: 0 })
3- Muestra solo los nombres y los teléfonos de trabajo de todos los usuarios menores de 30 años
  - db.students.find({ age: { $lt: 30 } }, { name: 1, "phone.work": 1, _id: 0 })
4- Muestra las edades de los usuarios ordenados de mayor a menor
  - db.students.find({}, { age: 1, _id: 0 }).sort({ age: -1 })
5- Devuelve el nombre o nombres de aquellos usuarios que tengan privilegio de admin y cuyo badge color sea negro
  - db.students.find({ $and: [ { privileges: "admin" }, { badges: { $in: [ "black" ] } } ] }, { name: 1, _id: 0 })
6- Devuelve los nombres y las edades de los 3 estudiantes más jóvenes
  - db.students.find({}, { name: 1, age: 1, _id: 0 }).sort({ age: 1 }).limit(3)
7- Devuelve los nombres y las edades de los 3 estudiantes más mayores hasta los 40 como límite
  - db.students.find({ age: { $lte: 40 } }, { name: 1, age: 1, _id: 0 }).sort({ age: -1 }).limit(3)