import React from "react";
import Card from "react-bootstrap/Card";
import Headlinestory from "./Headlinestory";
import Subhead from "./Subhead";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Mainpage() {
  return (
    <>
      <Card border="border border-white">
        <Card.Body>
          <Headlinestory />
          <Subhead />
     </Card.Body>
     {/* <Row>
      <Col sm={6}><Subhead />     
      </Col>
      <Col sm={6}><Subhead /></Col>
    </Row> */}
    
      </Card>
      </>
  );
}

export default Mainpage;