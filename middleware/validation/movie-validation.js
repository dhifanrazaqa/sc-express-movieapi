const Joi = require('joi');
const ClientError = require('../../errors/ClientError');

const schema = Joi.object({
  title: Joi.string()
    .min(3)
    .required(),
  genre: Joi.string()
    .required(),
  directorId: Joi.number()
    .required(),
});

const validate = (req, res, next) => {
  try {
    const { error } = schema.validate(req.body);

    if (error) {
      throw new ClientError(error.message);
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = validate;
