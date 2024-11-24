const express=require("express")
const tripRoutes=express.Router()
const TripController=require("../controllers/tripController")


tripRoutes.post("/trip/createTrip",TripController.createTrip)



module.exports=tripRoutes;