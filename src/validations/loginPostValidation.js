const Joi = require("joi");

module.exports = Joi.object({
    login: 
    Joi.string()
    .min(4)
    .max(20)
    .trim()
    .pattern(/^[A-Za-z][A-Za-z0-9_]{4,29}$/)
    .required(),

    password: 
     Joi.string()
    .min(8)
    .max(30)
    .trim()
    .pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
)   .required()
})