const registerSchema = require('../models/register-kafila');

const getRegister = function (params) {
    return registerSchema.find(params).exec();
}
const saveRegister = function (productObj) {
    let prod = new registerSchema(productObj);
    return prod.save();
}
const deleteRegister = function (params) {
    return registerSchema.deleteMany(params).exec();
}

module.exports = {
    getRegister,
    saveRegister,
    deleteRegister,
}