const jwt=require('jsonwebtoken');
require('dotenv').config();

const authMiddleWare=(req,res,next)=>{
    // console.log('Check Token', req.headers.token)
    const token=req.headers.token.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN, function (err, user) {
        if(err){
            res.status(500).json(err)
        }
        const {payload}=user;
        if(payload?.isAdmin){
            next()
        }else{
            res.status(500).json({
                message:'The authemtication',
                status:'ERR'
            })
        }
    });
}

const authUsermiddleWare=(req,res,next)=>{
    const token=req.headers.token.split(' ')[1];
    const userId=req.params.id

    jwt.verify(token, process.env.ACCESS_TOKEN, function (err, user) {
        if(err){
            res.status(500).json(err)
        }
        const {payload}=user;
        if(payload?.isAdmin||payload?.id===userId){
            next()
        }else{
            res.status(500).json({
                message:'The authemtication',
                status:'ERR'
            })
        }
    });
}

module.exports={authMiddleWare,authUsermiddleWare}  