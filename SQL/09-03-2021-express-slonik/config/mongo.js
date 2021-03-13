const mongoose = require('mongoose')

const DB_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/prueba'
const conn = mongoose
  .createConnection(DB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  })
  // .then(() => {
  //   console.log(`Connected to database: ${DB_URI}`)
  // })
  // .catch((err) => {
  //   console.log('Error connecting to database')
  //   console.log(err)
  // })

// const conn = mongoose.createConnection(process.env.MONGODB_URI);
conn.model('Director', require('../src/schemas/Director'));
conn.model('Movie', require('../src/schemas/Movie'));

module.exports = conn 