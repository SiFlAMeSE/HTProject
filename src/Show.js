import React, { Component } from 'react';


class Show extends Component {
  render() {
    return (
        <div>{this.props.obj.Fname}</div>
    );
  }
}

export default Show;