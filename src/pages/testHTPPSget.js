import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class testHTPPSget extends Component {

  constructor(props) {
    super(props);
    this.state = { UserGen: [] };
  }

  //check login
  componentWillMount() {
    if (sessionStorage.getItem('Login_add')) {
      // alert('ยินดีตอนรับ ผู้ดูแลระบบ'+ res.data.data.Fname)
      this.props.history.push('/test')
    }
    else {
      alert('จำเป็นต้องเป็น ผู้ดูแลระบบเท่านั้น')
      this.props.history.push('/login')

    }
  }

  componentDidMount() {
    axios.get('http://178.128.48.132:5000/users/user_list')
      .then(response => {
        const UserGen = response.data;
        this.setState({ UserGen });
        console.log(UserGen);
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  tabRow() {
    return this.state.UserGen.map(function (object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <td>ID</td>
              <td>UserName</td>
              <td>Password</td>
              <td>Frist Name</td>
              <td>Last Name</td>
              <td>Address</td>
              <td>Phone Number</td>
              <td>Position</td>
              <td>Data</td>
            </tr>
          </thead>
          <tbody>
            {this.tabRow()}
          </tbody>
        </table>
      </div>
    );
  }
}