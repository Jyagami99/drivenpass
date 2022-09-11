import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { cardSchema } from "../schemas/cardSchema";

const router = Router();

router.get("/cards");
router.get("/cards/:id");
router.post("/cards", validateSchemaMiddleware(cardSchema));
router.delete("/cards/:id");

export default router;
