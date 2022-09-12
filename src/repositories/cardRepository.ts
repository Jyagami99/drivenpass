import client from "../database/prisma";
import { CreateCardData } from "../types/createCardData";

export async function getAll(userId: number) {
  return client.card.findMany({ where: { userId } });
}

export async function getCard(userId: number, cardId: number) {
  return client.card.findFirst({ where: { userId, id: cardId } });
}

export async function getCardByTitle(userId: number, title: string) {
  return client.card.findFirst({ where: { userId, title } });
}

export async function insertCard(userId: number, card: CreateCardData) {
  return client.card.create({ data: { ...card, userId } });
}

export async function deleteCard(id: number) {
  return client.card.delete({ where: { id } });
}
