import React, { useState, useEffect  } from 'react';
import "../styles/App.css";
import Boat from './Boat';

const SwimLane = ({ status }) => {
    
    const [boats, setBoats] = useState([]); 
    useEffect(() => {
      const url = "http://localhost:8000/search?status="+status
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          console.log(json);
          setBoats(json.boats)
        } catch (error) {
          console.log("error", error);
        }
      };

      fetchData();
    }, []); 

    const addBoat = (vesselName, portOfRegistration) => {
      setBoats([...boats, { vesselName, portOfRegistration }]);
    };

    const deleteBoat = (index) => {
      setBoats(boats.filter((boat, i) => i !== index));
    };
    return (
      <div id="swimlane" style={{ marginRight: 8 }}>
        <h3>{status}</h3>
        {boats.map((boat,index) => (         
          <Boat 
            key={boat.id} 
            data={boat}
            index={index}
            deleteBoat={deleteBoat}/>
        ))}
        <button onClick={() => addBoat("New Boat", "Victoria")}>
        Add Boat
      </button>
      </div>
    );
};

export default SwimLane;