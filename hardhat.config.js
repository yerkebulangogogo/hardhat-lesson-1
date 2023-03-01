const fs = require('fs');
const { url } = require('inspector');
require("@nomicfoundation/hardhat-toolbox");
require("hardhat-gas-reporter");
require("dotenv").config();

function mnemonic (){
  try {
    return fs.readFileSync('./mnemonic.txt').toString().trim();
  } catch(e){
    console.log("SOMETHING GONE WRONG", e);
  }
}
const defaultNetwork = "hardhat";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork,
  gasReporter: {
    currency: "USD",
    gasPrice: 21,
    enabled: true,
  },
  solidity: {
    compilers: [
      {
        version: "0.8.9",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      {
        version: "0.8.17",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
    ]
  },

  networks: {
    goerli: {
      url: process.env.ALCHEMY_GOERLI_PROVIDER,
      accounts: {
        mnemonic: mnemonic()
      }
    },
    hardhat: {
      forking: {
        url: "https://eth-mainnet.g.alchemy.com/v2/95hTo6bdWg_-bfjTIaWQ2S16P_eRFCHx",
        blockNumber: 14989351
      }
    },
    localhost: {
      url: "http://127.0.0.1:8545"
    }
  }
}

