const app = module.exports = require('express')();
app.use('/', require('express').static('kafila'))
app.use('/contact', require('./contactRoute'))