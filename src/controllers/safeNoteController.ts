import { Request, Response } from "express";
import safeNoteService from "../services/safeNoteService";

export async function getAllSafeNotes(req: Request, res: Response) {
  const { user } = res.locals;
  const safeNotes = await safeNoteService.getAllSafeNotes(user.id);
  res.send(safeNotes).status(200);
}

export async function getSafeNote(req: Request, res: Response) {
  const { user } = res.locals;
  const safeNoteId = parseInt(req.params.id);
  if (isNaN(safeNoteId)) {
    res.sendStatus(422);
  }

  const safeNote = await safeNoteService.getSafeNote(user.id, safeNoteId);
  res.send(safeNote).status(200);
}

export async function createSafeNote(req: Request, res: Response) {
  const { user } = res.locals;
  const credential = req.body;

  await safeNoteService.createSafeNote(user, credential);
  res.sendStatus(201);
}

export async function deleteSafeNote(req: Request, res: Response) {
  const safeNoteId = parseInt(req.params.id);
  if (isNaN(safeNoteId)) {
    res.sendStatus(422);
  }

  const { user } = res.locals;
  await safeNoteService.deleteSafeNote(user, safeNoteId);
  res.sendStatus(200);
}
