const { upgradeProxy } = require('@openzeppelin/truffle-upgrades');

const SimpleStorageV1 = artifacts.require("SimpleStorageV1.sol");
const SimpleStorageV2 = artifacts.require("SimpleStorageV2.sol");

module.exports = async function(deployer) {
    const previous = await SimpleStorageV1.deployed();
    const instance = await upgradeProxy(previous.address, SimpleStorageV2, {deployer});
    console.log("Upgraded", instance.address);
}
