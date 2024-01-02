import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'; // Note the change here
import '../../assets/stylesheets/application.css';

const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#">Syndicated</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" active>
              Home
            </Nav.Link>
            <Nav.Link href="#">News</Nav.Link>
            <Nav.Link href="#">Politics</Nav.Link>
            <Nav.Link href="#">Business</Nav.Link>
            <Nav.Link href="#">Entertainment</Nav.Link>
            <Nav.Link href="#">Tech</Nav.Link>
            <Nav.Link href="#">Sports</Nav.Link>
            <Nav.Link href="#">World</Nav.Link>
            <Nav.Link href="#">Africa</Nav.Link>
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
