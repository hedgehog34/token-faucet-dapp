import Alert from 'react-bootstrap/Alert'

const Message = ({ balance, onClose }) => (
  <Alert
    variant='info'
    style={{ marginTop: '20px' }}
    onClose={onClose}
    dismissible>
    balance : {balance}
  </Alert>
)

export default Message