// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.17;

contract Calculate {
  
  address public admin;

  constructor(address _admin) {
    require(_admin != address(0), "Calculate: ZERO_ADDRESS");
    admin = _admin;
  }

  function add(uint256 a, uint256 b) external pure returns(uint256) {
    return a + b;
  }

  function min(uint256 a, uint256 b) external pure returns(uint256) {
    return a - b;
  }

  function div(uint256 a, uint256 b) external pure returns(uint256) {
    return a / b;
  }
  
  function mul(uint256 a, uint256 b) external view returns(uint256) {
    require(msg.sender == admin, "Calculate: ONLY_ADMIN");
    return a*b;
  }

  function transferOwnership(address _to) external {
    require(admin == msg.sender, "Calculate: ONLY_OWNER");
    require(_to != address(0), "Calculate: ZERO_ADDRESS");
    admin = _to;
  }
}