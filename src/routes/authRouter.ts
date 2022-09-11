import { Router } from "express";
import { signIn, signUp } from "../controllers/authController";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { userSchema } from "../schemas/userSchema";

const router = Router();

router.post("/signup", validateSchemaMiddleware(userSchema), signUp);
router.post("/signin", validateSchemaMiddleware(userSchema), signIn);

export default router;
