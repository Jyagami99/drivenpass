import client from "../database/prisma";
import { CreateNetworkData } from "../types/createNetworkData";

export async function getAll(userId: number) {
  return client.network.findMany({ where: { userId } });
}

export async function getNetwork(userId: number, networkId: number) {
  return client.network.findFirst({ where: { userId, id: networkId } });
}

export async function insertNetwork(
  userId: number,
  network: CreateNetworkData
) {
  return client.network.create({ data: { ...network, userId } });
}

export async function deleteNetwork(id: number) {
  return client.network.delete({ where: { id } });
}
