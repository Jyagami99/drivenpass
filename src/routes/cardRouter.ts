import { Router } from "express";
import {
  createCard,
  deleteCard,
  getAllCards,
  getCard,
} from "../controllers/cardController";
import { ensureAuthenticatedMiddleware } from "../middlewares/authMiddleware";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { cardSchema } from "../schemas/cardSchema";

const router = Router();

router.use(ensureAuthenticatedMiddleware);
router.get("/cards", getAllCards);
router.get("/cards/:id", getCard);
router.post("/cards", validateSchemaMiddleware(cardSchema), createCard);
router.delete("/cards/:id", deleteCard);

export default router;
