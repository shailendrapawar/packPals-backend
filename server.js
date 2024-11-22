const express=require("express");
const app=express();
require("dotenv").config();
const dbConnect=require("./configs/DBconfig")
 dbConnect();

const cors=require("cors")

const authRoutes=require("./routes/authRoutes")
const userRoutes=require("./routes/userRoutes");




// environmental variables====================================
const port=process.env.PORT||5000;


//  root-level middlewares================= 
app.use(cors())
app.use(authRoutes)
app.use(userRoutes)


app.listen(port,()=>{
    console.log("server running at port :"+port);
})
