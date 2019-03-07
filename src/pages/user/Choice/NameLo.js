import React, { Component } from 'react';

export default class NameLo extends Component {
    render() {
        return (
            <option value={this.props.obj.Macaddress}>{this.props.obj.Macaddress}</option>
        );
    }
}