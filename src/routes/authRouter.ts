import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { userSchema } from "../schemas/userSchema";

const router = Router();

router.post("/signup", validateSchemaMiddleware(userSchema));
router.post("/signin", validateSchemaMiddleware(userSchema));

export default router;
