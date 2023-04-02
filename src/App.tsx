import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useStore } from './hooks/useStore';
import { Container, Row, Col } from 'react-bootstrap';



function App() {
 const { fromLanguage, setFromLanguage } = useStore()
  return (
    <Container fluid>
      <h1>Google Transalate</h1>
      <Row>
        <Col>
        <h2>From</h2>
        </Col>
        <Col>
        <button></button>
        </Col>
        <Col>
        <h2>to</h2>
        </Col>
      </Row>
      <button onClick={()=>{
        setFromLanguage('esdsdsdsd')
      }}>Cambiar a Español</button>
      {fromLanguage}
    </Container>
  )
}

export default App
