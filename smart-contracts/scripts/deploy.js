const {ethers} = require('hardhat');

const main = async() => {
    const vendorFactory = await ethers.getContractFactory('TokenVendor')
    const VendorContract = await vendorFactory.deploy()

    console.log('Deploying Vendor contract...',VendorContract)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.log('Error in  Deploying contract >>', error)
        process.exit(1);
    })