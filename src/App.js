import './App.css';
import { useState } from 'react';
import { ethers } from 'ethers'
import {Biconomy} from "@biconomy/mexa";
import abi from "ethereumjs-abi";
import {toBuffer} from "ethereumjs-util";

import LockedWallet from './artifacts/contracts/LockedWallet.sol/LockedWallet.json'
import ERC20 from './artifacts/@openzeppelin/contracts/token/ERC20/ERC20.sol/ERC20.json'


function App() {
  const [walletAddress, setWalletAddress] = useState(process.env.REACT_APP_WALLET);
  const [tokenContract, setTokenContract] = useState('0');
  const [amount, setAmount] = useState();
  var account = '';

  async function requestAccount() {
    [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  async function getBalance() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      let balance;
      if (tokenContract === '0') {
        balance = await provider.getBalance(walletAddress);
      } else {
        const contract = new ethers.Contract(tokenContract, ERC20.abi, provider);
        balance = await contract.balanceOf(walletAddress);
      }
      console.log("Balance: ", balance.toString());
    }
  }
  
  async function sendCoins() {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const value = ethers.utils.parseEther(amount);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      try {
        let transaction;
        if (tokenContract === '0') {
          transaction = await signer.sendTransaction({
            to: walletAddress,
            value
          });
        } else {
          const contract = new ethers.Contract(tokenContract, ERC20.abi, signer);
          transaction = await contract.transfer(walletAddress, value);
        }
        await transaction.wait();
        console.log(`${amount} tokens successfully sent to ${walletAddress}`);
      }
      catch (err) {
        console.log('Error:', err);
      }
    }
  }
    
  // async function claim() {
  //   if (typeof window.ethereum !== 'undefined') {
  //     await requestAccount();
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     const signer = provider.getSigner();
  //     const contract = new ethers.Contract(walletAddress, LockedWallet.abi, signer);

  //     try {
  //       let transaction;
  //       if (tokenContract === '0') {
  //         transaction = await contract.claim();
  //       } else {
  //         console.log(tokenContract);
  //         transaction = await contract.claimToken(tokenContract);
  //       }
  //       await transaction.wait();
  //       console.log('Successfully claimed tokens from wallet');
  //     }
  //     catch (err) {
  //       console.log('Error:', err);
  //     }
  //   }
  // }  

  async function claim() {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const biconomy = new Biconomy(provider, {apiKey: process.env.REACT_APP_BICONOMY, debug: true});
      // const biconomyProvider = new ethers.providers.Web3Provider(biconomy);
      const contract = new ethers.Contract(walletAddress, LockedWallet.abi, biconomy.getSignerByAddress(account));
      const contractInterface = new ethers.utils.Interface(LockedWallet.abi);


      let nonce = await contract.getNonce(account); //BigNumber
      try {
        let functionSignature;
        if (tokenContract === '0') {
          functionSignature = contractInterface.encodeFunctionData("claim", []);
        } else {
          functionSignature = contractInterface.encodeFunctionData("claimToken", [tokenContract]);
        }

        let messageToSign = constructMetaTransactionMessage(nonce.toNumber(), window.ethereum.chainId, functionSignature, process.env.REACT_APP_WALLET);             
        const signature = await signer.signMessage(messageToSign);
        let { r, s, v } = getSignatureParameters(signature);
        let transaction = contract.executeMetaTransaction(account, functionSignature, r, s, v);

        await transaction.wait();
        console.log('Successfully claimed tokens from wallet');
      }
      catch (err) {
        console.log('Error:', err);
      }
    }
  }  

  //////////
  /**helpers**/

  const getSignatureParameters = signature => {
    if (!ethers.utils.isHexString(signature)) {
        throw new Error(
            'Given value "'.concat(signature, '" is not a valid hex string.')
        );
    }
    var r = signature.slice(0, 66);
    var s = "0x".concat(signature.slice(66, 130));
    var v = "0x".concat(signature.slice(130, 132));
    v = ethers.BigNumber.from(v).toNumber();
    if (![27, 28].includes(v)) v += 27;
    return {
        r: r,
        s: s,
        v: v
    };
  };             

  const constructMetaTransactionMessage = (nonce, salt, functionSignature, contractAddress) => {
    return abi.soliditySHA3(
        ["uint256","address","uint256","bytes"],
        [nonce, contractAddress, salt, toBuffer(functionSignature)]
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <input onChange={e => setWalletAddress(e.target.value)} placeholder="Wallet contract address" value={walletAddress} type="text" />
        <button onClick={getBalance}>Get Balance</button>

        <br />
        <select onChange={e => setTokenContract(e.target.value)} defaultValue={tokenContract}>
          <option value="0">ETH</option>
          <option value="0xfab46e002bbf0b4509813474841e0716e6730136">FAU</option>
          <option value="0x20fe562d797a42dcb3399062ae9546cd06f63280">LINK</option>
        </select>

        <br />
        <input onChange={e => setAmount(e.target.value)} placeholder="Amount" />
        <button onClick={sendCoins}>Send</button>

        <br />
        <button onClick={claim}>Claim</button>
      </header>
    </div>
  );
}

export default App;
