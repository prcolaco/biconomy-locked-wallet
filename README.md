# biconomy-locked-wallet test app

Really simple untested and unoptimized test app for Biconomy mexa. Use at your own risk... :)

1. Check `.env.sample`, copy to your `.env` and substitute the needed configs

2. Install dependencies with `npm i` or `yarn`

3. Build the contract with `npx hardhat compile`

4. Edit the networks for your desired one `hardhat.config.js` and deployment script `scripts/deploy.js` if you want a receiver different from deployer

5. Deploy the contract to supported testnet with `npx hardhat run --network <NETWORK> scripts/deploy.js`

6. Place the deployed wallet contract address in the `.env` file and start your react frontend with `npm start` or `yarn start`

7. Play time! :) Check console for more info...
