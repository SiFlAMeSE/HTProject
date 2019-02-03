import React, { Component } from 'react';
import axios from 'axios';

export default class id_User extends Component {

  constructor(props) {
    super(props);
    this.state = { UserGen: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/user_list')
      .then(response => {
        const UserGen = response.data;
        this.setState({ UserGen });
        console.log(UserGen);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  render() {
    return (
        <p></p>
    );
  }
}