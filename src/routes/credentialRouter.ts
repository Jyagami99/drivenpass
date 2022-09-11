import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { credentialSchema } from "../schemas/credentialSchema";

const router = Router();

router.get("/credentials");
router.get("/credentials/:id");
router.post("/credentials", validateSchemaMiddleware(credentialSchema));
router.delete("/credentials/:id");

export default router;
