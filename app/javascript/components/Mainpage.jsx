import React from 'react';
import Card from 'react-bootstrap/Card';
import Headlinestory from './Headlinestory';
import Subhead from './Subhead';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from './Sidebar';
import Container from 'react-bootstrap/Container';
import Headlinetabs from './Headlinetabs';

function Mainpage() {
  return (
    <Container className="">
      <Row>
        <Col
          sm={6}
          style={{
            backgroundColor: '#eeeeee',
            color: '#ffffff',
            padding: '25px 15px 25px 10px',
          }}
        >
          <Headlinestory />
          <Headlinetabs />
         
        </Col>
        <Col
          sm={6}
          style={{
            backgroundColor: '#eeeeee',
            color: '#ffffff',
            padding: '25px 10px 25px 0',
          }}
        >
          <Sidebar />
        </Col>
      </Row>
      <div style={{ backgroundColor: '#eeeeee', color: '#black' }}>
        Footer stating cats are CUTE little animals
      </div>
    </Container>
  );
}

export default Mainpage;
