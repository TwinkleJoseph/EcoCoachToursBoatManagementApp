import React, { useState, useEffect  } from 'react';
import "../styles/App.css";

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
      <div style={{ marginRight: 8 }}>
        <h3>{status}</h3>
        {boats.map(boat => (
          <div key={boat.id} style={{ marginBottom: 8, padding: 8, backgroundColor: '#f2f2f2' }}>
            {boat.vesselName}
          </div>
        ))}
      </div>
    );
};

export default SwimLane;