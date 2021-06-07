import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";
function NewGame() {
  const [steps, setSteps] = useState([
    {
      key: "firstStep",
      label: "My First Step",
      isDone: true,
      component: firstStep,
    },  
  ]);
  const [activeStep, setActiveStep] = useState(steps[0]);
  
  const index = steps.findIndex((x) => x.key === activeStep.key);
  setSteps((prevStep) =>
    prevStep.map((x) => {
      if (x.key === activeStep.key) x.isDone = true;
      return x;
    })
  );
 
  const firstStep = () => {
    return (
      <div>
        <div className="box">
          <div className="steps">
            <ul className="nav">
              {steps.map((step, i) => {
                return (
                  <li
                    key={i}
                    className={`${
                      activeStep.key === step.key ? "active" : ""
                    } ${step.isDone ? "done" : ""}`}
                  >
                    <div>
                      Step {i + 1}
                      <br />
                      <span>{step.label}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="step-component">{activeStep.component()}</div>
          <div className="btn-component">
            <input
              type="button"
              value="Back"
              onClick={handleBack}
              disabled={steps[0].key === activeStep.key}
            />
            <input
              type="button"
              value={
                steps[steps.length - 1].key !== activeStep.key
                  ? "Next"
                  : "Submit"
              }
              onClick={handleNext}
            />
          </div>
        </div>
        <Form className="column justify-content-center page">
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
        <Link to="/PageTwo">
          <Button className="button" variant="outline-secondary">
            İ L E R İ
          </Button>{" "}
        </Link>
      </div>
    );  
  

  const handleNext = () => {
    if (steps[steps.length - 1].key === activeStep.key) {
      alert("You have completed all steps.");
    }

    setActiveStep(steps[index + 1]);
  };

  const handleBack = () => {
    const index = steps.findIndex((x) => x.key === activeStep.key);
    if (index === 0) return;

    setSteps((prevStep) =>
      prevStep.map((x) => {
        if (x.key === activeStep.key) x.isDone = false;
        return x;
      })
    );
    setActiveStep(steps[index - 1]);
  };

  };
}
export default NewGame;
