const router = require('express').Router();
const UserModel = require('../models/User');

UserModel.counterReset('affiliatedNumber', (err) => {});

router.get('/', (req, res, next) => {
  try {
  } catch (error) {
    next(error.message);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { name, nickname, occupation, birthdate } = req.body;

    const result = await UserModel.create({
      name,
      nickname,
      occupation,
      birthdate,
    });

    res.status(200).json({
      data: {
        result,
      },
      status: 'ok',
    });
  } catch (error) {
    next(error.message);
  }
});

module.exports = router;
