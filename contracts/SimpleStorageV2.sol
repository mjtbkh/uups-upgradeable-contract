// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import '@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol';
import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol';

contract SimpleStorageV2 is Initializable, OwnableUpgradeable, UUPSUpgradeable {

  function initialize() initializer public {
          __Ownable_init();
          __UUPSUpgradeable_init();
  }

  function _authorizeUpgrade(address newImplementation)
  internal
  onlyOwner
  override {}

  int64 private X;      // private variable to store the value

  function set(int64 input) public onlyOwner {
          X = input;
  }

  function get() public view onlyOwner returns (int64) {
          return X;
  }

  function negate() public onlyOwner {
	  set(-X);
  }

}
