import { Router } from "express";
import {
  createNetwork,
  deleteNetwork,
  getAllNetworks,
  getNetwork,
} from "../controllers/networkController";
import { ensureAuthenticatedMiddleware } from "../middlewares/authMiddleware";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { networkSchema } from "../schemas/networkSchema";

const router = Router();

router.use(ensureAuthenticatedMiddleware);
router.get("/networks", getAllNetworks);
router.get("/networks/:id", getNetwork);
router.post(
  "/networks",
  validateSchemaMiddleware(networkSchema),
  createNetwork
);
router.delete("/networks/:id", deleteNetwork);

export default router;
