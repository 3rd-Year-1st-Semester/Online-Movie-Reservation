const express = require("express");
const cors = require("cors");
const bp = require("body-parser");
const mongoose = require("mongoose");
require("dotenv/config");

//Import routes
const theaterRouter = require("./routes.theaters.js");




///////////////////


const app = express();

const  PORT = 8000 || process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL ||"mongodb+srv://admin:admin@online-movie-reservatio.3tpce.mongodb.net/online-movie-reservation?retryWrites=true&w=majority"

app.use(bp.json());
app.use(cors());

mongoose.connect(MONGODB_URL,{
    useNewUrlParser:true
}).then(()=>{
    console.log("MonogoDB connected!!");
}).catch((err)=>{
    console.error(err);
});

//Routes
app.use("/theater",theaterRouter);






//////////////////////////////

app.get("/",(req,res,next)=>{
    res.send("<center><h1>Online movie Reservation Backend API</h1></center>");
    next();
;})

app.listen(PORT,()=>{
    console.log(`Server up and running on port ${PORT}`);
});