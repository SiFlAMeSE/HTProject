import React, { Component } from 'react';
import moment from 'moment';

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
          {moment(this.props.obj.date).format('MMMM Do YYYY, h:mm:ss a')}
        </td>
      </tr>
    );
  }
}

export default Tablehistory;