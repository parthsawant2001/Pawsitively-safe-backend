const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const animalSchema = mongoose.Schema({
    name: { type: String, required: true },

    pic: {
        type: String,
        default: 'https://icon-library.com/icon/animals-icon-16.html',
    },
    adoptionFee: { type: Number },
    age: { type: Number, required: true },
    breedType: { type: String, required: true }
    healthRecord: { type: String, required: true }
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
}, {
    timestamps: true,
});



const Animal = mongoose.model('Animal', animalSchema);
module.exports = Animal;