import React from 'react';
import "../styles/App.css";

/**
 * Abstraction of a Boat (or Card)
 * Each Boat will have a unique entry in the 
 * swimlane. When status is updated, boat can be 
 * moved to a different swimlane.
 * Boat could be deleted by clicking on the Delete button.
 */
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