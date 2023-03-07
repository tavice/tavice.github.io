const mongoose = require('mongoose');

const equipmentSchema = new mongoose.Schema({
    year: Number,
    description: {type: String, require: true},
    model: {type: String, require: true},
    purchase: String,
    isDriveable: {type: Boolean, require: true},
    location: String,
    currentUser: {type: String, require: true},
    img: {type: String, require: true},
})

//fruitSchema singular represents a single fruit

const Equipment = mongoose.model('Equipment', equipmentSchema)
module.exports = Equipment;