const TripModel=require("../models/tripModel")
const images=require("../assets/images")
const members=[

]
class TripController{

    static createTrip=async(req,res)=>{
        
        const {title,desc,destination,host,start,end}=req.body

        const newTrip=new TripModel({
            tripTitle:title,
            tripDesc:desc,

            tripDestination:destination,
            tripHost:host,

            tripMembers:members,
            tripImage:images,

            tripStart:start,
            tripEnd:end
    
        })

        const isCreated=await newTrip.save()

    }

    static updateTrip=async(req,res)=>{

    }

}


module.exports=TripController;