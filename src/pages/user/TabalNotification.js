import React, { Component } from 'react';

class Tablehistory extends Component {
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.mass}
          </td>  
          <td>
            {this.props.obj.location}
          </td>
          <td>
            {this.props.obj.max_t}
          </td>
          <td>
            {this.props.obj.min_t}
          </td>
          <td>
            {this.props.obj.max_h}
          </td>
          <td>
            {this.props.obj.min_h}
          </td>
          <td>
            {this.props.obj.t}
          </td>
          <td>
            {this.props.obj.h}
          </td>
          <td>
            {this.props.obj.error}
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