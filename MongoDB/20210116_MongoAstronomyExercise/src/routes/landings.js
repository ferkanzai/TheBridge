const router = require('express').Router();
const mongoose = require('mongoose');
const LandingModel = require('../models/Landing');

const { createError } = require('../utils');

router.get('/', async (req, res, next) => {
  try {
    const { minimum_mass } = req.query;

    if (!minimum_mass) {
      const result = await LandingModel.find({}, { _id: 0 }).lean();
      res.status(200).json({
        data: {
          result,
        },
        status: 'ok',
      });
      return;
    }

    const result = await LandingModel.find(
      { $expr: { $gte: [{ $toDouble: '$mass' }, Number(minimum_mass)] } },
      { _id: 0, name: 1, mass: 1 }
    ).lean();

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

router.get('/mass/:mass', async (req, res, next) => {
  try {
    const { mass } = req.params;

    const result = await LandingModel.find(
      { $expr: { $eq: [{ $toDouble: '$mass' }, Number(mass)] } },
      { _id: 0, name: 1, mass: 1 }
    ).lean();

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

router.get('/recclass/:recclass', async (req, res, next) => {
  try {
    const { recclass } = req.params;

    console.log(recclass)

    const result = await LandingModel.find(
      { recclass: { $eq: recclass } },
      { _id: 0, name: 1, recclass: 1 }
    ).lean();

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
