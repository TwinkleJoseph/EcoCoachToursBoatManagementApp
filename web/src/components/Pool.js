import React, { useState } from 'react';
import SwimLane from './SwimLane'

const initialData = [
  { id: 1, status: 'Docked', boats: [{ id: 1, name: 'Boat 1' }, { id: 2, name: 'Boat 2' }] },
  { id: 2, status: 'Outbound to Sea', boats: [{ id: 3, name: 'Boat 3' }] },
  { id: 3, status: 'Inbound to Harbor', boats: [{ id: 4, name: 'Boat 4' }] },
  { id: 4, status: 'Maintenance', boats: [{ id: 5, name: 'Boat 5' }] }

];

const Pool = () => {
    const [data, setData] = useState(initialData);  
    return (
      <div style={{ display: 'flex' }}>
        {data.map(lane => (
          <SwimLane key={lane.id} status={lane.status} boats={lane.boats} />
        ))}
      </div>
    );

}

export default Pool;