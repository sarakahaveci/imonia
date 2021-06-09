import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

function LastPage() {
    return (
      <div classNme="page" >
        <Form className="column justify-content-center">
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Benzersiz Ad</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Görünen İsim</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Oyun Açıklaması</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Oyun Türü</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Bireysel</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Oyun Durumu</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Açık</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
        <Link to="/">
        </Link>
      </div>
    );
  };
export default LastPage;
