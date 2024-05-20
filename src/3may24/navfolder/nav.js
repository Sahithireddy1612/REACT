import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Mynav() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
         
          <Nav className="me-auto">
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Navbar.Brand href="#home">Features</Navbar.Brand>
            <Navbar.Brand href="#home">Pricing</Navbar.Brand>
          </Nav>
        </Container>
      </Navbar>
      <br></br>
    </>
  );
}

export default Mynav;