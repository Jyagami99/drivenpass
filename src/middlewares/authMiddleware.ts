import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { unauthorizedError } from "../utils/errorUtils";
import authService from "../services/userService";

export async function ensureAuthenticatedMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  dotenv.config();

  const authorization = req.headers["authorization"];
  if (!authorization) throw unauthorizedError("Header Authorization não encontrado!");

  const token = authorization.replace("Bearer ", "");
  if (!token) throw unauthorizedError("Token não encontrado!");

  try {
    const JWT_SECRET = String(process.env.JWT_SECRET);
    const { userId } = jwt.verify(token, JWT_SECRET) as unknown as { userId: number };
    const user = await authService.findUserById(userId);
    res.locals.user = user;
    next();
  } catch {
    throw unauthorizedError("Token invalido!");
  }
}
