import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import dotenv from "dotenv";

import express from "express";
import connectDB from "./db/index.js";
const app = express();

dotenv.config({
  path: './.env'
})

connectDB();



app.listen(process.env.PORT,()=>{
  console.log("backend is running ")
})





// ;(async ()=> {
//     try{
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        app.on("error", (error)=>{
//          console.log("ERRR: ",error);
//          throw error
//        })

//        app.listen(process.env.PORT, ()=>{
//         console.log(`App is listening at port ${PORT}`);
//        })

//     } 
//     catch(error){
//         console.log("error: ", error)
//         throw err
//     }
// })()