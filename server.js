const express=require("express");
const app=express();
require("dotenv").config();

const dbConnect=require("./configs/DBconfig")
dbConnect();

const cors=require("cors")


// root level routing ================================
const authRoutes=require("./routes/authRoutes")
const tripRoutes=require("./routes/tripRoutes")
const postRoutes=require("./routes/postRoutes")


// environmental variables====================================
const port=process.env.PORT||5000;


//  root-level middlewares=============================
app.use(cors())
app.use(express.json())
app.use("/auth",authRoutes)
app.use("/trip",tripRoutes)
app.use("/post",postRoutes)



app.listen(port,()=>{
    console.log("server running at port :"+port);
})
