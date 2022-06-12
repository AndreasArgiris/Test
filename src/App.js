import 'bootstrap/dist/css/bootstrap.min.css'
import './app.scss'
import {Container,Row,Col} from "react-bootstrap"
function App() {
  return (
    <div className="App">
      <Container fluid="xl" className='app-container border border-primary'>
        <Row>
          <h1 className='text-center'>MARINA SATTI XYN</h1>
        </Row>
        <Row className='mb-3'>
          <Col sm={6} className='border border-primary'>
            <h1 className='mt-2'>Magico</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est blanditiis nulla iure explicabo deserunt ipsum sed! Optio in alias ipsa, quasi, animi voluptatibus distinctio, aut necessitatibus dolor aliquid ex? Tenetur minus ipsa enim deleniti, porro maiores earum, quasi voluptate dolorem quidem atque natus tempore quo, dolor cum. Officia, quisquam veritatis.</p>
          </Col>
          <Col sm={6} className='border border-primary'>rude 1
          </Col>
        </Row>
         <Row>
          <Col sm={4} className='border border-danger'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est blanditiis nulla iure explicabo deserunt ipsum sed! Optio in alias ipsa, quasi, animi voluptatibus distinctio, aut necessitatibus dolor aliquid ex? Tenetur minus ipsa enim deleniti, porro maiores earum, quasi voluptate dolorem quidem atque natus tempore quo, dolor cum. Officia, quisquam veritatis.</p>
          </Col>
          <Col sm={4} className='border border-primary ms-auto'>rude 1
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
