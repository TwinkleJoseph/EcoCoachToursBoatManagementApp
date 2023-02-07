import React from 'react';
import "../styles/App.css";

const Boat = ({ data,index,deleteBoat }) => {    
   
    return (
        <div key={data.id} className="boat">
            <h4>{data.vesselName}</h4>
            <p>{data.portOfRegistration}</p>
            <button onClick={() => deleteBoat(index)}>Delete</button>
      </div>
    );
};

export default Boat;