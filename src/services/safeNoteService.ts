import { SafeNote, User } from "@prisma/client";
import { CreateSafeNoteData } from "../types/createSafeNoteData";

// export type CreateSafeNoteData = Omit<SafeNote, "id">;

async function getAllSafeNotes(userId: number) {}

async function getSafeNote(userId: number, safeNoteId: number) {}

async function createSafeNote(user: User, safeNote: CreateSafeNoteData) {}

async function deleteSafeNote(user: User, safeNoteId: number) {}

const safeNoteService = {
  getAllSafeNotes,
  getSafeNote,
  createSafeNote,
  deleteSafeNote,
};

export default safeNoteService;
