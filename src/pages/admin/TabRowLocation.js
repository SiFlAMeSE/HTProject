import React, { Component } from 'react';

class TabRowLocation extends Component {
  render() {
    return (
        <tr>
          <td>
            {this.props.obj._id}
          </td>
          <td>
            {this.props.obj.Name_Lo}
          </td>
          <td>
            {this.props.obj.Address}
          </td>
          <td>
            {this.props.obj.date}
          </td>
        </tr>
    );
  }
}

export default TabRowLocation;