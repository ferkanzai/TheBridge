const router = require('express').Router()

router.use('/landings', require('./landings'))
router.use('/neas', require('./neas'))
router.use('/users', require('./users'))

module.exports = router