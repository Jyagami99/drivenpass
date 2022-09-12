import { Credential, User } from "@prisma/client";
import * as credencialRepository from "../repositories/credentialRepository";
import { CreateCredentialData } from "../types/createCredentialData";
import { decrypt, encrypt } from "../utils/criptrUtils";
import { notFoundError } from "../utils/errorUtils";

async function getAllCredentials(userId: number) {
  const credentials = await credencialRepository.getAll(userId);
  return credentials.map((credential) => {
    const { password } = credential;
    return { ...credential, password: decrypt(password) };
  });
}

async function getCredential(userId: number, credentialId: number) {
  const credential = await credencialRepository.getCredential(
    userId,
    credentialId
  );
  if (!credential) throw notFoundError("Credential doesn't exist");
  return {
    ...credential,
    password: decrypt(credential.password),
  };
}

async function createCredential(user: User, credential: CreateCredentialData) {
  const existingCredential = await credencialRepository.getCredentialByTitle(
    user.id,
    credential.title
  );
  const credentialPassword = credential.password;
  const credentialInfos = {
    ...credential,
    password: encrypt(credentialPassword),
  };

  await credencialRepository.insertCredential(user.id, credentialInfos);
}

async function deleteCredential(user: User, credentialId: number) {
  await getCredential(user.id, credentialId);
  await credencialRepository.deleteCredential(credentialId);
}

const credentialService = {
  getCredential,
  getAllCredentials,
  createCredential,
  deleteCredential,
};

export default credentialService;
