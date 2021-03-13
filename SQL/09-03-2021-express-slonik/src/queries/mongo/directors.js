// Devuelve el name de todos los directores cuyo campo name no esté vacío
// db.directors.find({ name: {$ne: ""} })
// Devuelve query_name y sus correspondientes nicknames
// db.directors.find({}, {query_name: 1, name: 1, _id: 0})
// Devuelve pic y nickname de todos aquellos directores que tengan nickname
// Devuelve query_name y nacionalidad de todos aquellos directores que sean de origen canadiense.
// Devuelve query_name y nacionalidad de todos aquellos directores que sean de origen británico-estadounidense (vigila cómo están guardados esos datos. Tienen que ser las dos cosas juntas)
// Devuelve query_name, nacionalidad y roles de aquellos directores que sean ajedrecistas
// Devuelve query_name, name y nacionalidad de aquellos directores que tengan, al menos, dos nacionalidades
// Devuelve query_name y roles de aquellos directores que tengan más de 3 roles

const getAllDirectorsNames = async (db) => {
  try {
    // Devuelve el name de todos los directores cuyo campo name no esté vacío
    return await db.models.Director.find({ name: { $ne: '' } }, { name: 1, _id: 0 });
  } catch (error) {
    console.info('> something went wrong: ', error.message);
    return null;
  }
};

const getNicknames = async (db) => {
  try {
    // Devuelve query_name y sus correspondientes nicknames
    return await db.models.Director.find({}, { query_name: 1, nickname: 1, _id: 0 });
  } catch (error) {
    console.info('> something went wrong: ', error.message);
    return null;
  }
};

module.exports = {
  getAllDirectorsNames,
  getNicknames,
};
