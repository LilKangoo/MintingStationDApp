const SmartContract = artifacts.require("CPC"); // Change this to what your Contract Name is in Solidity

module.exports = function (deployer) {
  deployer.deploy(SmartContract, "CREATIVE PHOTOGRAPHERS CLUB", "CPC", "https://"); //
};
