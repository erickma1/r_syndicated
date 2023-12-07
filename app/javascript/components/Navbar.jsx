import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'; // Note the change here

const MyNavbar = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#546e7a', color: '#ffffff'}}>
      <Container>
        <Navbar.Brand href="#">SyndicatedNews</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{color: '#ffffff'}}href="#" active>
              Home
            </Nav.Link>
            <Nav.Link style={{color: '#ffffff', fontSize: '13px'}} href="#">Page 1</Nav.Link>
            <Nav.Link style={{color: '#ffffff'}} href="#">Page 2</Nav.Link>
            <Nav.Link style={{color: '#ffffff'}} href="#">Page 3</Nav.Link>
          </Nav>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <Nav className="ms-auto">
            <Nav.Link href="#">
              <i className="bi bi-person" /> Sign Up
            </Nav.Link>
            <Nav.Link href="#">
              <i className="bi bi-box-arrow-in-right" /> Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
