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
  const pageStyles = {
    maxWidth: '1500px', // Set your desired maximum width
    margin: '0 auto',   // Center the content horizontally
    padding: '',     // Add padding for spacing
  };
  return (
    <div style={pageStyles}>
    <Container>
        <Appbar />
      
      <Row>
      <Col sm={12}><Mainpage />
      </Col>
    </Row>
    </Container>
  </div>
    
  );
};

export default Welcome;
