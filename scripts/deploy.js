const hre = require("hardhat");

async function main() {
  const erc721 = await hre.ethers.getContractFactory("ItemNft");
  const erc721Contract = await erc721.deploy();

  await erc721Contract.deployed();
  console.log("Contract deployed to address:", erc721Contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
