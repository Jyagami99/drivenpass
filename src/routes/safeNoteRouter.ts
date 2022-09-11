import { Router } from "express";
import {
  createSafeNote,
  deleteSafeNote,
  getAllSafeNotes,
  getSafeNote,
} from "../controllers/safeNoteController";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { safeNoteSchema } from "../schemas/safeNoteSchema";

const router = Router();

router.get("/safenotes", getAllSafeNotes);
router.get("/safenotes/:id", getSafeNote);
router.post(
  "/safenotes",
  validateSchemaMiddleware(safeNoteSchema),
  createSafeNote
);
router.delete("/safenotes/:id", deleteSafeNote);

export default router;
