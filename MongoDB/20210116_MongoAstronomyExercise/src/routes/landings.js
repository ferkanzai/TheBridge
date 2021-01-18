const router = require('express').Router();
const LandingModel = require('../models/Landing');

const { createError, getPlace } = require('../utils');

router.get('/', async (req, res, next) => {
  try {
    const { minimum_mass, from, to } = req.query;

    if (!minimum_mass && !from && !to) {
      const result = await LandingModel.find({}, { _id: 0 }).lean();
      res.status(200).json({
        data: {
          result,
        },
        status: 'ok',
      });
      return;
    }

    if (minimum_mass) {
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
      return;
    }

    if (from || to) {
      let query = {};

      if (from && !to) {
        query = { $expr: { $gte: [{ $toDate: '$year' }, { $toDate: `${from}-01-01` }] } };
      } else if (!from && to) {
        query = { $expr: { $lte: [{ $toDate: '$year' }, { $toDate: `${to}-01-01` }] } };
      } else {
        query = {
          $and: [
            { $expr: { $gte: [{ $toDate: '$year' }, { $toDate: `${from}-01-01` }] } },
            { $expr: { $lte: [{ $toDate: '$year' }, { $toDate: `${to}-01-01` }] } },
          ],
        };
      }

      const result = await LandingModel.find(query, {
        _id: 0,
        name: 1,
        mass: 1,
        year: { $year: { $toDate: '$year' } },
      }).lean();

      res.status(200).json({
        data: {
          result,
        },
        status: 'ok',
      });
      return;
    }

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

router.get('/:name', async (req, res, next) => {
  try {
    const { name } = req.params;

    const longLat = await LandingModel.find(
      { $expr: { $eq: [{ $toLower: '$name' }, name] } },
      { reclong: 1, reclat: 1, _id: 0 }
    );

    if (!longLat[0]) {
      createError('Name of landing not found', 404);
      return;
    }

    const { reclong, reclat } = longLat[0];

    // console.log(lat[0].reclat);
    const place = await getPlace(reclong, reclat);
    const placeName = place.features[0].place_name;

    res.status(200).json({
      data: {
        placeName,
      },
      status: 'ok',
    });
  } catch (error) {
    next(error.message);
  }
});

module.exports = router;
