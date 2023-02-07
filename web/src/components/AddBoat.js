import React, { useState } from "react";
import "../styles/App.css";


const AddBoat = ({ id, onAddBoat }) => {
  const [boatName, setBoatName] = useState("");
  const [port, setPort] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddBoat({ name: boatName, port, id });
    setBoatName("");
  };

  return (
    <div className="boat">
      <form onSubmit={handleSubmit}>
        <h4>
          {" "}
          <input
            type="text"
            value={boatName}
            onChange={(e) => setBoatName(e.target.value)}
            placeholder="Enter vessel name"
          />
        </h4>
        <p>
          {" "}
          <textarea
            value={port}
            onChange={(e) => setPort(e.target.value)}
            placeholder="Port of Registration"
          ></textarea>
        </p>
        <button type="submit">Add Boat</button>
      </form>
    </div>
  );
};

export default AddBoat;
