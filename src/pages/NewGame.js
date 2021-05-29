import React from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NewGame() {
  return (
    <div>
      <form>
        <label>
          Benzersiz Ad:
          <input type="text" name="name" />
        </label>{" "}
        <br />
        <label>
          Görünen İsim:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Oyun Açıklaması:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Oyun Türü:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Bireysel:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Oyun Durumu:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Açık:
          <input type="text" name="name" />
        </label>
        <br />
        <Link to="/StepTwo">
          <Button className="button" variant="outline-secondary">
            İ L E R İ
          </Button>{" "}
        </Link>
      </form>
    </div>
  );
}

export default NewGame;
