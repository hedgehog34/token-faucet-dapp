import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Media, ListGroup } from 'react-bootstrap'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import FCTToken from './artifacts/contracts/FCTToken.sol/FCTToken.json'
import TokenInfo from './artifacts/FCTToken.info.json'

import Faucet from "./components/Faucet"
import TokenSend from "./components/TokenSend"
import { CopySVGIcon } from "./components/CopySVGIcon"

function App() {
  const [userAddress, setUserAddress] = useState(null);
  const Token = FCTToken;

  useEffect(() => {
    const getUserAddress = async () => {
      if (typeof window.ethereum !== 'undefined') {
        const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setUserAddress(account);
      }
    }

    getUserAddress();
  }, [userAddress]);

  const {
    tokenName,
    tokenTicker,
    tokenAddress,
  } = TokenInfo;

  return (
    <div className="App">
      <Container>
        <Row>
          <Col sm={12}>
            <Media>
              <img
                className="mr-3"
                src="https://ethereum.org/static/810eb64d89629231aa4d8c7fe5f20ee5/e1953/developers-eth-blocks.png"
                alt="TKN Faucet"
              />
              <Media.Body>
                <h5>{tokenName} - {tokenTicker}</h5>
                <p>
                  You're interacting with Ethereum based token - <b>{tokenName}</b>, created by Robert Jezyk for testing purposes.<br/>
                  Token is deployed to <a href="https://ropsten.etherscan.io/">Ropsten network</a>
                </p>
                <ListGroup style={{ marginBottom: '20px' }}>
                  <ListGroup.Item>
                    Token Address: {tokenAddress}
                    <CopySVGIcon onClick={() => navigator.clipboard.writeText(tokenAddress)} />
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a
                      href={`https://ropsten.etherscan.io/token/${tokenAddress}`}
                      rel="noreferrer"
                      target="_blank">
                      Token on Ropsten Network
                    </a>
                  </ListGroup.Item>
                  {userAddress && (
                    <ListGroup.Item>
                      Your Wallet Address: {userAddress}
                      <CopySVGIcon onClick={() => navigator.clipboard.writeText(userAddress)} />
                    </ListGroup.Item>
                  )}
                </ListGroup>
              </Media.Body>
            </Media>
          </Col>

          <Col sm={6}>
            <Card style={{ height: '100%' }}>
              <Card.Header as="img" variant="top" src="https://ethereum.org/static/7b8c3db96ea013467daa121f64e48136/f4094/hero.png" />
              <Card.Body>
                <Card.Title>Send {tokenTicker} to an address</Card.Title>
                <TokenSend
                  tokenContract={Token}
                  tokenAddress={tokenAddress}
                  tokenTicker={tokenTicker}
                  tokenName={tokenName} />
              </Card.Body>
            </Card>
          </Col>

          <Col sm={6}>
            <Card style={{ height: '100%' }}>
              <Card.Header as="img" variant="top" src="https://ethereum.org/static/b050fcb17ca6da83f35a1e747ac746cc/f4094/hero-dark.png" />
              <Card.Body>
                <Card.Title>Receive faucet ERC20 to your wallet</Card.Title>
                <Faucet
                  tokenContract={Token}
                  tokenAddress={tokenAddress}
                  tokenTicker={tokenTicker}
                  tokenName={tokenName} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
