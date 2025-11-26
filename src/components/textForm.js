import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

export default function TextForm(props) {

  const handelUpClick = () =>{
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handelOnChange = (event) => {
    setText(event.target.value);
  }

  const clearText = () => {
    setText ("");
  }

  const [text, setText] = useState("Enter text here ");

  return (
    <Form>
      <Form.Group className="m-3 fs-5" controlId="massage">
        <Form.Label>{props.massage} </Form.Label>
        <Form.Control as="textarea" value={text} onChange={handelOnChange} rows={5} />

        <Button variant="primary" className="mt-3" onClick={handelUpClick}>Convert to UpperCase</Button>

        <Button variant="primary" className="mt-3 mx-3" onClick={clearText} >Clear</Button>
      </Form.Group>
    </Form>
  );
}
