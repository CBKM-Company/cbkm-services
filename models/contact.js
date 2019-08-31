const mongoose = require('mongoose');
const contactSchema = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    branch: {
        type: String,
    },
    message: {
        type: String,
    },
    phone: {
        type: String,
    },
    appID: {
        required: true,
        type: String,
    }

}, { timestamps: true })

module.exports = mongoose.model('contact', contactSchema);