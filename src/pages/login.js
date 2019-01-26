import React, { Component } from 'react';
import { login } from './Functions'
import axios from 'axios';

class loginp extends Component {
    constructor() {
        super()
        this.state = {
            User_g: '',
            Password: '',
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        const UserGen = {
            User_g: this.state.User_g,
            Password: this.state.Password
        }
        axios.post('http://localhost:5000/users/login', UserGen)
            // .then(function (res) {
            //     console.log(res.data)
            // }
            // )

            .then(function (res) {
                if (res.data.status == 'Success') {
                    console.log('Ok', res.data.data);
                    sessionStorage.setItem('Login', JSON.stringify(res.data.data))
                    // window.location = "/outbox"
                }
                else {
                    alert("ไปสมัคร")
                    // console.log('Ok', res.data.data);
                    // window.location = "/outbox"
                }
            })
        // .catch(function (err) {
        //     console.log('error loopfront2')
        // })
        // login(user).then(res => {
        //     if (res) {
        //         console.log("ok_fronlogin" , res)
        //         // window.location = "/outbox"
        //     }
        // })
    }


    render() {
        return (
            <div>

                <div className="container-login100">
                    {/* <div className="container-login100" style="background-image: url('images/bg-01.jpg');"> */}
                    <div className="wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30">
                        <form className="login100-form validate-form" noValidate onSubmit={this.onSubmit}>
                            <span className="login100-form-title p-b-37">
                                เข้าสู่ระบบ
				</span>

                            <div className="wrap-input100 validate-input m-b-20">
                                {/* <input className="input100" id="inputl" type="text" name="username" placeholder="ชื่อผู้ใช้งาน" /> */}
                                <input type="User_g"
                                    className="input100"
                                    name="User_g"
                                    type="text"
                                    id="inputl"
                                    placeholder="ชื่อผู้ใช้งาน"
                                    value={this.state.User_g}
                                    onChange={this.onChange} />
                                <span className="focus-input100"></span>
                            </div>

                            <div className="wrap-input100 validate-input m-b-25">
                                {/* <input className="input100" id="inputl" type="password" name="pass" placeholder="รหัสผ่าน" /> */}
                                <input type="password"
                                    className="input100"
                                    name="Password"
                                    type="Password"
                                    id="inputl"
                                    placeholder="รหัสเข้าใช้งาน"
                                    value={this.state.Password}
                                    onChange={this.onChange} />
                                <span className="focus-input100"></span>
                            </div>


                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn" id="inputl">
                                    ตกลง
					</button>
                            </div>

                            <div className="text-center p-t-57 p-b-20">
                                <span className="txt1">
                                    หรือ
					</span>
                            </div>

                            <div className="flex-c p-b-112">
                                {/* <a href="#" className="login100-social-item">
                                    <i className="fa fa-facebook-f"></i>
                                </a> */}

                                <a href="#" className="login100-social-item">
                                    <img src={require('../img/icon-google.png')} alt="GOOGLE" />
                                </a>
                            </div>

                        </form>


                    </div>
                </div>
            </div>

        );
    }
}

export default loginp;