const mongoose = require("mongoose");
const bcrypt= require("bcrypt");

const bookModel = new mongoose.Schema({
  idbook: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "bookdta",
  },
  name: {
    type: String,
    require: true,
  },
  slug: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  price: { 
    type: Number,
    require: true,
  },
  soluong: {
    type: Number,
    require: true,
  },
  rating: {
    type: Number,
    require: true,
  },
  page: {
    type: Number,
    require: true,
  },
});

const orderModel=new mongoose.Schema({
  oderItems:[
    {
      name:{
        type:String,
        required:true
      },amount:{
        type:Number,
        require:true
      },image:{
        type:String,
        require:true
      },price:{
        type:Number,
        require:true
      },product:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Product',
        require:true,
      },
    },
  ],shippingAddress:{
    fullName:{
      type:String,
      require:true
    },address:{
      type:String,
      require:true
    },city:{
      type:String,
      require:true
    },country:{
      type:String,
      require:true
    },phone:{
      type:Number,
      require:true
    }
  },paymenMethod:{
    type:String,
    require:true
  },itemsPrice:{
    type:Number,
    require:true
  },shippingPrice:{
    type:Number,
    require:true
  },taxPrice:{
    type:Number,
    require:true
  },toalPrice:{
    type:Number,
    require:true
  },user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    require:true
  },isPaid:{
    type:Boolean,
    default:false
  },paiAt:{
    type:Date
  },isDelivered:{
    type:Boolean,
    default:false
  },deliveredAt:{
    type:Date
  }
})

const userModel = new mongoose.Schema({
  iduser: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "userdata",
  },
  username: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  // confimPassword:{
  //   type: String,
  //   require: true,
  // },
  isAdmin: {
    type: Boolean,
    default: false,
    require: true,
  },
  access_token: {
    type: String,
    require: true,
  },
  refresh_token: {
    type: String,
    require: true,
  },
});

userModel.pre('save',async function(){
  this.password=await bcrypt.hash(this.password,12);
});

const Productbook = mongoose.model("bookdata", bookModel);
const Orderdata=mongoose.model("orderdata", orderModel);
const Userdata=mongoose.model("userdata", userModel);

module.exports={Productbook,Userdata,Orderdata};