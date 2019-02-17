import React, { Component } from 'react';

class Tablehistory extends Component {
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.t}
          </td>
          <td>
            {this.props.obj.h}
          </td>
          <td>
            {this.props.obj.mac}
          </td>
          <td>
            {this.props.obj.date}
          </td>
        </tr>
    );
  }
}

export default Tablehistory;