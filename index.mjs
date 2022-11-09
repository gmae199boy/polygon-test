import "dotenv/config";
import { Alchemy, Network } from "alchemy-sdk";

import { Config } from "./src/common/index.mjs";

const settings = {
  apiKey: Config.ALCHEMY.API_KEY,
  network: Network.MATIC_MUMBAI,
};

const alchemy = new Alchemy(settings);

async function main() {
  const latestBlock = await alchemy.core.getBlockNumber();
  console.log("The latest block number is", latestBlock);
}

main();
