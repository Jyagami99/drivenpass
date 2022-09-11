import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { safeNoteSchema } from "../schemas/safeNoteSchema";

const router = Router();

router.get("/safenotes");
router.get("/safenotes/:id");
router.post("/safenotes", validateSchemaMiddleware(safeNoteSchema));
router.delete("/safenotes/:id");

export default router;
