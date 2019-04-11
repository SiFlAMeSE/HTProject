import React, { Component } from 'react';

class DashboardChoice extends Component {
  render() {
    return (
      <option value={this.props.obj._id}>{this.props.obj.Name_Lo}</option>
    );
  }
}

export default DashboardChoice;