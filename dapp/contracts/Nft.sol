// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./@openzeppelin/contracts/utils/Counters.sol";
import "./@openzeppelin/contracts/access/Ownable.sol";
import "./@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract BlockTuneNFT is ERC721URIStorage, Ownable{
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIds;

    event NFTMinted(
        address indexed by,
        string title,
        uint256 id
    );

    struct Song {
		address composer;
		string title;
	}
    constructor() ERC721("BtNFT", "BTN") {}

    mapping(uint256 => Song) public songs;

     function mintNewSongNFT(string memory _title, string memory tokenURI)
        public
        onlyOwner
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        songs[newItemId] = Song({
            composer: msg.sender,
            title: _title
        });
        emit NFTMinted(msg.sender,_title,newItemId);
        return newItemId;
    }
}