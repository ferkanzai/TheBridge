const fs = require('fs');

const read = async (path) => {
  const raw = await fs.readFileSync(path);
  return JSON.parse(raw);
};

const write = async (path, content) => {
  const contentStr = typeof content === 'string' ? content : JSON.stringify(content);
  await fs.writeFileSync(path, contentStr);
};

const createError = (message, code) => {
  const error = new Error(message);
  error.code = code;
  throw error;
};

const calculateAge = (date) => {
  const ageDifMs = Date.now() - new Date(date).getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const MAPBOX_TOKEN =
  'pk.eyJ1IjoiZmVya2FuemFpIiwiYSI6ImNraTFvZGE1azBiY24yd3Fuc3RoYjZ1N3QifQ.825dTY3GMtTjgI5M90Ujrw';

module.exports = {
  read,
  write,
  createError,
  calculateAge,
  MAPBOX_TOKEN,
};
