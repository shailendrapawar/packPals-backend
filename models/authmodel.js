const mongoose=require("mongoose")

const authSchema=new mongoose.Schema({
    userName:{
        type:String,
        trim: true,
    },
    email:{
        type:String,
        
    },
    password:{
        type:String,
        
    },
    role: {
        type: String,
        // enum: ["user", "admin"],  Define roles for authorization
        default: "user",
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
},{
    timestamps:true
})

const authModel=mongoose.model("AuthModel",authSchema)
module.exports=authModel;