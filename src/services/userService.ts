import { User } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();

export type CreateUserData = Omit<User, "id">;

async function createUser(user: CreateUserData) {}

async function login(login: CreateUserData) {}

async function getUserOrFail(login: CreateUserData) {}

async function findUserById(id: number) {}

const authService = {
  createUser,
  login,
  findUserById,
};

export default authService;
