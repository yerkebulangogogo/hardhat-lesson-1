// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract erc721tokenBU is ERC721, ERC721URIStorage, Ownable {
    event Mint(address to, uint256 amount);
    uint256 private tokenCounter;

    constructor() ERC721("BUToken", "BUT") {
      _mint(msg.sender, 0);
      _setTokenURI(0, 'ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/12');
    }

    function mint(
      address _to,
      string calldata _URI
    ) external {
      tokenCounter += 1;
      _mint(_to, tokenCounter);
      _setTokenURI(tokenCounter, _URI);
    }

    function _burn(uint256 tokenId) internal virtual override(ERC721URIStorage, ERC721) {
      _burn(tokenId);
    }

    function tokenURI(uint256 tokenId) public view virtual override(ERC721, ERC721URIStorage) returns (string memory) {
      tokenURI(tokenId);
    }

}
