import './App.css';
import FCTToken from './artifacts/contracts/FCTToken.sol/FCTToken.json'
import TokenInfo from './artifacts/FCTToken.info.json'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Card, Button } from 'react-bootstrap'

import Faucet from "./components/Faucet"
import TokenSend from "./components/TokenSend"

function App() {
  const Token = FCTToken;

  const {
    tokenName,
    tokenTicker,
    tokenAddress,
  } = TokenInfo;

  return (
    <div className="App">
      <Container>
        <Row>
          <Card style={{ width: '31%', margin: '10px' }}>
            <Card.Header as="img" variant="top" src="https://ethereum.org/static/7b8c3db96ea013467daa121f64e48136/f4094/hero.png" />
            <Card.Body>
              <Card.Title>{tokenName} - {tokenTicker}</Card.Title>
              <Card.Text>
                You're interacting with Ethereum based token - <b>{tokenName}</b>, created by Robert Jezyk for testing purposes.<br/>
                Token is deployed to Ropsten under contract address
              </Card.Text>
              <Card.Text style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                <Button
                  variant="link"
                  href={`https://ropsten.etherscan.io/token/${tokenAddress}`}
                  target="_blank">
                  {tokenAddress}
                </Button>
              </Card.Text>
              <Button
                href={`https://ropsten.etherscan.io/token/${tokenAddress}`}
                variant="primary"
                target="_blank">
                Check token on Ropsten
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '31%', margin: '10px' }}>
            <Card.Header as="img" variant="top" src="https://ethereum.org/static/810eb64d89629231aa4d8c7fe5f20ee5/e1953/developers-eth-blocks.png" />
            <Card.Body>
              <Card.Title>Send {tokenTicker} to an address</Card.Title>
              <TokenSend
                tokenContract={Token}
                tokenAddress={tokenAddress}
                tokenTicker={tokenTicker}
                tokenName={tokenName} />
            </Card.Body>
          </Card>

          <Card style={{ width: '31%', margin: '10px' }}>
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
          
        </Row>
      </Container>
    </div>
  );
}

export default App;
