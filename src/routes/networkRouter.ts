import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { networkSchema } from "../schemas/networkSchema";

const router = Router();

router.get("/networks");
router.get("/networks/:id");
router.post("/networks", validateSchemaMiddleware(networkSchema));
router.delete("/networks/:id");

export default router;
