import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar () {
    return (
    <Container>
      <Navbar bg="dark" variant="dark" className='navbar'>
      <Container>
        <Navbar.Brand as={NavLink} to="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/experience">About</Nav.Link>
            <Nav.Link as={NavLink} to="/projects">Projects</Nav.Link>
          </Nav>
          <div className='socials'>
           <a href='https://github.com/lavenderfi'><img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt='github logo'/></a> 
           <a href='https://www.linkedin.com/in/fiona-murray-58b206157'><img src='https://cdn-icons-png.flaticon.com/512/174/174857.png' alt='linked-in logo'/></a> 
        </div>
      </Container>
    </Navbar>
</Container>
    )
}