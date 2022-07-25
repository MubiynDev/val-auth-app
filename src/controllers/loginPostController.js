const users = require("../models/usersModel")
const { generateJWT } = require("../modules/jwt") 
const { compareHash } = require("../modules/bcrypt")
const loginPostValidation = require("../validations/loginPostValidation")

module.exports = async (req, res) => {
   try{
    const {login, password} = await loginPostValidation.validateAsync(req.body);    

    const user = await users.findOne({
        login: login.toLowerCase(),
    })
   
    if(!user) throw new Error("this login is already exists!")


    const isPasswordTrue = await compareHash(password, user.password)
    

    if(!isPasswordTrue) throw new Error("Uncorrect Password or Login!")
    

    

    const token = generateJWT({
        id: user._id,
        login: user.login,
        fullName: user.fullName
    })

    res.cookie("token", token).redirect("/profile")
   }


   catch(error) {
    console.log(error)
    res.render("login", {
        error
    })
   }

}