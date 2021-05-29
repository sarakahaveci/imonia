import React from "react";
import { Button, Form,FormGroup,FormLabel,FormControl} from "react-bootstrap";
import { Link } from "react-router-dom";

function PageTwo() {
  return (
    <div>
      <Form>
        <FormGroup controlId="date" bsSize="large">
          <FormLabel>Oluşturulma Tarihi</FormLabel>
          <FormControl type="date" />
        </FormGroup>
        <FormGroup controlId="date" bsSize="large">
          <FormLabel>Bitiş Tarihi</FormLabel>
          <FormControl type="date" />
        </FormGroup>
      </Form>
      <Link to="/PageTwo">
        <Button className="button" variant="outline-secondary">
          İ L E R İ
        </Button>{" "}
      </Link>
    </div>
  );
}

export default PageTwo;
