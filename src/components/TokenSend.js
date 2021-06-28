import { useState } from 'react';
import { ethers } from 'ethers';
import isEmpty from 'lodash.isempty';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const TokenSend = ({ tokenContract: { abi }, tokenAddress, tokenTicker }) => {
  const [userAccount, setUserAccount] = useState()
  const [amount, setAmount] = useState()
  const [okToSend, setOkToSend] = useState(false)

  // request access to the user's MetaMask account
  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  async function sendCoins() {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(tokenAddress, abi, signer);
      const transaction = await contract.transfer(userAccount, amount);
      await transaction.wait();
      console.log(`${amount} Coins successfully sent to ${userAccount}`);
    }
  }

  return (
      <Form>
        <Form.Group controlId="formBasicPayee">
          <Form.Label>Enter Payee 0x address</Form.Label>
          <Form.Control onChange={e => setUserAccount(e.target.value)} type="text" placeholder="Enter 0x address" />
        </Form.Group>

        <Form.Group controlId="formBasicAmount">
          <Form.Label>Enter amount of to transfer</Form.Label>
          <Form.Control onChange={e => setAmount(e.target.value)} type="number" placeholder="Enter amount" />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check 
            type="checkbox"
            onChange={() => setOkToSend(!okToSend)}
            label={`Happy to send ${amount || 0} ${tokenTicker}`}
          />
        </Form.Group>

        <Button onClick={sendCoins} variant='success' disabled={!okToSend || isEmpty(amount) || isEmpty(userAccount)}>Send</Button>
      </Form>
  )
}

export default TokenSend