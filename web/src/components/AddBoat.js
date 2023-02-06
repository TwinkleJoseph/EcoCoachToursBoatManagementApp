import React from 'react';
import "../styles/App.css";

const AddBoat = ({ data,index,deleteBoat }) => {    
   
    return (
        <div key={data.id} style={{ marginBottom: 8, padding: 8, backgroundColor: '#f2f2f2' }}>
            <h4>{data.vesselName}</h4>
            <p>{data.portOfRegistration}</p>
            <button onClick={() => deleteBoat(index)}>Delete</button>
      </div>
    );
};

export default AddBoat;