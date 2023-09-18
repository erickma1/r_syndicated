import React from "react";
import Card from "react-bootstrap/Card";
import Headlinestory from "./Headlinestory";
import Subhead from "./Subhead";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "./Sidebar";
import Container from "react-bootstrap/Container";
import Headlinenews from "./sections/Headlinenews";

function Mainpage() {
  return (
    <>
      <Container className="border border-primary">
        <Row>
          <Col sm={5}>
            <Headlinestory />
            {/* <Link
            to="/articles"
            className="btn btn-primary"
            role="button"
          >
            View Article
          </Link> */}
          </Col>
          <Col sm={4}>
            <Headlinenews />
          </Col>
          <Col sm={3}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
      {/* <Card border="border border-white">
        <Card.Body>
          <Headlinestory />
          
     </Card.Body>
     <Row>
      <Col sm={6}><Subhead />     
      </Col>
      <Col sm={6}><Subhead /></Col>
    </Row>
    <Subhead />
      </Card> */}
    </>
  );
}

export default Mainpage;
