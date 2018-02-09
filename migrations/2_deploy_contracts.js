// #1 Get an instance of the contract to be deployed/migrated
var Meter = artifacts.require("./Meter.sol");

module.exports = function(deployer) {
  // #2 Deploy the instance of the contract
  deployer.deploy(Meter, 0);
};
