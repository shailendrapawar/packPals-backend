const AuthModel = require("../models/authmodel.js");
const bcrypt=require("bcrypt")

class AuthController {
    static login = async (req, res) => {

        const {email,password}=req.body;

        const isUser = await AuthModel.findOne({ email: email })
        if(isUser){
            const isValid=await bcrypt.compareSync(password,isUser.password);
            if(isValid){
                res.json({
                    msg:"authentic User",
                    status:200,
                    id:isUser._id
                })
            }else{
                res.json({
                    msg:"incorrect password",
                    status:400,
                })
            }
        
        }else{
            res.json({
                msg:"user not registered",
                status:400
            })
        }


    }

    static register = async (req, res) => {
        const { name, email, number, password, gender, dob } = req.body;

        const isUser = await AuthModel.findOne({ email: email })
        if (!isUser) {

            const salt=await bcrypt.genSalt(10)
            const hashPass=await bcrypt.hashSync(password,salt)
            console.log(hashPass)

            const newUser=new AuthModel({
                userName:name,
                email:email,
                number:number,
                password:hashPass,
                gender:gender,
            })

            const isCreated=await newUser.save()
            console.log(isCreated)
            res.json({
                msg:"user created",
                status:200
            })
        }else{
            res.json({
                msg:"user already exists",
                status:400
            })
        }
    }


    static changePassword = async (req, res) => {
       

        
    }


}

module.exports = AuthController