import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, fonthead, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
// import {Button} from react-Bootstrap

export default class header2 extends Component {
    constructor(props) {
        super(props)

    }

    logOut = (e) => {
        // console.log(e.target)
        sessionStorage.clear();
    }
    render() {


        const adminLink = (
            <Menu pointing secondary>
                <Menu.Item position='right' />
                <NavLink to="/" className="fonthead">
                    หน้าหลัก
                </NavLink>
                <NavLink to="/howto" className="fonthead">
                    วิธีการใช้งาน
                </NavLink>
                <NavLink to="/infor" className="fonthead">
                    ข้อมูลอุปกรณ์
                </NavLink>
                <NavLink to="/contact" className="fonthead">
                    ติดต่อ
                </NavLink>
                <NavLink to="/monitoring" className="fonthead">
                    การตรวจสอบ
                </NavLink>
                <NavLink to="/notification" className="fonthead">
                    ระบบแจ้งเตือน
                </NavLink>
                <NavLink to="/history" className="fonthead">
                    ประวัติย้อนหลัง
                </NavLink>
                <NavLink to="/setlocation" className="fonthead">
                    ตั้งค่าอุปกรณ์
                </NavLink>
                <div className="fonthead">|</div>
                <Menu.Item
                    name='Profile : admin'
                    position='right'
                    className="fonthead"
                />
                {/* ออกจากระบบ */}
                <NavLink to="/" className="fonthead" onClick={this.logOut.bind(this)}>
                    ออกจากระบบ
                </NavLink>
            </Menu>
        )
        const userLink = (
            <Menu pointing secondary>
                <Menu.Item position='right' />
                <NavLink to="/" className="fonthead">
                    หน้าหลัก
                </NavLink>
                <NavLink to="/howto" className="fonthead">
                    วิธีการใช้งาน
                </NavLink>
                <NavLink to="/infor" className="fonthead">
                    ข้อมูลอุปกรณ์
                </NavLink>
                <NavLink to="/contact" className="fonthead">
                    ติดต่อ
                </NavLink>
                <NavLink to="/monitoring" className="fonthead">
                    การตรวจสอบ
                </NavLink>
                <NavLink to="/notification" className="fonthead">
                    ระบบแจ้งเตือน
                </NavLink>
                <NavLink to="/history" className="fonthead">
                    ประวัติย้อนหลัง
                </NavLink>
                <div className="fonthead">|</div>
                <Menu.Item
                    name='Profile : user'
                    position='right'
                    className="fonthead"
                />
                {/* ออกจากระบบ */}
                <NavLink to="/" className="fonthead" onClick={this.logOut.bind(this)}>
                    ออกจากระบบ
                </NavLink>

            </Menu>
        )
        const Link = (
            <Menu pointing secondary>
                <Menu.Item position='right' />
                <NavLink to="/" className="fonthead">
                    หน้าหลัก
                </NavLink>
                <NavLink to="/howto" className="fonthead">
                    วิธีการใช้งาน
                </NavLink>
                <NavLink to="/infor" className="fonthead">
                    ข้อมูลอุปกรณ์
                </NavLink>
                <NavLink to="/contact" className="fonthead">
                    ติดต่อ
                </NavLink>
                <div className="fonthead">|</div>
                <NavLink to="/login" className="fonthead">
                    เข้าสู่ระบบ
                </NavLink>
                <div className="layoutbutre">
                    <NavLink to="/signup" className="regis-btn">
                        สมัครเข้าใช้งาน
                </NavLink>
                </div>

            </Menu>
        )

        return (

            <div>
                {sessionStorage.getItem('Login_add') ? adminLink : sessionStorage.getItem('Login_user') ? userLink : Link}
            </div>
        )
    }
}