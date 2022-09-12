import { SafeNote, User } from "@prisma/client";
import { CreateSafeNoteData } from "../types/createSafeNoteData";
import * as safeNoteRepository from "../repositories/safeNoteRepository";
import { conflictError, notFoundError } from "../utils/errorUtils";

async function getAllSafeNotes(userId: number) {
  const safeNote = await safeNoteRepository.getAll(userId);
  return safeNote;
}

async function getSafeNote(userId: number, safeNoteId: number) {
  const safeNote = await safeNoteRepository.getSafeNote(userId, safeNoteId);
  if (!safeNote) throw notFoundError("Safe note doesn't exist");
}

async function createSafeNote(user: User, safeNote: CreateSafeNoteData) {
  const existingCredential = await safeNoteRepository.getSafeNoteByTitle(
    user.id,
    safeNote.title
  );
  if (existingCredential) throw conflictError("title already in use");

  await safeNoteRepository.insertSafeNote(user.id, safeNote);
}

async function deleteSafeNote(user: User, safeNoteId: number) {
  await getSafeNote(user.id, safeNoteId);
  await safeNoteRepository.deleteSafeNote(safeNoteId);
}

const safeNoteService = {
  getAllSafeNotes,
  getSafeNote,
  createSafeNote,
  deleteSafeNote,
};

export default safeNoteService;
