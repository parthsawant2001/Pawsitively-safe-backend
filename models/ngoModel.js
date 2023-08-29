const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const ngoSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    mission: { type: String, required: true },
    contact: {
      email: { type: String },
      phoneNo: { type: String },
      address: { type: String },
    },
  },
  {
    timestamps: true,
  }
);

const Ngo = mongoose.model('Ngo', ngoSchema);
module.exports = Ngo;
