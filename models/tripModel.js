const mongoose =require("mongoose")

const tripSchema=new mongoose.Schema({
    tripTitle:{
        type:String
    },
    tripDesc:{
        type:String
    },
    tripDestination:{
        type:String
    },
    tripHost:{
        type:mongoose.Schema.Types.ObjectId
    },
    tripMembers:[{
        type:mongoose.Schema.Types.ObjectId,    
        ref:"AuthModel"
    }],
    tripImage:[{
        type:String
    }],
    tripStatus:{
        type:Boolean,
        default:true
    },
    tripStart:{
        type:Date
    },
    tripEnd:{
        type:Date
    }

})

const tripModel=mongoose.model("TripModel",tripSchema);

module.exports=tripModel;