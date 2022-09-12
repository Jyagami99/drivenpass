import { User, Card } from "@prisma/client";

export type CreateCardData = Omit<Card, "id">;

async function getAll(userId: number) {}

async function getCard(userId: number, cardId: number) {}

async function createCard(user: User, card: CreateCardData) {}

async function deleteCard(user: User, cardId: number) {}

const cardService = {
  getAll,
  getCard,
  createCard,
  deleteCard,
};

export default cardService;
