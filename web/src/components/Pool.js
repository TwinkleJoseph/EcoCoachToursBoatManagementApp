import React, { useState  } from 'react';
import SwimLane from './SwimLane'

/**
 * Abstraction of a Pool that holds
 * various swimlanes. useState function 
 * is used here to initialize the Pool state.
 * Swimlanes are added to the Pool with the initial data set (hard
 * coded for now). 
 * 
 */

const initialData = [
  { id: 1, status: 'Docked' },
  { id: 2, status: 'Outbound to Sea' },
  { id: 3, status: 'Inbound to Harbor' },
  { id: 4, status: 'Maintenance' }

];

const Pool = () => {
    
    const [data, setData] = useState(initialData);  
    return (
      <div style={{ display: 'flex' }}>
        {data.map(lane => (
          <SwimLane key={lane.id} status={lane.status}/>
        ))}
      </div>
    );

}

export default Pool;