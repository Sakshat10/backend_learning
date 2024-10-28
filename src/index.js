import dotenv from "dotenv";

import connectDB from "./db/index.js";

dotenv.config({
  path: './.env'
})

connectDB().then(()=>{
  app.lister(process.env.PORT || 8000, ()=>{
    console.log(`server is runnign at ${process.env.PORT}`);
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