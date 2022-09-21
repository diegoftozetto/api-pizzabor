const { Joi, Segments } = require('celebrate');

const productJoiSchema = {
  [Segments.BODY]: Joi.object().keys({
    url: Joi.string(),
    name: Joi.string().required(),
    categorie: Joi.string().required(),
    price: Joi.string().required(),
    description: Joi.string().required()
  })
};

module.exports = productJoiSchema;
