// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.17;

contract TestContract {
  event NewYear(uint256 newYear);
  uint256 public getYear = 2023;

  function setYear(uint256 _year) external {
    require(_year != 0, "TestContract: ERROR_ZERO_AMOUNT");
    getYear = _year;
    emit NewYear(_year);
  }
}