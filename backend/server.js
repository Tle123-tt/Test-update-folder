require("dotenv").config();
const express = require("express");
const cors=require("cors");
const morgan=require("morgan");
const bodyParser=require("body-parser");
const { connectDB } = require("./config/MongoDB.js");
const bookRouter=require("./routes/bookRouter.js");
const userRouter=require("./routes/userRouter.js");

const app = express();
const PORT = process.env.PORT || 5000;
connectDB();

app.use(express.json());
app.use(bodyParser.json({limit:'50mb'}));
app.use(cors());
app.use(morgan("common"));

app.use("/api/",bookRouter);

app.use("/api/",userRouter);

app.listen(PORT, () => {
  console.log(`listen ${PORT}`);
});
