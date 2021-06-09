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
    </div>
  );
}

export default PageTwo;
