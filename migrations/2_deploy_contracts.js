const CandleAuction = artifacts.require("CandleAuction");

module.exports = function (deployer) {
    deployer.deploy(CandleAuction, 3600); // Auction lasts for 1 hour (3600 seconds)
};
