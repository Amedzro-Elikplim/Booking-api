const Joi = require("joi");

const ValidateRegisterInput = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

module.exports = {
    ValidateRegisterInput
}