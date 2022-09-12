import Joi from "joi";
import { CreateSafeNoteData } from "../types/createSafeNoteData";

export const safeNoteSchema = Joi.object<CreateSafeNoteData>({
  title: Joi.string().max(50).required(),
  note: Joi.string().max(1000).required(),
});
