import React, { Component } from 'react';
//import { ChoiceLable } from './Choice/ChoiceLable';

class MonitorChoice extends Component {
  render() {
    return (
      <>
    {this.props.obj.date},{this.props.obj.t},{this.props.obj.h}<p></p>
    
      </>
        // console.log(this.props.obj.date)
    );
  }
}

export default MonitorChoice;