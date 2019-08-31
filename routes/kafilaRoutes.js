const app = module.exports = require('express')();
app.use('/', require('express').static('kafila'))
app.use('/register', require('express').static('kafila/register.html'))
app.use('/contact', require('./contactRoute'))
app.use('/register', require('./registerKafilaRoute'))
