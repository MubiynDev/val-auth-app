const users = require("../models/usersModel")
const { generateHash } = require("../modules/bcrypt") 
const { generateJWT } = require("../modules/jwt") 
const signPostValidation = require("../validations/signPostValidation")


module.exports = async (req, res) => {
    try {
        const {login, password, fullName} = await signPostValidation.validateAsync(req.body);

    const user = await users.findOne({
        login: login.toLowerCase()
    })

    if(user) throw new Error("this login is already exists!")

    const encodedPassword = await generateHash(password)

    const newUser = await users.create({
        login: login.toLowerCase(),
        password: encodedPassword,
        fullName
    })
    

    const token = generateJWT({
        id: newUser._id,
        login: newUser.login,
        fullName: newUser.fullName
    })
    
    res.cookie("token", token).redirect("/profile")
    }

    catch (error) {
        res.render("signup", {
            error
            
        })
    }
}