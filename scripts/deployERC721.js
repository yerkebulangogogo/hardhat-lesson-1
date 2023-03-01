const hardhat = require("hardhat");

async function main() {
  const Lock = await hardhat.ethers.getContractFactory("erc721tokenBU");
  const lock = await Lock.deploy();
  await lock.deployed();
  console.log(lock);
  console.log(`deployed to ${lock.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});