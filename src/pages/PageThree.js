import React from "react";
import { Form } from "react-bootstrap";
import "./style.css";

function PageThree() {
  return (
    <div className="row d-flex justify-content-center page">
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Oyun İconu</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
    </div>
  );
}

export default PageThree;
