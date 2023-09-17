import React from "react";
import Card from "react-bootstrap/Card";


function Sidebar() {
  return (
    <>
    <br />
   <Card border="">
        <Card.Header>Latest Posts</Card.Header>
        <Card.Body>
          {/* <Card.Title>Secondary Element</Card.Title> */}
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}

export default Sidebar;