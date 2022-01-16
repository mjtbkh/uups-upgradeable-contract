const { deployProxy } = require('@openzeppelin/truffle-upgrades');
const SimpleStorageV1 = artifacts.require("SimpleStorageV1");

module.exports = async function(deployer) {
	const instance = await deployProxy(SimpleStorageV1, [], {deployer });
  console.log('Deployed', instance.address);
};
