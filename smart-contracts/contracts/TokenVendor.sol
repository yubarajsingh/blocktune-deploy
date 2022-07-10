// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./BlockTuneToken.sol";

contract TokenVendor is BlockTuneToken {
    BlockTuneToken blockTuneToken;
    address public owner;
    address public buyer;

    uint256 public tokenPrice = 10**(18 - 3); //0.001 eth
    event BuyTokens(address buyer, uint256 amountOfETH, uint256 amountOfTokens);
    event PaymentReceived(address sender, uint256 amount);

    constructor() {
        owner = msg.sender;
    }

    function getBalance() public view returns (uint256) {
        uint256 vendorBalance = blockTuneToken.balanceOf(address(owner));
        return vendorBalance;
    }

    function payForToken(address payable _owner) public payable {
        _owner.transfer(msg.value);
    }

    function sellTokens(address _buyer)
        public
        payable
        returns (uint256 tokenAmount)
    {
        uint256 totalPrice = tokenPrice * 100;
        uint256 amountToBuy = 100 * 10**18;

        transfer(_buyer, amountToBuy);

        emit BuyTokens(_buyer, totalPrice, amountToBuy);
        return amountToBuy;
    }
}
