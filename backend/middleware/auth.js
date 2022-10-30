const jwt = require("jsonwebtoken");

module.exports = async(req,res,next)=>{
    let decoded;
    const header = req.get("Authorization");
    if(!header){
        req.isAuth=false;
       return next();
    }

    const token = header.split(" ")[1];
    try{
        decoded = jwt.verify(token,"SecretNooneShouldKnow");
    }
    catch(err){
        req.isAuth = false;
        return next();
    }

    if(!decoded){
        req.isAuth = false;
        return next();
    }
    req.user = decoded.email;
    req.isAuth = true;
    next();
}