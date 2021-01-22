const router = require('express').Router();
const UserModel = require('../models/User');

const { calculateAge, createError, getByMod } = require('../utils/');

UserModel.counterReset('affiliatedNumber', (err) => {});

router.get('/:affiliatedNumber/:mod?', async (req, res, next) => {
  try {
    const { affiliatedNumber, mod } = req.params;

    const mods = ['badges', 'neas', 'necs', 'points'];

    if (!mod) {
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
      return;
    }

    if (mods.includes(mod)) {
      if (mod === 'badges') {
        const result = await getByMod({ model: UserModel, affiliatedNumber, mod });

        res.status(200).json({
          data: {
            result,
          },
          status: 'ok',
        });
        return;
      }

      if (mod === 'neas') {
        const result = await getByMod({ model: UserModel, affiliatedNumber, mod });

        res.status(200).json({
          data: {
            result,
          },
          status: 'ok',
        });
        return;
      }

      if (mod === 'necs') {
        const result = await getByMod({ model: UserModel, affiliatedNumber, mod });

        res.status(200).json({
          data: {
            result,
          },
          status: 'ok',
        });
        return;
      }

      if (mod === 'points') {
        const result = await getByMod({ model: UserModel, affiliatedNumber, mod });

        res.status(200).json({
          data: {
            result,
          },
          status: 'ok',
        });
        return;
      }
    } else {
      createError('Endpoint not found', 404);
    }
  } catch (error) {
    next(error);
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
    }).catch((err) => createError('Error registering user: nickname already in use ', 500));

    res.status(200).json({
      data: {
        result,
      },
      status: 'ok',
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
