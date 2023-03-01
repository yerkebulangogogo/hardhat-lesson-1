// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract erc20tokenBU is ERC20, Ownable {
    event Mint(address to, uint256 amount);

    constructor() ERC20("BUToken", "BUT") {
      _mint(msg.sender, 1000000e18);
    }

    function mint(address _to, uint256 _amount) external {
      _mint(_to, _amount);
    }
}
