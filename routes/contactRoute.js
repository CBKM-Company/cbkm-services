const app = module.exports = require('express')();
const contactServices = require('../services/contactServices')
const {userAuth}=require('../middleware/auth')
app.get('/getall',userAuth, (req, res) => {
    (async () => {
        try {
            console.log(req.body)
            contactPromise = await contactServices.getContacts(req.body);

            res.json({ success: true, data: contactPromise })
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
            contactPromise = await contactServices.saveContact(req.body);
            res.json({ success: true, data: contactPromise })
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