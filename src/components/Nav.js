import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
  return (
    <Navbar className="navbar">
      <Nav className="me-auto">
       <Nav.Link href="#home" >
          Home
 </Nav.Link> 
        <Nav.Link href="#experience">
          About
</Nav.Link>
     
<Nav.Link href="#projects">
          Projects
 </Nav.Link>
      </Nav>
      <div className="socials">
        <a href="https://github.com/lavenderfi">
          <img src="/github.png" alt="github logo" />
        </a>
        <a href="https://www.linkedin.com/in/fiona-murray-dev/">
          <img src="/linkedin.png" alt="linked-in logo" />
        </a>
      </div>
    </Navbar>
  );
}
