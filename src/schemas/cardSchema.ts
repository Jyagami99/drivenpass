import Joi from "joi";

export const cardSchema = Joi.object({
  title: Joi.string().required(),
  number: Joi.string().required(),
  cardHolderName: Joi.string().required(),
  securityCode: Joi.string().max(3),
  expirationDate: Joi.string().required(),
  password: Joi.string().required(),
  isVirtual: Joi.boolean().required(),
  type: Joi.string().required(),
});
