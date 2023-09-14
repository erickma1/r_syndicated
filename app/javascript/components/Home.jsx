import React from "react";
import { createRoot } from "react-dom/client";
import { Link } from "react-router-dom";
import Appbar from "./Navbar";
import Mainpage from "./Mainpage";
import Sidebar from "./Sidebar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Welcome = () => {
  return (
    <Container>
        <Appbar />
      
      <Row>
      <Col sm={8}><Mainpage /></Col>
      <Col sm={4}><Sidebar /></Col>
    </Row>
    </Container>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Welcome />, document.getElementById("welcome"));
});

export default Welcome;
