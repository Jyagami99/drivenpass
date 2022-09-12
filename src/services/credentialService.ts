import { Credential, User } from "@prisma/client";
import * as credencialRepository from "../repositories/credentialRepository";
import { CreateCredentialData } from "../types/createCredentialData";
import { decrypt, encrypt } from "../utils/criptrUtils";

// export type CreateCredentialData = Omit<Credential, "id">;

async function getAllCredentials(userId: number) {
  const credentials = await credencialRepository.getAll(userId);
  return credentials.map((credential) => {
    const { password } = credential;
    return { ...credential, password: decrypt(password) };
  });
}

async function getCredential(userId: number, credentialId: number) {}

async function createCredential(user: User, credential: CreateCredentialData) {}

async function deleteCredential(user: User, credentialId: number) {}

const credentialService = {
  getCredential,
  getAllCredentials,
  createCredential,
  deleteCredential,
};

export default credentialService;
