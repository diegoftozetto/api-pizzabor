const { Joi, Segments } = require('celebrate');

const clientJoiSchema = {
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    cep: Joi.string().required(),
    address: Joi.string().required(),
    number: Joi.number().required(),
    complement: Joi.string()
  })
};

module.exports = clientJoiSchema;
