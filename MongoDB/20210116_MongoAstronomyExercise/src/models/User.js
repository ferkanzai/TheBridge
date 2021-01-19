const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
  },
  affiliatedNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  affiliationDate: {
    type: Date,
    default: Date.now,
  },
  occupation: String,
  birthdate: Date,
  deleted: Boolean,
  astronomicalPoints: Number,
  badges: {
    type: Array,
    of: Object,
    default: [
      {
        name: 'My first day as astro-rookie!',
        given: true,
        info: 'given by joining to astronomy guild',
        points: 10,
      },
      {
        name: 'First NEA discovered!',
        given: false,
        info: 'given by discovering your first near-earth asteroid',
        points: 100,
      },
      {
        name: 'First NEC discovered!',
        given: false,
        info: 'given by discovering your first near-earth comet',
        points: 100,
      },
      {
        name: 'Road to NE-lhalla!',
        given: false,
        info: 'given by discovering 5 Objects between NEAs and NECs',
        points: 500,
      },
      {
        name: 'Master of universe!',
        given: false,
        info: 'given by discovering 10 Objects between NEAs and NECs',
        points: 1000,
      },
      {
        name: 'The best astronomer!',
        given: false,
        info: 'given by obtaining all previous badges',
        points: 10000,
      },
    ],
  },
  neasDiscovered: {
    type: Array,
    of: String,
  },
  necsDiscpvered: {
    type: Array,
    of: String,
  },
});

const User = mongoose.model('Users', UserSchema);

module.exports = User;
