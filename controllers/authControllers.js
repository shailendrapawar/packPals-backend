const AuthModel = require("../models/authmodel.js");
const bcrypt = require("bcrypt")

class AuthController {


    //==============for login =======================================
    static login = async (req, res) => {
        const { email, password } = req.body;
        const isUser = await AuthModel.findOne({ email: email })
        if (isUser) {
            const isValid = await bcrypt.compareSync(password, isUser.password);
            if (isValid) {
                res.json({
                    msg: "authentic User",
                    status: 200,
                    id: isUser._id
                })
            } else {
                res.json({
                    msg: "incorrect password",
                    status: 400,
                })
            }

        } else {
            res.json({
                msg: "user not registered",
                status: 400
            })
        }

    }



    //============= for registeration================================
    static register = async (req, res) => {
        const { name, email, number, password, gender, dob } = req.body;

        const isUser = await AuthModel.findOne({ email: email })
        if (!isUser) {
            const salt = await bcrypt.genSalt(10)
            const hashPass = await bcrypt.hashSync(password, salt)
            console.log(hashPass)

            const newUser = new AuthModel({
                userName: name,
                email: email,
                number: number,
                password: hashPass,
                gender: gender,
                dob: dob
            })
            const isCreated = await newUser.save()
            console.log(isCreated)
            res.json({
                msg: "user created",
                status: 200
            })
        } else {
            res.json({
                msg: "user already exists",
                status: 400
            })
        }
    }




    //==========for changing the password -========================================
    static changePassword = async (req, res) => {
        const { email, newPassword, oldPassword } = req.body;
        const isUser = await AuthModel.findOne({ email: email })

        if (isUser) {
            const storedPassword = isUser.password;
            const isMatch = await bcrypt.compare(oldPassword, storedPassword);

            if (isMatch) {
                const salt = await bcrypt.genSalt(10);
                const newHashPass = await bcrypt.hashSync(newPassword, salt)

                // saving in DB
                const isSaved = await AuthModel.findOneAndUpdate({ email: email }, {
                    $set: { password: newHashPass }
                })

                if (isSaved) {
                    res.json({
                        msg: "password changed",
                        status: 200
                    })
                } else {
                    res.json({
                        msg: "password not changed",
                        status: 400
                    })
                }
            } else {
                res.json({
                    msg: "wrong credentials",
                    status: 400
                })
            }
        } else {
            res.json({
                msg: "user dosent exist",
                status: 400
            })
        }

    }



    // =======for getting user info========================

    static getUser = async (req, res) => {
        const { userId } = req.params
        
        const isUser = await AuthModel.findById({ _id:userId }).populate({path:"PostModel",strictPopulate: false })
        if (isUser) {
            res.json({
                msg: "user exists",
                status: 200,
                user: isUser
            })
        } else {
            res.json({
                msg: "user dosent exist",
                status: 400
            })
        }
    }

}

module.exports = AuthController