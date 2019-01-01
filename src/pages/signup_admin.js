import React, { Component } from 'react';
import locationBG from '../img/BG_bl.jpg';

class signupuser extends Component {
    render() {
        const divStyle = {
            color: 'blue',
            backgroundImage: 'url(' + locationBG + ')',
        };
        return (
            <div>
                <section className="probootstrap-intro probootstrap-intro-inner" style={divStyle} data-stellar-background-ratio="0.5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7 probootstrap-intro-text">
                                <h1 className="probootstrap-animate" data-animate-effect="fadeIn">Register</h1>
                                <div className="probootstrap-subtitle probootstrap-animate" data-animate-effect="fadeIn">
                                    <h2>For Admin</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className="probootstrap-animate">
                        <a className="probootstrap-scroll-down js-next" href="#next-section">Scroll down
                    <i className="icon-chevron-down"></i></a></span>
                </section>
                <div>
                    <section id="next-section" className="probootstrap-section">
                        <div className="container">
                            <div className="col-md-6">
                                <form action="#" method="post" className="probootstrap-form">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="Username">ชื่อผู้ใช้งาน</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="Password">รหัสผ่าน</label>
                                                <input type="password" className="form-control" />
                                            </div>
                                        </div>
                                        
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="Fname">ชื่อ</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="lname">นามสกุล</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="Phone">เบอร์โทรศัพท์</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label for="message">ที่อยู่</label>
                                        <textarea cols="30" rows="10" className="form-control"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" className="btn btn-primary" id="submit" name="submit" value="Submit" />
                                    </div>
                                </form>
                            </div>
                            {/* <div className="col-md-5 col-md-push-1">
                                <h3 className="mt0">Contact</h3>
                                <ul className="probootstrap-contact-info">
                                    <li><span>Mr. Sirasak Sunthonthuam  5802041610089</span></li>
                                    <li><i className="icon-phone2"></i>&nbsp;<span>094-931-2638</span></li>
                                    <li><span>Mr. Sompot Satongngak  5802041620203</span></li>
                                    <li><i className="icon-phone2"></i>&nbsp;<span>092-493-6145</span></li>
                                </ul>

                                <h3>ข้อเสนอ</h3>
                                <p>คำอธิบายเพิ่มเติม</p>
                            </div> */}
                        </div>
                    </section>

                </div>
            </div>
        );
    }
}

export default signupuser;