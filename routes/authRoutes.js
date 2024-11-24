const express=require("express");
const authRoutes=express.Router()

const AuthController=require("../controllers/authControllers")

authRoutes.post("/login",AuthController.login)
authRoutes.post("/register",AuthController.register)
authRoutes.post("/changePassword",AuthController.changePassword)

authRoutes.get("/getUser/:userId",AuthController.getUser)
module.exports=authRoutes;