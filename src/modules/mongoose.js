const mongoose = require("mongoose");
const { MONGO_URL } = require("../../config");

require("../models/usersModel")
module.exports = () => {
    mongoose.connect(MONGO_URL, (err) => {
        if(!err) {
            console.log("MongoDB Successfully connected!")
        }else{
            console.log("MongoDB connection error", err)
        }
    })
}