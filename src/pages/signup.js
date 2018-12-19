import React, { Component } from 'react';
import locationBG from '../img/BG_bl.jpg';

class signup extends Component {
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
                                    <h2>For admin and User</h2>
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
                                                <label for="fname">First Name</label>
                                                <input type="text" className="form-control" id="fname" name="fname" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="lname">Last Name</label>
                                                <input type="text" className="form-control" id="lname" name="lname" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="email">Email</label>
                                        <input type="email" className="form-control" id="email" name="email" />
                                    </div>
                                    <div className="form-group">
                                        <label for="subject">Subject</label>
                                        <input type="text" className="form-control" id="subject" name="subject" />
                                    </div>
                                    <div className="form-group">
                                        <label for="message">Message</label>
                                        <textarea cols="30" rows="10" className="form-control" id="message" name="message"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" className="btn btn-primary" id="submit" name="submit" value="Send Message" />
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-5 col-md-push-1">
                                <h3 className="mt0">Contact</h3>
                                <ul className="probootstrap-contact-info">
                                    <li><span>Mr. Sirasak Sunthonthuam  5802041610089</span></li>
                                    <li><i className="icon-phone2"></i>&nbsp;<span>094-931-2638</span></li>
                                    <li><span>Mr. Sompot Satongngak  5802041620203</span></li>
                                    <li><i className="icon-phone2"></i>&nbsp;<span>092-493-6145</span></li>
                                </ul>

                                <h3>ข้อเสนอ</h3>
                                <p>คำอธิบายเพิ่มเติม</p>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        );
    }
}

export default signup;