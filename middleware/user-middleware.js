const userServices = require("../Services/User-Services");

exports.checkUserParams = function(req,res,next){
    if(!req.body.firstName || !req.body.lastName || !req.body.email){
        res.sendStatus(400);
    }
    next();
}

exports.checkExistingUser = function(req,res,next){
    console.log(req.body.userId);
    userServices.getById(req.body.userId).then(
        (data)=>{
            if(data.length>0){next()}
            else{res.sendStatus(500);}
        }
    ).catch(error=>{res.sendStatus(500)});
}
