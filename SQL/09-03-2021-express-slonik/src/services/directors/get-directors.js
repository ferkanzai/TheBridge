const type = process.argv[2].split(':')[1];

const { getAllDirectorsNames } =
  type === 'postgres'
    ? require('../../queries/postrges/directors')
    : require('../../queries/mongo/directors');

module.exports = (db) => async (_, res, next) => {
  try {
    const result = await getAllDirectorsNames(db);

    if (!result) {
      next(new Error('something went wrong'));
      return;
    }

    const { rows, rowsCount } = result;

    res.status(200).json({
      success: true,
      data: rows || result,
      len: rowsCount || result.length,
    });
  } catch (error) {
    console.info('> something went wrong: ', error.message);
  }
};
