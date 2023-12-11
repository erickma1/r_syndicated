import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Headlinenews from "./sections/Headlinenews";

function Headlinetabs() {
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
      <Headlinenews />
    </Card.Body>
    </Card>
  );
}

export default Headlinetabs;