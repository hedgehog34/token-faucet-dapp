
import { useState } from 'react';
import { ethers } from 'ethers';

import Button from 'react-bootstrap/Button';
import { ButtonGroup } from 'react-bootstrap';

import Message from './Message'

const Faucet = ({
  tokenContract: { abi },
  tokenAddress,
  tokenTicker,
}) => {
  const [balance, setBalance] = useState()
  const [showBalance, setShowBalance] = useState(false)

  async function getBalance() {
    if (typeof window.ethereum !== 'undefined') {
      const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
      console.log('Account address: ', account);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(tokenAddress, abi, provider);
      const balance = await contract.balanceOf(account);
      console.log('Balance: ', balance.toString());
      setBalance(balance.toString());
      setShowBalance(true);
    }
  }

  async function faucet() {
    if (typeof window.ethereum !== 'undefined') {
      const account = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(tokenAddress, abi, signer);
      contract.faucet(account[0], 1000000);
    }
  }
    return (
      <>
        <ButtonGroup>
          <Button onClick={faucet}>Get Faucet {tokenTicker}</Button>
          <Button onClick={getBalance} variant='warning'>Check My Balance</Button>
        </ButtonGroup>
        
        {showBalance ? <Message balance={balance}/> : null} 
      </>
    )
}

export default Faucet