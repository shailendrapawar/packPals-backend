const mongoose=require("mongoose");

const postSchema=new mongoose.Schema({
    postTitle:{
        type:"String"
    },
    postDesc:{
        type:"String",
        
    },
    tripDestination:{
        type:String
    },
    postLike:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"AuthModel"
    }],
    postImage:{
        type:String
    },
    postRef:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"TripModel"
    }
},{
    timestamps:true
})

const postModel=mongoose.model("PostModel",postSchema)
module.exports=postModel;