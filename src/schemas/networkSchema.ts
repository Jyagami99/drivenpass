import Joi from "joi";
import { CreateNetworkData } from "../types/createNetworkData";

export const networkSchema = Joi.object<CreateNetworkData>({
  title: Joi.string().required(),
  network: Joi.string().required(),
  password: Joi.string().required(),
});
