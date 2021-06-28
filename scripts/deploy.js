const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  const tokenName = process.env.REACT_APP_DEPLOYED_TOKEN_NAME;
  const tokenTicker = process.env.REACT_APP_DEPLOYED_TOKEN_TICKER;

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );

  const FCTToken = await hre.ethers.getContractFactory(tokenName);
  const fctToken = await FCTToken.deploy(tokenName, tokenTicker);

  await fctToken.deployed();

  const tokenInfo = {
    tokenName,
    tokenTicker,
    tokenAddress: fctToken.address
  }

  await fs.writeFileSync(`./src/artifacts/${tokenName}.info.json`, JSON.stringify(tokenInfo), function (err) {
    if (err) throw err;
  });

  console.log("Token deployed to:", fctToken.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });