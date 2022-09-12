import client from "../database/prisma";
import { CreateCredentialData } from "../types/createCredentialData";

export async function getAll(userId: number) {
  return client.credential.findMany({ where: { userId } });
}

export async function getCredential(userId: number, credentialId: number) {
  return client.credential.findFirst({
    where: {
      userId,
      id: credentialId,
    },
  });
}

export async function getCredentialByTitle(userId: number, title: string) {
  return client.credential.findFirst({
    where: { userId, title },
  });
}

export async function insertCredential(
  userId: number,
  credential: CreateCredentialData
) {
  return client.credential.create({
    data: { ...credential, userId },
  });
}

export async function deleteCredential(id: number) {
  return client.credential.delete({ where: { id } });
}
