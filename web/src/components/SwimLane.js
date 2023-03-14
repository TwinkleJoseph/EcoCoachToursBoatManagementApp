import React, { useState, useEffect } from "react";
import "../styles/App.css";
import Boat from "./Boat";
import AddBoat from "./AddBoat";
import apiBaseUrl from "../config";

/**
 * Abstraction of a Swimlanes that holds
 * boats. Boats could be added or deleted.
 *  
 */

const SwimLane = ({ status }) => {
  const [boats, setBoats] = useState([]);
  const [showAddBoat, setAddBoat] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {        
        const searchUrl = `${apiBaseUrl}/api/search?status=${status}`;
        const response = await fetch(searchUrl);
        const json = await response.json();
        setBoats(json.boats);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  const addBoat = ({ name, port }) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ vesselName: name, portOfRegistration: port, status }),
    };
    const postUrl = `${apiBaseUrl}/api/boat`
    fetch(postUrl, requestOptions).then((response) => {
      setBoats([...boats, { vesselName: name, portOfRegistration: port, status }]);
    });

    setAddBoat(false);
  };

  const deleteBoat = (boatId) => {
    fetch(`${apiBaseUrl}/api/boat/${boatId}`, { method: "DELETE" }).then(
      () => {
        console.log("boats", boats);
        setBoats(boats.filter((boat, i) => boat.id !== boatId));
      }
    );
  };
  return (
    <div id="swimlane" style={{ marginRight: 8 }}>
      <h3>{status}</h3>
      {boats && boats.map((boat, index) => (
        <Boat
          key={boat.id}
          data={boat}
          index={index}
          deleteBoat={() => deleteBoat(boat.id)}
        />
      ))}
      <button onClick={() => setAddBoat(!showAddBoat)}>Add Boat</button>
      {showAddBoat && <AddBoat idList={Math.random()} onAddBoat={addBoat} />}
    </div>
  );
};

export default SwimLane;
