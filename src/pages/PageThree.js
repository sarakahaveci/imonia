import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

function PageThree() {
  const [steps, setSteps] = useState([
    {
      key: "thirdStep",
      label: "My Third Step",
      isDone: false,
      component: thirdStep,
    },
  ]);
  const thirdStep = () => {
    return (
      <div className="row d-flex justify-content-center page">
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Oyun İconu</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Link to="/LastPage">
          <Button className="button" variant="outline-secondary">
            İ L E R İ
          </Button>{" "}
        </Link>
      </div>
    );
  };
}

export default PageThree;
