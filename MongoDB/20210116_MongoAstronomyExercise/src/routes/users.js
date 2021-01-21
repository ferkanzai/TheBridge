const router = require('express').Router();
const UserModel = require('../models/User');

const { calculateAge, createError } = require('../utils/');

UserModel.counterReset('affiliatedNumber', (err) => {});

router.get('/:affiliatedNumber', async (req, res, next) => {
  try {
    const { affiliatedNumber } = req.params;

    const birthdate = await UserModel.find({ affiliatedNumber }, { birthdate: 1, _id: 0 });

    const age = birthdate.length
      ? calculateAge(birthdate[0].birthdate)
      : createError('User not found', 404);

    let result = await UserModel.find(
      { affiliatedNumber },
      {
        name: 1,
        occupation: 1,
        affiliatedNumber: 1,
        astronomicalPoints: 1,
        affiliationDate: 1,
        _id: 0,
      }
    ).lean();

    result = { ...result[0], age };

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
