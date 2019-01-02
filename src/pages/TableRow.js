import React, { Component } from 'react';

class TableRow extends Component {
  render() {
    return (
        <tr>
          <td>
            {this.props.obj._id}
          </td>
          <td>
            {this.props.obj.User_g}
          </td>
          <td>
            {this.props.obj.Password}
          </td>
          <td>
            {this.props.obj.Fname}
          </td>
          <td>
            {this.props.obj.Lname}
          </td>
          <td>
            {this.props.obj.Address}
          </td>
          <td>
            {this.props.obj.Phonenumber}
          </td>
          <td>
            {this.props.obj.date}
          </td>
        </tr>
    );
  }
}

export default TableRow;