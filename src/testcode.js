import React from 'react';
import axios from 'axios';
import Show from './Show';
import { Form } from 'reactstrap';

var users, data_user;
export default class testcode extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    }

    this.state = { users: [] };
  }

  componentWillMount() {
    // data_user = this.props.obj.length-1
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/user_list')
      .then(res => {
        users = res.data;
        this.setState({ users });
        console.log(users.length)
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.users.length !== nextProps.users.length) {
      this.showtest();
    }
  }

  showtest() {
    // this.forceUpdate();
    return this.state.users.map((object, i) => {
      return <Show obj={object} key={i} />
    })
  }

  // componentWillReceiveProps(nextProps){
  //   this.showtest(nextProps)
  // }

  // componentWillReceiveProps(nextProps){
  //   axios.get('http://localhost:5000/users/user_list')
  //   .then(res => {
  //     users = res.data;
  //     this.setState({ users });
  //     console.log(users)
  //   })
  //   .catch(function(error) {
  //     console.log(error);
  //   })
  // }

  render() {
    return (
      <div>{this.state.users.length}
        <br /><br />
        {this.showtest()}
        <br /><br />
        <form>
          <label>
            ประเภทการแจ้งเตือน
          <div>
              <input
                name="error"
                type="checkbox"
                value="error"
                onChange={this.handleInputChange} />พบข้อบกพร่อง
              <span style={{ paddingRight: '15px' }} />
              <input
                name="max_t"
                type="checkbox"
                value="max_t"
                onChange={this.handleInputChange} />อุณหภูมิสูงกว่ากำหนด
              <span style={{ paddingRight: '15px' }} />
              <input
                name="min_t"
                type="checkbox"
                value="min_t"
                onChange={this.handleInputChange} />อุณหภูมิต่ำกว่ากำหนด
              <span style={{ paddingRight: '15px' }} />
              <input
                name="max_h"
                type="checkbox"
                value="max_h"
                onChange={this.handleInputChange} />ความชื้นสูงกว่ากำหนด
              <span style={{ paddingRight: '15px' }} />
              <input
                name="min_h"
                type="checkbox"
                value="min_h"
                onChange={this.handleInputChange} />ความชื้นต่ำกว่ากำหนด
          </div>
          </label>
          <br />
        </form>
      </div>




    );
  }
}
