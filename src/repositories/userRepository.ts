import client from "../database/prisma";
// import { CreateUserData } from "./../services/userService";
import { CreateUserData } from "../types/createUserData";

export async function findById(id: number) {
  return client.user.findUnique({ where: { id } });
}

export async function findUserByEmail(email: string) {
  return client.user.findUnique({ where: { email } });
}

export async function insertUser(user: CreateUserData) {
  return client.user.create({ data: user });
}
