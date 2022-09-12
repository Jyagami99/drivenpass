import { Network, User } from "@prisma/client";

export type createNetworkData = Omit<Network, "id">;

async function getAllNetworks(userId: number) {}

async function getNetwork(userId: number, networkId: number) {}

async function createNetwork(user: User, network: createNetworkData) {}

async function deleteNetwork(user: User, network: number) {}

const networkService = {
  getAllNetworks,
  getNetwork,
  createNetwork,
  deleteNetwork,
};

export default networkService;