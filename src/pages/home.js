import React, { Component } from 'react';
import '../css/home.css';

class home extends Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     data: {}
    //   }
    //   // const save = sessionStorage
    //   // alert("Login_user, " + sessionStorage.getItem("Fname"))
    //   // console.log(save)
    // }

    // componentWillMount() {
    //   var ss = JSON.parse(sessionStorage.getItem('Login_user'))
    //   this.setState({ data: ss })
    //   // console.log('first')

    // }

    render() {

        return (
            <div>
            <div className="banner-top">
                <div className="co-picture">
                    <img src={require('../img/cover.jpg')} className="picture"/>
                    {/* <img src={require('../img/icon.png')} className="iconfront1"/> */}
                    {/* <div className="iconfront1"></div> */}
                </div>
            </div>
            <div className="bg-mid-low" align="center" >ใช้ได้สำหรับทุกองค์กร</div>
            </div>
        );
    }
}

export default home;
