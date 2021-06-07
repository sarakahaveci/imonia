import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  FormLabel,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

function PageTwo() {
 
  const [steps, setSteps] = useState([
    {
      key: "secondtStep",
      label: "Second Step",
      isDone: true,
      component: secondStep,
    },
  ]);
  const secondStep = () => {
      return <div>Second Component</div>;
    };

    return (
    <div>
      <Form className="row d-flex justify-content-center page">
        <FormGroup controlId="date" bsSize="large">
          <FormLabel>Oluşturulma Tarihi</FormLabel>
          <FormControl type="date" />
        </FormGroup>
        <FormGroup controlId="date" bsSize="large">
          <FormLabel>Bitiş Tarihi</FormLabel>
          <FormControl type="date" />
        </FormGroup>
      </Form>
      <Link to="/PageThree">
        <Button className=" button" variant="outline-secondary">
          İ L E R İ
        </Button>{" "}
      </Link>
    </div>
  );
}

export default PageTwo;
