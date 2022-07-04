// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract BlockTune{
    uint songsCounter;

    struct Song {
        uint songID;
        string songName;
        address payable songArtist; 
        string musicHash; 
    }
    
    mapping(uint => Song) public song;
    constructor() {
        songsCounter = 0;
    }

    function storeSong(string memory _songName,address payable _songArtist,string memory _musicHash) public
        {
            songsCounter++;
            song[songsCounter].songID = songsCounter;
            song[songsCounter].songName = _songName;
            song[songsCounter].songArtist = _songArtist;
            song[songsCounter].musicHash = _musicHash;
        }

    function getSong(uint _songID)public view returns(Song memory){
        return song[_songID];
    }
    
}