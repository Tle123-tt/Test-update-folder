const { Userdata, Productbook } = require("../model/webModel");
const {genneralAccessToken, genneralfreshToken}=require("./jwtServices");

const userServices = {
  GetAllUser:()=>{
    return new Promise(async(resolve,reject)=>{
      try {
        const allUser=await Userdata.find()

        resolve({
          status:'OK',
          message:'Success',
          data:allUser
        })

      } catch (err) {
        reject(err);
      }
    })
  },
  GetIdUser:(id)=>{
    return new Promise(async(resolve,reject)=>{
      try {
        const user=await Userdata.findOne({
          _id:id
        });
        console.log('Check User',user);

        if(user===null){
          resolve({
            status:'OK',
            message:'The user is not defined'
          })
        }

        resolve({
          status:'OK',
          message:'SUCESS',
          data: user
        })

      } catch (err) {
        reject(err)
      }
    })
  },
  CreateUser: (newUser) => {
    return new Promise(async (resolve, reject) => {
      const { username, email, password, phone
        //, confimPassword 
      } = newUser;
      try {
        const checkUser = await Userdata.findOne({
          email: email,
        });

        if (checkUser !== null) {
          resolve({
            status: "OK",
            message: "The email is already",
          });
        }

        // const hash = bcrypt.hashSync(password, 10);
        // console.log("hash", hash);

        const createUser = await Userdata.create({
          username,
          email,
          // password: hash,
          password,
          phone,
          // confimPassword: hash,
          // confimPassword,
        });

        if (createUser) {
          resolve({
            status: "OK",
            message: "SUCCESS",
            data: createUser,
          });
        }

      } catch (err) {
        reject(err);
      }
    });
  },
  LoginUser: (loginUser) => {
    return new Promise(async (resolve, reject) => {
      const { username, email, password, phone} = loginUser;
      try {
        const checkUser = await Userdata.findOne({
          email: email,
        });

        if (checkUser === null) {
          resolve({
            status: "OK",
            message: "The user is not defiend",
          });
        }

        // const comparePassword = bcrypt.compareSync(
        //   password,
        //   checkUser.password
        // );
        // console.log("Compare Password", comparePassword);

        // if (!comparePassword) {
        //   resolve({
        //     status: "OK",
        //     message: "The password or user in correct",
        //   });
        // }
 
        const access_token=await genneralAccessToken({
          id: checkUser.id,
          isAdmin:checkUser.isAdmin
        })

        const refresh_token=await genneralfreshToken({
          id: checkUser.id,
          isAdmin:checkUser.isAdmin
        })

        resolve({
          status: "OK",
          message: "SUCCESS",
          access_token,
          refresh_token
        });

      } catch (err) {
        reject(err);
      }
    });
  },
  UpdateUser:(id,data)=>{
    return new Promise(async(resolve,reject)=>{
      try {
        const checkUser=await Userdata.findOne({
          _id:id
        });
        console.log('Check User',checkUser);

        if(checkUser===null){
          resolve({
            status:'OK',
            message:'The user is not defined'
          })
        }

        const updateUser=await Userdata.findByIdAndUpdate(id,data,{new:true});
        console.log('Update user',updateUser);

        resolve({
          data:updateUser
        })
      } catch (err) {
        reject(err);
      }
    })
  },
  DeletedUser:(id)=>{
    return new Promise(async(resolve,reject)=>{
      try {
        const checkUser=await Userdata.findOne({
          _id:id
        });
        console.log('Check User',checkUser);

        if(checkUser===null){
          resolve({
            status:'OK',
            message:'The user is not defined'
          })
        }

        await Userdata.findByIdAndDelete(id);  

        resolve({
          status:'OK',
          message:'Delete user success',
        })

      } catch (err) {
        reject(err);
      }
    })
  }
};

module.exports = userServices;
