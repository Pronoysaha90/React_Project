import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });

  const [btnText, setBtnText] = useState("Enable Light Mode");

  const toggleStyle = () => {
    if (myStyle.color === "white") {
      // Currently Dark → Switch to Light
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    } else {
      // Currently Light → Switch to Dark
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText("Enable Light Mode");
    }
  };

  return (
    <div style={myStyle}>
      <Card style={myStyle} className="m-3">
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure quis tempora animi adipisci, labore esse.
          </Card.Text>
          <Button variant="primary">Learn More</Button>
        </Card.Body>
      </Card>

      <Button onClick={toggleStyle} variant="primary" className="m-3">
        {btnText}
      </Button>
    </div>
  );
}
