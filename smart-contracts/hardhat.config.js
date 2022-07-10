require("@nomiclabs/hardhat-waffle");
require('dotenv').config({ path: '.env' })

const BINANCE_API_URL = process.env.BINANCE_API_URL
const PRIVATE_KEYS = process.env.PRIVATE_KEYS

module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {
    },
    binance: {
      url: BINANCE_API_URL,
      accounts: [PRIVATE_KEYS]
    }
  },
};
