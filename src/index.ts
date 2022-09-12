import express, { json } from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";

import errorHandler from "./middlewares/errorHandlerMiddleware";

import authRouter from "./routes/authRouter";
import cardRouter from "./routes/cardRouter";
import credentialRouter from "./routes/credentialRouter";
import networkRouter from "./routes/networkRouter";
import safeNoteRouter from "./routes/safeNoteRouter";

async function main() {
  dotenv.config();

  const app = express();

  app.use(cors());
  app.use(json());
  
  app.use(authRouter);
  app.use(cardRouter);
  app.use(credentialRouter);
  app.use(networkRouter);
  app.use(safeNoteRouter);
  
  app.use(errorHandler);
  
  const PORT: number = Number(process.env.PORT || 3333);
  app.listen(PORT, () => {
    console.log(`O servidor subiu na porta ${PORT}.`);
  });
}
main().catch(console.error);
