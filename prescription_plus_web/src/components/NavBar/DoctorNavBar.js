import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button, Form } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import { DiJqueryLogo } from "react-icons/di";
import { useNavigate, NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  // window.location.reload(false)
  const navigate = useNavigate()
  const location = useLocation()
  const logout = ()=>{
    localStorage.clear()
    sessionStorage.clear()
    console.log(location.pathname)
    navigate('/doctorhome')
    window.location.reload(false)
    
    
    
  };
  return (
    <>
      <nav className="topnav">
        <NavLink to={`/`} className="logo navLink">
          <DiJqueryLogo className="logo-icon" />
          <div className="logo-text">UniHealth</div>
        </NavLink>
        <div className="search">
          <FiSearch className="search-icon" />
          <div className="search-text">Search Patient</div>
        </div>
        <div className="right">
        <NavLink to={`https://healthplus.flipkart.com/`} target='blank'>
          <button className="right-textItem">Health+</button>
        </NavLink>
        <NavLink to={`https://healthplus.flipkart.com/`} target='blank'>
          <button className="right-textItem">Health+</button>
        </NavLink>
        {/* <NavLink to={`/doctorhome`} > */}
          <button className="right-textItem right-logout" onClick={()=>logout()}>Logout</button>
          {/* </NavLink> */}
        </div>
      </nav>
      {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <h3>Prescription Plus</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="https://healthplus.flipkart.com/" target="_blank">
                FLipkart Health Plus
              </Nav.Link>
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
            <Nav className="justify-content-center">
              <Nav.Link href="/doctorhome">Clinic</Nav.Link>
              <Nav.Link eventKey={2} href="/login">
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </>
  );
};

export default NavBar;
