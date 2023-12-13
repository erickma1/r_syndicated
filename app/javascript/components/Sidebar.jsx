import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import News from "./sections/News";
import Frontpicstory from './sections/Frontpicstory'
import Frontpicstory2 from './sections/Frontpicstory2'
import Featured from './sections/Featured'

function Sidebar() {
  return (
    <Card
    style={{
      backgroundColor: '#ffffff',
      backgroundSize: 'cover',
      color: 'black',
      borderRadius: '8px',
      // boxShadow: '5px 5px 5px #aaaaaa',
      border: 0,
    }}
  >
    <Card.Body>
    <Row>
      <Col sm={6} style={{ color: '#ffffff'}}>
        <Frontpicstory />
        <br />
        <Frontpicstory2 />
      </Col>
      <Col sm={6} style={{ color: '#ffffff'}}>
        <News />
      </Col>
    </Row>
    <Featured />
    </Card.Body>
    </Card>
  );
}

export default Sidebar;