const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/astronomy', {

})
  .then()
  .catch()

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.info('> mongoose succesfully disconnected!')
    process.exit(0)
  })
})