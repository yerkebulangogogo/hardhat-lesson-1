const fs = require('fs');
const { url } = require('inspector');
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

function mnemonic (){
  try {
    return fs.readFileSync('./mnemonic.txt').toString().trim();
  } catch(e){
    console.log("SOMETHING GONE WRONG", e);
  }
}


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
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
    hardhat: {
      forking: {
        url: process.env.ALCHEMY_GOERLI_PROVIDER,
        blockNumber: 8542437
      }
    },
    goerli: {
      url: process.env.ALCHEMY_GOERLI_PROVIDER,
      accounts: {
        mnemonic: mnemonic()
      }
    }
  }
}

