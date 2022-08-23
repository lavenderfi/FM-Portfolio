import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar () {
    return (
    <div className='container-fluid'>
      <Navbar bg="dark" expand="lg">
      <Container>
        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link as={NavLink} to="/experience">Experience</Nav.Link>
            <Nav.Link as={NavLink} to="/projects">Projects</Nav.Link>
            <Nav.Link as={NavLink} to="/about">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</div>
    )
}