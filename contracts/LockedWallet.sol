// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;


import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "hardhat/console.sol";

import "./BasicMetaTransaction.sol";


contract LockedWallet is BasicMetaTransaction {

  address public receiver;
  uint256 public unlocked;

  constructor(address _receiver, uint256 _lock) payable {
    console.log("Deploying a LockedWallet for '%s' locked for %i seconds", _receiver, _lock);
    receiver = _receiver;
    unlocked = block.timestamp + _lock;
  }

  receive() external payable { }

  modifier onlyReceiver {
    // require(msg.sender == receiver, "only receiver can do this");
    require(msgSender() == receiver, "only receiver can do this");
    _;
  }

  modifier onlyUnlocked {
    require(block.timestamp >= unlocked, "wallet locked");
    _;
  }

  function claim() onlyReceiver onlyUnlocked public {
    uint256 balance = address(this).balance;
    console.log("Claiming ETH balance of %i", balance);
    payable(receiver).transfer(balance);
  }

  function claimToken(address _token) onlyReceiver onlyUnlocked public {
    require(_token != address(0), "must supply an ERC20 token contract address");

    ERC20 token = ERC20(_token);
    uint256 balance = token.balanceOf(address(this));
    console.log("Claiming balance of %i %s token", balance, token.symbol());
    token.transfer(receiver, balance);
  }
}
