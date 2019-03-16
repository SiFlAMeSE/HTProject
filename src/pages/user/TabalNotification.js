import React, { Component } from 'react';
import moment from 'moment';

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
          <td style={{ color: 'Red' }}>
            {this.props.obj.error}
          </td>
          <td>
            {this.props.obj.mac}
          </td>
          <td>
            {moment(this.props.obj.date).format('MMMM Do YYYY, h:mm:ss a')}
          </td>
        </tr>
    );
  }
}

export default Tablehistory;