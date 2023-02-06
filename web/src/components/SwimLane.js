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
    return (
      <div id="swimlane" style={{ marginRight: 8 }}>
        <h3>{status}</h3>
        {boats.map(boat => (         
          <Boat key={boat.id} data={boat}/>
        ))}
      </div>
    );
};

export default SwimLane;