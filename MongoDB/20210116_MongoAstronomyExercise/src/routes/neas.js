const router = require('express').Router();
const NeaModel = require('../models/Neas');

const itemsPerPage = 25;

router.get('/', async (req, res, next) => {
  try {
    const { orbit_class } = req.query;
    let { page } = req.query;
    let skip = 0;

    if (page) {
      skip = (Number(page) - 1) * itemsPerPage;
    } else {
      page = 1;
    }

    let nextPage = Number(page) + 1

    if (!orbit_class) {
      const result = await NeaModel.find({}, { _id: 0 }).limit(itemsPerPage).skip(skip).lean();

      if(result.length < itemsPerPage) {
        nextPage = null
      }

      res.status(200).json({
        data: {
          result,
        },
        nextPage,
        status: 'ok',
      });
      return;
    }

    const result = await NeaModel.find(
      { $expr: { $eq: [{ $toLower: '$orbit_class' }, orbit_class.toLowerCase()] } },
      { _id: 0, designation: 1, period_yr: 1 }
    ).limit(itemsPerPage).skip(skip).lean();

    if(result.length < itemsPerPage) {
      nextPage = null
    }

    res.status(200).json({
      data: {
        result,
      },
      nextPage,
      status: 'ok',
    });
  } catch (error) {
    next(error.message);
  }
});

module.exports = router;
