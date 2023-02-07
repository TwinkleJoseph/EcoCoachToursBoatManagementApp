import React, { useState, useEffect } from "react";
import "../styles/App.css";
import Boat from "./Boat";
import AddBoat from "./AddBoat";


const baseUrl = "http://localhost:8000";


const SwimLane = ({ status }) => {
  const [boats, setBoats] = useState([]);
  const [showAddBoat, setAddBoat] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {        
        const searchUrl = `${baseUrl}/search?status=${status}`;
        const response = await fetch(searchUrl);
        const json = await response.json();
        setBoats(json.boats);
        //setBoats(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  const addBoat = ({ name, port }) => {
    // setBoats([...boats, { vesselName: name, portOfRegistration: port }]);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ vesselName: name, portOfRegistration: port, status }),
    };
    const postUrl = `${baseUrl}/boat`
    fetch(postUrl, requestOptions).then((response) => {
      // setBoats(response.json()); // if full response from server
      // setBoats([...boats, response]); // if only one data from server
      // setBoats([...boats, ...response]);
      setBoats([...boats, { vesselName: name, portOfRegistration: port, status }]);
    });

    setAddBoat(false);
  };

  const deleteBoat = (boatId) => {
    fetch(`${baseUrl}/boat/${boatId}`, { method: "DELETE" }).then(
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
