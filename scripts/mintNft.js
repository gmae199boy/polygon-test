const hre = require("hardhat");

async function main() {
  const factory = await ethers.getContractFactory("ItemNft");
  const contract = await factory.attach(
    // erc721 contract address
    "0x2b3C9455340FA1B02394f9264Fdda004CB027CB3"
  );

  const nft = await contract.awardItem(
    "0x9EB15CE067b3B41AA684C767d29AE9068E5a5c2D",
    "1"
  );
  console.log(nft);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
