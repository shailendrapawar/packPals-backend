const mongoose=require("mongoose")

const authSchema=new mongoose.Schema({
    userName:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    gender:{
        type:String
    },
    phoneNumber:{
        type:Number
    },
    profilePic:{
        type:String
    },
    trips:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"TripModel"
        }
    ],
})

const authModel=mongoose.model("AuthModel",authSchema)
module.exports=authModel;