const router = require('express').Router();
const NeaModel = require('../models/Neas');

const { checkDate, itemsPerPage } = require('../utils');

let skip = 0;

router.get('/', async (req, res, next) => {
  try {
    const { orbit_class, from, to } = req.query;
    let { page } = req.query;
    
    if (page) {
      skip = (Number(page) - 1) * itemsPerPage;
    } else {
      page = 1;
    }

    let nextPage = Number(page) + 1;

    if (!orbit_class && !from && !to) {
      const result = await NeaModel.find({}, { _id: 0 }).limit(itemsPerPage).skip(skip).lean();

      if (result.length < itemsPerPage) {
        nextPage = null;
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

    if (orbit_class) {
      const result = await NeaModel.find(
        { $expr: { $eq: [{ $toLower: '$orbit_class' }, orbit_class.toLowerCase()] } },
        { _id: 0, designation: 1, period_yr: 1 }
      )
        .limit(itemsPerPage)
        .skip(skip)
        .lean();

      if (result.length < itemsPerPage) {
        nextPage = null;
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

    if (from || to) {
      let query = {};

      if (from && !to) {
        query = { $expr: { $gte: [{ $toDate: '$discovery_date' }, checkDate(from)] } };
      } else if (!from && to) {
        query = { $expr: { $lte: [{ $toDate: '$discovery_date' }, checkDate(to)] } };
      } else {
        query = {
          $and: [
            { $expr: { $gte: [{ $toDate: '$discovery_date' }, checkDate(from)] } },
            { $expr: { $lte: [{ $toDate: '$discovery_date' }, checkDate(to)] } },
          ],
        };
      }

      const result = await NeaModel.find(query, {
        _id: 0,
        designation: 1,
        period_yr: 1,
        discovery_date: 1,
      })
        .limit(itemsPerPage)
        .skip(skip)
        .lean();

      if (result.length < itemsPerPage) {
        nextPage = null;
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
  } catch (error) {
    next(error.message);
  }
});

// GET para obtener designación, fecha y período anual de todos los asteroides que cumplan el filtro de fechas dadas
// /astronomy/neas?from=2010&to=2015
// /astronomy/neas?from=2010
// /astronomy/neas?to=2015
// En este caso, además, podremos poner la fecha más específica si quisiéramos:
// YYYY-MM-DD
// YYYY-MM
// YYYY

module.exports = router;
