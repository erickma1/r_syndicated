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

function Mainpage() {
  return (
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
      <div style={{ backgroundColor: '#eeeeee', color: '#black' }}>
        Footer stating cats are CUTE little animals
      </div>
    </Container>
  );
}

export default Mainpage;
