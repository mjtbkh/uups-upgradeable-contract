const SimpleStorageV1 = artifacts.require("SimpleStorageV1");
const { deployProxy } = require("@openzeppelin/truffle-upgrades");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("SimpleStorageV1", function (accounts) {
	let instance;
	beforeEach(async () => {
		instance = await deployProxy(SimpleStorageV1, [], { kind: 'uups' });
	});

	it("should assert true", async function () {
		return assert.isTrue(instance.address !== null);
	});

	it("Should set X to 5 and return 5", async function () {
		await instance.set(5);
		let value = await instance.get();
		return assert.isTrue(value == 5);
	});
});
