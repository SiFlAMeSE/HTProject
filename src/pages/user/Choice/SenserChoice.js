import React, { Component } from 'react';

class SenserChoice extends Component {
  render() {
    return (
        <option value={this.props.obj.Macaddress}>{this.props.obj.Position}</option>
    );
  }
}

export default SenserChoice;