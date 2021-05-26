const joi = require("joi");

const createValidator = joi.object({
  title: joi.string().required(),
  image: joi.required(),
  ingredient: joi.string().required(),
});

module.exports = {
  createValidator,
};
