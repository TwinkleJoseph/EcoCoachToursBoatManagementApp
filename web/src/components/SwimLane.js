import React from 'react';
import "../styles/App.css";

const SwimLane = ({ status, boats }) => {
    return (
      <div style={{ marginRight: 8 }}>
        <h3>{status}</h3>
        {boats.map(boat => (
          <div key={boat.id} style={{ marginBottom: 8, padding: 8, backgroundColor: '#f2f2f2' }}>
            {boat.name}
          </div>
        ))}
      </div>
    );
};

export default SwimLane;