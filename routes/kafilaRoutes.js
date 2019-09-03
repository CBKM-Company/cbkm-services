const app = module.exports = require('express')();
const fs = require('fs');
let jsonData = require('../count');
app.use('/', require('express').static('kafila'))

//app.use('/register', require('express').static('kafila/register.html'))
app.use('/contact', require('./contactRoute'))
app.use('/thanx', require('express').static('kafila/thanx.html'))
app.use('/cbkmadmin', require('express').static('kafila/admin.html'))

app.use('/register', require('./registerKafilaRoute'))

app.get('/count/:id',(req,res)=>{
    jsonData[req.params.id]++
let data = JSON.stringify(jsonData, null, 2);

fs.writeFile('count.json', data, (err) => {
    // if (err) throw err;
    // console.log('Data written to file');
});
res.send(jsonData)

})
app.get('/getcount',(req,res)=>{
    res.json(jsonData)

})