require('../../config/mongo');

const directors = require('../../jsons/directors_formatted.json')
const movies = require('../../jsons/movies.json')

const DirectorsModel = require('../../config/mongo').models.Director;

const directorsInsertions = async () => {
  await DirectorsModel.deleteMany({});
  console.info('> old directors removed!');

  await DirectorsModel.insertMany(directors);
  console.info('> directors added! 🔥');
};

const main = async () => {
  await directorsInsertions();
  process.exit(0);
};

main();