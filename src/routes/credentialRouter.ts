import { Router } from "express";
import {
  createCredential,
  deleteCredential,
  getAllCredentials,
  getCredentials,
} from "../controllers/credentialController";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { credentialSchema } from "../schemas/credentialSchema";

const router = Router();

router.get("/credentials", getAllCredentials);
router.get("/credentials/:id", getCredentials);
router.post(
  "/credentials",
  validateSchemaMiddleware(credentialSchema),
  createCredential
);
router.delete("/credentials/:id", deleteCredential);

export default router;
