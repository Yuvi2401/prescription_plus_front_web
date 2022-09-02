import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button,Form } from 'react-bootstrap';

const NavBar = () =>{
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/"><h3>Prescription Plus</h3></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">FLipkart Health Plus</Nav.Link>
          <Nav.Link href="#pricing">Profile</Nav.Link>
        </Nav>
        <p className="text-center mt-4 mb-4" />
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav className='justify-content-center'>
          <Nav.Link href="/doctorhome">Clinic</Nav.Link>
          <Nav.Link eventKey={2} href="/login">
            Logout
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavBar;
