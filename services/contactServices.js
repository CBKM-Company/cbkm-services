const contactSchema = require('../models/contact');

const getContacts = function (params) {
    return contactSchema.find(params).exec();
}
const saveContact = function (productObj) {
    let prod = new contactSchema(productObj);
    return prod.save();
}
const deleteContact = function (params) {
    return contactSchema.deleteMany(params).exec();
}

module.exports = {
    getContacts,
    saveContact,
    deleteContact,
}