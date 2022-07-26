const { ethers } = require("hardhat");

async function main() {
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so whitelistContract here is a factory for instances of our Whitelist contract.
  */
  const vendorContract = await ethers.getContractFactory("TokenVendor");

  // here we deploy the contract
  const deployedVendorContract = await vendorContract.deploy();
  // 10 is the Maximum number of whitelisted addresses allowed
  
  // Wait for it to finish deploying
  await deployedVendorContract.deployed();

  // print the address of the deployed contract
  console.log(
    "Vendor Contract Address:",
    deployedVendorContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  // 0xb4C1E752Fa8a5E7637eD414cd7dd5199DC6f0262