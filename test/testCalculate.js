const { ethers } = require('hardhat');
const { use, expect } = require('chai');
const routerAbi = require("./../abi/UniswapRouterV2Abi.json");
// const { solidity } = require('ethereum-waffle');

// use(solidity);

describe("testForCalculate", () => {
  
  let calculateContract;
  let accounts;

  it('testForCalculate: should deploy contract', async() => {
    accounts= await ethers.getSigners();

    calculateContract = await ethers.getContractFactory("Calculate");
    calculateContract= await calculateContract.connect(accounts[0]).deploy(accounts[0].address);
    expect(calculateContract.deployed);
    expect(await calculateContract.admin()).to.equal(accounts[0].address);
  })

  it('testForCalculate: should add', async() => {
    expect(await calculateContract.add(5, 5)).to.equal(10);
    expect(await calculateContract.add(5, 6)).to.equal(11);
    expect(await calculateContract.add(5, 7)).to.equal(12);
    expect(await calculateContract.add(5, 8)).to.equal(13);
  })

  it('testForCalculate: should min', async() => {
    expect(await calculateContract.min(5, 5)).to.equal(0);
    expect(await calculateContract.min(5, 4)).to.equal(1);
    expect(await calculateContract.min(5, 3)).to.equal(2);
    expect(await calculateContract.min(5, 1)).to.equal(4);
  })

  it('testForCalculate: should min reverted', async() => {
    expect(await calculateContract.min(5, 5)).to.reverted;
  })

  it('testForCalculate: should revert with exception: Calculate: ONLY_ADMIN', async() => {
    await expect(calculateContract.connect(accounts[1]).mul(5, 5))
      .to
      .be
      .revertedWith('Calculate: ONLY_ADMIN');
  })

  it('testForCalculate: should min', async() => {
    await calculateContract.connect(accounts[0]).transferOwnership(accounts[1].address);
    expect(await calculateContract.admin()).to.equal(accounts[1].address);
  })

  it("Implementation uniswap router to get price pair of USDC/USDT", async () => {
    const uniswapRouterV2 = new ethers.Contract(
      "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
      routerAbi,
      accounts[0]
    );
    const pairUsdcUsdt = [
      "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", 
      "0xdAC17F958D2ee523a2206206994597C13D831ec7"
    ];
  })


})