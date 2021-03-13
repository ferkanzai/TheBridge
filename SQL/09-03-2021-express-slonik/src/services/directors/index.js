const router = require('express').Router()

module.exports = db => {
  router.get('/all', require('./get-directors')(db))
  router.get('/nicknames', require('./get-nicknames')(db))
  router.get('/pics', require('./get-pics')(db))

  return router
}