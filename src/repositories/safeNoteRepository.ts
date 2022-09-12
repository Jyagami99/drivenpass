import client from "../database/prisma";
import { CreateSafeNoteData } from "../types/createSafeNoteData";

export async function getAll(userId: number) {
  return client.safeNote.findMany({ where: { userId } });
}

export async function getSafeNote(userId: number, safeNoteId: number) {
  return client.safeNote.findFirst({ where: { userId, id: safeNoteId } });
}

export async function getSafeNoteByTitle(userId: number, title: string) {
  return client.safeNote.findFirst({ where: { userId, title } });
}

export async function insertSafeNote(
  userId: number,
  safeNote: CreateSafeNoteData
) {
  return client.safeNote.create({ data: { ...safeNote, userId } });
}

export async function deleteSafeNote(id: number) {
  return client.safeNote.delete({ where: { id } });
}
