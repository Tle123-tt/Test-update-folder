const {Productbook,Userdata}=require('../model/webModel');
const userServices=require('../services/userServices');
const jwtServices=require('../services/jwtServices');

const userController={
    getAllUser:async(req,res)=>{
        try {
            // const allUser=await Userdata.find();
            // res.status(200).json(allUser);

            const allUser=await userServices.GetAllUser();
            res.status(200).json(allUser);

        } catch (err) {
            res.status(500).json(err);
        }
    },
    getIdUser:async(req,res)=>{
        try { 
            // const users=await Userdata.findById(req.params.id);
            // res.status(200).json(users)
            const userId=req.params.id

            if(!userId){
                return res.status(200).json({
                    status:'ERR',
                    message:'The userId is required'
                })
            } 

            const users=await userServices.GetIdUser(userId);
            res.status(200).json(users)
        } catch (err) {
            res.status(500).json(err);
        }
    },
    addUser:async(req,res)=>{
        try {
            const newUser=new Userdata(req.body);
            const saveUser=await newUser.save();
            res.status(200).json(saveUser);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    updateUser:async(req,res)=>{
        try {
            // const upUser=await Userdata.findById(req.params.id);
            // await upUser.updateOne({$set:req.body});
            // res.status(200).json("Updated successfully!");

            const userID=req.params.id;
            const data=req.body;
            console.log('User Id',userID);

            if(!userID){
                res.status(200).json({
                    status:'ERR',
                    message:'The userId is reqủied'
                });
            }
            console.log('User id',userID);
            const updateUser=await userServices.UpdateUser(userID,data);
            res.status(200).json(updateUser)
        } catch (err) {
            res.status(500).json(err);
        }
    },
    SigupUser:async(req,res)=>{
        try {
            const {username,email,password,phone}=req.body;
            const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
            const isCheckEmail=reg.test(email);
            if(!username||!email||!password||!phone){
                res.status(200).json({
                    status:'ERR',
                    message:'The input is required'
                });
            }else if(!isCheckEmail){
                res.status(200).json({
                    status:'ERR',
                    message:'The input is email'
                })
            }
            console.log("Check Email",isCheckEmail);
            const singupUser=await userServices.CreateUser(req.body);
            res.status(200).json(singupUser);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    LoginUser:async(req,res)=>{
        try { 
            const {username,email,password,phone}=req.body;
            const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
            const isCheckEmail=reg.test(email)
            if(!username||!email||!password||!phone){
                res.status(200).json({
                    status:'ERR',
                    message:'The input is required'
                });
            }else if(!isCheckEmail){
                res.status(200).json({
                    status:'ERR',
                    message:'The input is email'
                })
            }
            const singupUser=await userServices.LoginUser(req.body);
            res.status(200).json(singupUser);
        } catch (err) {
            res.status(500).json(err)
        }
    },
    DeleteUser:async(req,res)=>{
        try {
            const userID=req.params.id;

            if(!userID){
                res.status(200).json({
                    status:'ERR',
                    message:'The userId is requried'
                });
            }
             
            const deletedUser=await userServices.DeletedUser(userID);
            res.status(200).json(deletedUser)

        } catch (err) {
            res.status(500).json(err)
        } 
    },
    RefreshToken:async(req,res)=>{
        try {
            const token=req.headers.token.split(' ')[1];

            if(!token){
                res.status(200).json({
                    status:'ERR',
                    message:'The token is requried'
                });
            }
            const refreshToken=await jwtServices.refreshToken(token);
            res.status(200).json(refreshToken);
        } catch (err) {
            res.status(500).json(err)
        }
    }
}

const userControllerss={
    
}


module.exports={userController}