import React, { Component } from 'react';
import locationBG from '../img/BG_bl.jpg';
import axios from 'axios';

export default class signupuser extends Component {
    constructor(props){
        super(props);
        this.onchangeUserName = this.onchangeUserName.bind(this);
        this.onchangePassword = this.onchangePassword.bind(this);
        this.onchangeFname = this.onchangeFname.bind(this);
        this.onchangeLname = this.onchangeLname.bind(this);
        this.onchangeAddress = this.onchangeAddress.bind(this);
        this.onchangePhonenumber = this.onchangePhonenumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            User_g: '',
            Password: '',
            Fname: '',
            Lname: '',
            Address: '',
            Phonenumber: ''
        }
    }
    onchangeUserName(e){
        this.setState({
            User_g: e.target.value
        });
    }
    onchangePassword(e){
        this.setState({
            Password: e.target.value
        });
    }
    onchangeFname(e){
        this.setState({
            Fname: e.target.value
        });
    }
    onchangeLname(e){
        this.setState({
            Lname: e.target.value
        });
    }
    onchangeAddress(e){
        this.setState({
            Address: e.target.value
        });
    }
    onchangePhonenumber(e){
        this.setState({
            Phonenumber: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        const UserGen = {
            User_g: this.state.User_g,
            Password: this.state.Password,
            Fname: this.state.Fname,
            Lname: this.state.Lname,
            Address: this.state.Address,
            Phonenumber: this.state.Phonenumber
        }
        axios.post('http://localhost:5000/users/add', UserGen)
        // .then(res => console.log(res.data));
        .then(function(res){
            if(res.data == 'Server added successfully'){
                window.location = "/login"
            }
        })
        .catch(function(err){
            console.log('error');
        })

        this.setState({
            User_g: '',
            Password: '',
            Fname: '',
            Lname: '',
            Address: '',
            Phonenumber: ''
        });
    }
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
                                    <h2>For User</h2>
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
                                <form className="probootstrap-form" onSubmit={this.onSubmit}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="Username">ชื่อผู้ใช้งาน</label>
                                                <input type="text" className="form-control" onChange={this.onchangeUserName} required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" noEmpty title="ต้องมีตัวอักษรภาษาอังกฤษทั้งเล็กและใหญ่และตัวเลข มากกว่า 5 ตัวขึ้นไป"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="Password">รหัสผ่าน</label>
<<<<<<< HEAD
                                                <input type="password" className="form-control" onChange={this.onchangePassword}/>
=======
                                                <input type="text" className="form-control" onChange={this.onchangePassword} required/>
>>>>>>> 24422ad6581786cdcde46e04b62af9970a2918ac
                                            </div>
                                        </div>
                                       
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="Fname">ชื่อ</label>
                                                <input type="text" className="form-control" onChange={this.onchangeFname} required/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="lname">นามสกุล</label>
                                                <input type="text" className="form-control" onChange={this.onchangeLname} required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="Phone">เบอร์โทรศัพท์</label>
                                        <input type="text" className="form-control" onChange={this.onchangePhonenumber} required/>
                                    </div>
                                    <div className="form-group">
                                        <label for="message">ที่อยู่</label>
                                        <textarea cols="30" rows="10" className="form-control" onChange={this.onchangeAddress}></textarea>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" className="btn btn-primary" value="ลงทะเบียน" />
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