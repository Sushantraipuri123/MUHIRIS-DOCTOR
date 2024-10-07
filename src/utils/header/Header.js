"use client"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
function Header() {
  return (
    <Navbar expand="lg" className="bg-theme navbar-container ">
      <Container>
        <Navbar.Brand href="#home" className='brand open-sans'> <span className="text-blue logo-1">Muhiris</span> <span className="text-black logo-2">Doctor</span> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav-container">
            <Nav.Link href="#home" className='nav-links'>Home</Nav.Link>
            <Nav.Link href="#link" className='nav-links'>Specialties</Nav.Link>
            <Nav.Link href="#link" className='nav-links'>Doctors</Nav.Link>
            <Nav.Link href="#link" className='nav-links'>OPO</Nav.Link>
            <Nav.Link href="#link" className='nav-links'>Login</Nav.Link>   
          </Nav>
          <div>
            <button className='btn-navbar inter mt-sm-3 mt-md-0 mt-md-0'> Book Now</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;