const app = module.exports = require('express')();
const registerServices = require('../services/registerKafilaServices')
const {userAuth}=require('../middleware/auth')
app.get('/getall',userAuth, (req, res) => {
    (async () => {
        try {
            console.log(req.body)
            registerPromise = await registerServices.getRegister(req.body);

            res.json({ success: true, data: registerPromise })
        }
        catch (e) {
            console.log(e)
            res.json({ success: false })
        }
    })();
})


app.post('/save',userAuth, (req, res) => {
    (async () => {
        try {
            registerPromise = await registerServices.saveContact(req.body);
            res.json({ success: true, data: registerPromise })
        }
        catch (e) {
            console.log(e)
            res.json({ success: false })
        }
    })();
})


app.get('/ava',(req,res)=>{
    res.send("ava")
})