# Getting Started TKN Faucet Dapp

# Pull repo

```shell
  git clone https://github.com/hedgehog34/token-faucet-dapp.git
  cd token-faucet-dapp
  npm install
```

## Once installed, let's run Hardhat's testing network:

```sh
npx hardhat node
```

## Then, on a new terminal, go to the repository's root folder and run this to deploy your contract:

```sh
npx hardhat run scripts/deploy.js --network localhost
```

## Finally, in the third terminal we can run the frontend with:

```sh
npm start
```
