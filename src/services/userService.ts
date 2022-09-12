import dotenv from "dotenv";
import bcrypt from "bcrypt";
// import { User } from "@prisma/client";
import { CreateUserData } from "../types/createUserData";
import * as userRepository from "../repositories/userRepository";
import {
  conflictError,
  notFoundError,
  unauthorizedError,
} from "../utils/errorUtils";
import jwt from "jsonwebtoken";

dotenv.config();

// export type CreateUserData = Omit<User, "id">;

async function createUser(user: CreateUserData) {
  const existingUser = await userRepository.findUserByEmail(user.email);
  if (existingUser) throw conflictError("User doesn't exist");

  const SALT = 10;
  const hashedPassword = bcrypt.hashSync(user.password, SALT);
  await userRepository.insertUser({ ...user, password: hashedPassword });
}

async function login(login: CreateUserData) {
  const user = await getUserOrFail(login);
  const token = jwt.sign({ userId: user.id }, String(process.env.JWT_SECRET));
  return token;
}

async function getUserOrFail(login: CreateUserData) {
  const user = await userRepository.findUserByEmail(login.email);
  if (!user) throw unauthorizedError("Invalid credentials");

  const isPasswordValid = bcrypt.compareSync(login.password, user.password);
  if (!isPasswordValid) throw unauthorizedError("Invalid credentials");

  return user;
}

async function findUserById(id: number) {
  const user = await userRepository.findById(id);
  if (!user) throw notFoundError("User not found");

  return user;
}

const authService = {
  createUser,
  login,
  findUserById,
};

export default authService;
