import React, { Component } from "react";
import { connect } from "react-redux";

const data = [
    { id: 1, name: 'Endless Summer', status: 'Docked' },
    { id: 2, name: 'Amazing Grace', status: 'Outbound to Sea' },
    { id: 3, name: 'Blue Miracle', status: 'Inbound to Harbor' },
    { id: 3, name: 'Below Deck', status: 'Maintenance' }
  ];

class SwimLane extends Component {  

  state = {
    addingList: false
  };

    render() {        
        const { swimlane } = this.props;    
        return (
            <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Boat Name</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      }

}

const mapStateToProps = state => ({ swimlane: state.swimlane });
export default connect(mapStateToProps)(SwimLane);