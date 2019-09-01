const userServices = require('../services/userServices');


let userAuth = (req, res, next) => {
    (async () => {
       if(req.headers.api){
        console.log(req.headers)
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
        
        user = await userServices.getUser({ appID: req.body.appid })
        console.log(req.body)
        if (!user[0]) {
            res.json({
                auth: false,
                message: "You are not a registered app"
            })
        }
        else{
            req.body.appID=req.body.appid
            next()
        }

    }
        
    })()


}

module.exports = {
    userAuth
}