const { sql } = require('slonik');

// Directors-related queries

const getAllDirectorsNames = async (db) => {
  try {
    // Devuelve el name de todos los directores cuyo campo name no esté vacío
    return await db.query(sql`
      SELECT name FROM directors WHERE name <> ''
    `);
  } catch (error) {
    console.info('> something went wrong: ', error.message);
    return null;
  }
};

const getNicknames = async (db) => {
  try {
    // Devuelve query_name y sus correspondientes nicknames
    return await db.query(sql`
      SELECT query_name, nickname FROM directors;
    `);
  } catch (error) {
    console.info('> something went wrong: ', error.message);
    return null;
  }
};

const getPics = async (db) => {
  try {
    // Devuelve pic y nickname de todos aquellos directores que tengan nickname
    return await db.query(sql`
      SELECT pic, nickname FROM directors WHERE nickname <> '';
    `);
  } catch (error) {
    console.info('> something went wrong: ', error.message);
    return null;
  }
};

// Devuelve query_name y nacionalidad de todos aquellos directores que sean de origen canadiense.
// SELECT query_name, nationality FROM directors WHERE nationality LIKE '%canadiense%';
// Devuelve query_name y nacionalidad de todos aquellos directores que sean de origen británico-estadounidense (vigila cómo están guardados esos datos. Tienen que ser las dos cosas juntas)
// SELECT query_name, nationality FROM directors WHERE nationality IN ('británico,estadounidense', 'estadounidense,británico', 'británica,estadounidense', 'estadounidense,británica');
// Devuelve query_name, nacionalidad y roles de aquellos directores que sean ajedrecistas
// SELECT query_name, nationality, roles FROM directors WHERE roles LIKE '%ajedrecista%';
// Devuelve query_name, name y nacionalidad de aquellos directores que tengan, al menos, dos nacionalidades
// SELECT query_name, name, nationality FROM directors WHERE array_length(string_to_array(nationality, ','), 1) >= 2;
// Devuelve query_name y roles de aquellos directores que tengan más de 3 roles
// SELECT query_name, roles FROM directors WHERE array_length(string_to_array(roles, ','), 1) > 3;

module.exports = {
  getAllDirectorsNames,
  getNicknames,
  getPics,
};
