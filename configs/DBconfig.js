const mongoose=require("mongoose")
require("dotenv").config();

const dbConnect=async()=>{

    try{
        const isConnect=await mongoose.connect(process.env.MONGO_URL)
        if(isConnect){
            console.log("DB connected for Pack-Pals")
            return
        }
    }catch(err){
        console.warn("db connection m error h...!!!")
    }finally{
        // await mongoose.disconnect()
    }
}

module.exports=dbConnect;