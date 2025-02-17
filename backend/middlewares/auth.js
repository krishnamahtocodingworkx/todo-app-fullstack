const { getUser } = require('../service/auth')

async function restrictToLoggedInUser(req,res,next) {
    const userUid = req.cookie.uid;
    
    if(!userUid) {
        res.json({
            msg:"Cookie not found !"
        })
    }
    const user = getUser(userUid);
    if(!user) {
        res.json({
            msg:"User not found"
        })
    }
    req.user = user;
    next();
}