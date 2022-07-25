const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    login: {
        type: String,
        min: 4,
        max: 20,
        required: true,
        match: /^[A-Za-z][A-Za-z0-9_]{4,29}$/
    },
    password: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    }
    
})

const users = mongoose.model("users", userSchema);
module.exports = users;