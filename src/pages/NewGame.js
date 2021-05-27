import React from "react";

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
        <input to="secondPage" type="submit" value="  ileri" />
        </form>
    </div>
  );
}

export default NewGame;
