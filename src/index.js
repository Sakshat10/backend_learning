import dotenv from "dotenv";
import {app} from "./app.js"
import connectDB from "./db/index.js";

dotenv.config({
  path: './.env'
})

connectDB().then(()=>{
  app.listen(process.env.PORT || 4000, ()=>{
    console.log(`server is running at ${process.env.PORT}`);
  });
}).catch((err)=>{
  console.log("MONGODB connection failed", err);
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