const joi = require("joi");

const registerValidator = joi.object({
  fullName: joi.string().required(),
  userName: joi.string().required(),
  location: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required().min(5),
});

const loginValidator = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required().min(5),
});

module.exports = {
  registerValidator,
  loginValidator,
};
