import React, { Component } from 'react';

class login extends Component {
    render() {
        return (
            <div>
                
                <div className="container-login100">
                    {/* <div className="container-login100" style="background-image: url('images/bg-01.jpg');"> */}
                    <div className="wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30">
                        <form className="login100-form validate-form">
                            <span className="login100-form-title p-b-37">
                                เข้าสู่ระบบ
				</span>

                            <div className="wrap-input100 validate-input m-b-20">
                                <input className="input100" id="inputl" type="text" name="username" placeholder="ชื่อผู้ใช้งาน" />
                                <span className="focus-input100"></span>
                            </div>

                            <div className="wrap-input100 validate-input m-b-25">
                                <input className="input100" id="inputl" type="password" name="pass" placeholder="รหัสผ่าน" />
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

export default login;