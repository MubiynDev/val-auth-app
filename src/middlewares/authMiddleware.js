const users = require("../models/usersModel")
const { verifyJWT } = require("../modules/jwt")
module.exports = async (req, res, next) => {
    const token = req.cookies.token

    if(!token) {
        res.redirect("/login")
        return
    }
    const payload = verifyJWT(token)
    if(!payload) {
        res.redirect("/login")
        return
    }
    const user = users.findById(payload.id)
    if(!user) {
        res.redirect("/login")
        return
    }

    req.user = await user;

    next()

}