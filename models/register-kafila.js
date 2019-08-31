const mongoose = require('mongoose');
const regiterKafilaSchema = mongoose.Schema({
    name: {
        type: String,
    },
    age: {
        type: String,
    },
    gender: {
        type: String,
    },
    phone: {
        type: String,
    },
    pickUpLoc: {
        type: String,
    },
    getToKnow: {
        type: String,
    },
    appID: {
        required: true,
        type: String,
    }

}, { timestamps: true })

module.exports = mongoose.model('regiterKafila', regiterKafilaSchema);