const { Joi, Segments } = require('celebrate');
const { validateCep: ValidateCepBr } = require('validations-br');

const validateCep = (cep, helpers) => {
  if (!ValidateCepBr(cep)) {
    return helpers.error("any.invalid");
  }

  return cep;
}

const clientJoiSchema = {
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    cep: Joi.string().length(9).custom(validateCep).required()
  })
};

module.exports = clientJoiSchema;
