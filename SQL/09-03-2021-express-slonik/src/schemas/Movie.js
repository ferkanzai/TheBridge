const { Schema } = require('mongoose');

const movieSchema = new Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  us_gross: { type: String },
  worldwide_gross: { type: String },
  us_dvd_sales: { type: String, required: true },
  production_budget: { type: String },
  release_date: { type: String },
  mpaa_rating: {},
  running_time_min: {},
  distributor: {},
  source: {},
  major_genre: {},
  creative_type: {},
  rotten_tomatoes_rating: {},
  imdb_rating: {},
  imdb_votes: {},
  director: {},
});

module.exports = movieSchema;
