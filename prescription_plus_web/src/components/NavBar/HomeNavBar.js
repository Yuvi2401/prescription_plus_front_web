// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Button,Form } from 'react-bootstrap';

// const NavBar = () =>{
//   return (
//     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//     <Container>
//       <Navbar.Brand href="/"><h3>UniHealth</h3></Navbar.Brand>
//       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//       <Navbar.Collapse id="responsive-navbar-nav">
//         <Nav className="me-auto">
//           <Nav.Link href="https://healthplus.flipkart.com/" target="_blank">FLipkart Health Plus</Nav.Link>
//           <Nav.Link href="#pricing">Lab Test</Nav.Link>
//         </Nav>
//         <p className="text-center mt-4 mb-4" />
//         <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             />
//             <Button variant="outline-success">Search</Button>
//           </Form>
//           <Nav className='justify-content-center'>
//           <Nav.Link href="/doctorhome">Doctor Home Page</Nav.Link>
//           <Nav.Link eventKey={2} href="/login_register">
//             Login/Register Doctor
//           </Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Container>
//   </Navbar>
//   );
// }

// export default NavBar;


import React from 'react';
import './HomeNavBar.css'; // make sure to create a corresponding CSS file

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
     
          <div className="logo-text">UniHealth</div>
      </div>
      <div className="navbar-links">
        <a href="/appointments" className="navbar-link">Book an appointment</a>
        <a href="/doctors" className="navbar-link">Doctor</a>
        <a href="/clinics" className="navbar-link">Clinic</a>
      </div>
      <div className="navbar-auth">
        <button className="btn btn-signup">Sign up</button>
        <button className="btn btn-login">Log in</button>
      </div>
    </nav>
  );
};

export default NavBar;

