import React, { useState, useEffect  } from 'react';
import "../styles/App.css";

const Boat = ({ data }) => {    
   
    return (
        <div key={data.id} style={{ marginBottom: 8, padding: 8, backgroundColor: '#f2f2f2' }}>
            <h4>{data.vesselName}</h4>
            <p>{data.portOfRegistration}</p>
      </div>
    );
};

export default Boat;