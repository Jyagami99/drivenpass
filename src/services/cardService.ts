import { User } from "@prisma/client";
import { CreateCardData } from "../types/createCardData";
import * as cardRepository from "../repositories/cardRepository";
import { decrypt, encrypt } from "../utils/criptrUtils";
import { conflictError, notFoundError } from "../utils/errorUtils";

async function getAll(userId: number) {
  const cards = await cardRepository.getAll(userId);
  return cards.map((card) => {
    return {
      ...card,
      password: decrypt(card.password),
      securityCode: decrypt(card.securityCode),
    };
  });
}

async function getCard(userId: number, cardId: number) {
  const card = await cardRepository.getCard(userId, cardId);
  if (!card) throw notFoundError("Este cartão não existe!");

  return {
    ...card,
    password: decrypt(card.password),
    securityCode: decrypt(card.securityCode),
  };
}

async function createCard(user: User, card: CreateCardData) {
  const existingCard = await cardRepository.getCardByTitle(user.id, card.title);
  if (existingCard) throw conflictError("Este título já está em uso!");

  const cardInfos: CreateCardData = {
    ...card,
    password: encrypt(card.password),
    securityCode: encrypt(card.securityCode),
  };

  await cardRepository.insertCard(user.id, cardInfos);
}

async function deleteCard(user: User, cardId: number) {
  await getCard(user.id, cardId);
  await cardRepository.deleteCard(cardId);
}

const cardService = {
  getAll,
  getCard,
  createCard,
  deleteCard,
};

export default cardService;
