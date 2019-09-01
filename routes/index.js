const app = module.exports = require('express')();

app.use('/contact', require('./contactRoute'))
app.use('/user', require('./userRoute'))
app.use('/kafila', require('./kafilaRoutes'))
