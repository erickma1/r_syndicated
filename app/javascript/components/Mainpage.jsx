import React from 'react';
import Card from 'react-bootstrap/Card';
import Headlinestory from './Headlinestory';
import Subhead from './Subhead';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from './Sidebar';
import Container from 'react-bootstrap/Container';
import Headlinetabs from './Headlinetabs';
import Headlinenews from './sections/Headlinenews';
import Footer from './sections/Footer';

function Mainpage() {
  return (
    <>
    <Container className="">
      <Row>
        <Col
          sm={6}
          style={{
            color: '#ffffff',
            padding: '25px 0 25px 0',
          }}
        >
          <Headlinestory />
          <Headlinenews />
         
        </Col>
        <Col
          sm={6}
          style={{
            color: '#ffffff',
            padding: '25px 0 25px 0',
          }}
        >
          <Sidebar />
        </Col>
      </Row>
     
    </Container>
    <Footer />
    </>
  );
}

export default Mainpage;
