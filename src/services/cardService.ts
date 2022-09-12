import { User } from "@prisma/client";
import { CreateCardData } from "../types/createCardData";

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
