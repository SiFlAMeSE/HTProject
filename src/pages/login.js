import React, { Component } from 'react';
import axios from 'axios';

var stylebg = {
    backgroundImage: `url(${require('../img/BGlog.png')})`,
    backgroundSize: 'cover',
}
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
            _id: this.state._id,
            User_g: this.state.User_g,
            Password: this.state.Password,
            Positions: this.state.Positions
        }
        axios.post('http://206.189.94.192:5000/users/login', UserGen)
            .then(function (res) {
                const data = res.data.data
                if (res.data.status === 'Success') {
                    if (data.Positions === 'admin') {
                        sessionStorage.clear();
                        sessionStorage.setItem('Login_add', JSON.stringify(res.data.data))
                        window.location = "/"
                    }
                    if (data.Positions === 'user') {
                        sessionStorage.clear();
                        sessionStorage.setItem('Login_user', JSON.stringify(res.data.data))
                        window.location = "/user/authorize"
                    }
                }
                else {
                    alert("ไม่มีชื่อผู้ใช้งาน : " + UserGen.User_g + " ในระบบ")
                    console.log('relogin', res.data.data);
                }
            })
    }



    render() {
        return (
            <div style={stylebg}>
                <div className="container-login100">
                    <div className="wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30">
                        <form className="login100-form validate-form" noValidate onSubmit={this.onSubmit}>
                            <span className="login100-form-title p-b-37">
                                เข้าสู่ระบบ
				</span>

                            <div className="wrap-input100 validate-input m-b-20">
                                <input type="text"
                                    className="input100"
                                    name="User_g"
                                    id="inputl"
                                    placeholder="ชื่อผู้ใช้งาน"
                                    value={this.state.User_g}
                                    onChange={this.onChange}
                                />
                                <span className="focus-input100"></span>
                            </div>

                            <div className="wrap-input100 validate-input m-b-25">
                                <input type="password"
                                    className="input100"
                                    name="Password"
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
                        </form>


                    </div>
                </div>
            </div>

        );
    }
}

export default loginp;
