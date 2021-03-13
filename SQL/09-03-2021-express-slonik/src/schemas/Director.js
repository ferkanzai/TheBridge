const { Schema } = require('mongoose');

const directorSchema = new Schema({
  id: { type: Number, required: true },
  query_name: { type: String, required: true },
  name: { type: String },
  nickname: { type: String },
  pic: { type: String, required: true },
  nationality: { type: String },
  roles: { type: String },
});

module.exports = directorSchema;
