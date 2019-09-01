const userServices = require('../services/userServices');


let userAuth = (req, res, next) => {
    (async () => {
       if(req.headers.appid){
        // console.log(req.headers)
        user = await userServices.getUser({ appID: req.headers.appid })
        // console.log(user[0])
        if (!user[0]) {
            res.json({
                auth: false,
                message: "You are not a registered app"
            })
        }
        else{
            req.body.appID=req.headers.appid
            next()
        }
    }else{
        
        user = await userServices.getUser({ appID: req.body.appID })
        if (!user[0]) {
            res.json({
                auth: false,
                message: "You are not a registered app"
            })
        }
        else{
            req.body.appID=req.body.appID
            next()
        }

    }
        
    })()


}

module.exports = {
    userAuth
}