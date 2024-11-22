const mongoose=require("mongoose");



const postSchema=new mongoose.Schema({
    postTitle:{
        type:"String"
    },
    postDesc:{
        type:"String",
        default:""
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
})

const postModel=mongoose.model("PostModel",postSchema)
module.exports=postModel;