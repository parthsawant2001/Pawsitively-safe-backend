const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const animalSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    pic: {
      type: String,
      default: 'https://icon-library.com/icon/animals-icon-16.html',
    },
    description: { type: String },
  },
  {
    timestamps: true,
  }
);

const Animal = mongoose.model('Animal', animalSchema);
module.exports = Animal;
