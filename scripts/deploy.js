const { ethers } = require("hardhat");
// previous 0xd59f0E5f27E61e389F242A0CF2733F84e028d096 deployed address
async function main() {
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so whitelistContract here is a factory for instances of our Whitelist contract.
  */
  const blockTuneContract = await ethers.getContractFactory("BlockTune");

  // here we deploy the contract
  const deployedBlockTuneContract = await blockTuneContract.deploy();
  // 10 is the Maximum number of whitelisted addresses allowed
  
  // Wait for it to finish deploying
  await deployedBlockTuneContract.deployed();

  // print the address of the deployed contract
  console.log(
    "BlockTune Contract Address:",
    deployedBlockTuneContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });