import React, { Component } from 'react';
import axios from 'axios';

export default class signup extends Component {
    constructor() {
        super()
        this.state = {
            User_g: '',
            Password: '',
            Fname: '',
            Lname: '',
            Address: '',
            Phonenumber: '',
            Positions: '',
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        const UserGen = {
            User_g: this.state.User_g,
            Password: this.state.Password,
            Fname: this.state.Fname,
            Lname: this.state.Lname,
            Address: this.state.Address,
            Phonenumber: this.state.Phonenumber,
            Positions: this.state.Positions

        }
        axios.post('http://localhost:5000/users/add', UserGen)
            // .then(res => console.log(res.data));
            .then(function (res) {
                if (res.data === 'Server added successfully') {
                    window.location = "/login"
                }
            })
            .catch(function (err) {
                console.log('error');
            })
    }
    render() {
        return (
            <div>
                <section id="space">
                    <div className="banner-h">
                        <div className="text-cobg">
                            ลงทะเบียนเข้าสู่ระบบ
                    </div>
                    </div>
                </section>

                <div>
                    <section>
                        <div className="container">
                            <div className="col-auto">
                                <form noValidate onSubmit={this.onSubmit}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            {/* <div className="form-group"> */}
                                                <label for="Username">ชื่อผู้ใช้งาน</label>
                                                <input type="text"
                                                    className="form-control"
                                                    name="User_g"
                                                    placeholder="ชื่อผู้ใช้"
                                                    value={this.state.User_g}
                                                    onChange={this.onChange}
                                                    // pattern="[\w]{1,20}"
                                                    // title="ภาษาอังกฤษหรือตัวเลข มากกว่า 8 ตัวขึ้นไป"
                                                    required />
                                            {/* </div> */}
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="Password">รหัสผ่าน</label>
                                                <input type="Password"
                                                    className="form-control"
                                                    name="Password"
                                                    placeholder="รหัสผ่าน"
                                                    // pattern="(\d).{8,}"
                                                    // required title="ตัวเลขมากกว่า 8 ตัวขึ้นไป"
                                                    value={this.state.Password}
                                                    onChange={this.onChange} />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="Fname">ชื่อ</label>
                                                <input type="text"
                                                    className="form-control"
                                                    name="Fname"
                                                    placeholder="ชื่อ"
                                                    // pattern="([a-z]).{3,}"
                                                    // required title="ตัวเลขมากกว่า 8 ตัวขึ้นไป"
                                                    value={this.state.Fname}
                                                    onChange={this.onChange} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="Lname">นามสกุล</label>
                                                <input type="text"
                                                    className="form-control"
                                                    name="Lname"
                                                    placeholder="นามสกุล"
                                                    // pattern="([a-z]).{3,}"
                                                    // required title="ตัวเลขมากกว่า 8 ตัวขึ้นไป"
                                                    value={this.state.Lname}
                                                    onChange={this.onChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="Phone">เบอร์โทรศัพท์</label>
                                        <input type="text"
                                            className="form-control"
                                            name="Phonenumber"
                                            placeholder="เบอร์โทรศัพท์"
                                            // pattern="(/d.{3,}"
                                            // required title="ตัวเลขมากกว่า 8 ตัวขึ้นไป"
                                            value={this.state.Phonenumber}
                                            onChange={this.onChange} />
                                    </div>
                                    <label for="Positions">หน้าที่</label>
                                    <div className="form-check">
                                        <div class="form-check-inline">
                                            <label class="form-check-label" for="user">
                                                <input type="radio"
                                                    class="form-check-input"
                                                    name="Positions"
                                                    value="user"
                                                    onChange={this.onChange} />ผู้ใช้งาน
                                            </label>
                                        </div>
                                        <div class="form-check-inline">
                                            <label class="form-check-label" for="admin">
                                                <input type="radio"
                                                    class="form-check-input"
                                                    value="admin"
                                                    name="Positions"
                                                    onChange={this.onChange} />ผู้ดูแลระบบ
                                            </label>
                                        </div>

                                    </div>
                                    <div className="form-group">
                                        <label for="message">ที่อยู่</label>
                                        <textarea cols="30"
                                            rows="10"
                                            className="form-control"
                                            name="Address"
                                            value={this.state.Address}
                                            onChange={this.onChange}
                                        >
                                        </textarea>

                                    </div>
                                    <div className="form-group">
                                        <input type="submit" className="btn btn-primary" value="ลงทะเบียน" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        );
    }
}