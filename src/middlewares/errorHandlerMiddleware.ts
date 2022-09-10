import { NextFunction, Request, Response } from "express";

export default function errorHandler(
  error: {
    type: string;
    message: string;
  },
  req: Request,
  res: Response,
  next: NextFunction
) {}
