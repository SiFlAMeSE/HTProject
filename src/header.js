import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
var data_ss;
export default class header2 extends Component {
constructor(props) {
    super(props);

    this.state ={
        data: {}
    }
}
    componentWillMount() {
        if(sessionStorage.getItem('Login_add'))
        {
            data_ss = JSON.parse(sessionStorage.getItem("Login_add"))
            this.setState({ data: data_ss })
        }else if(sessionStorage.getItem('Login_user'))
        {
            data_ss = JSON.parse(sessionStorage.getItem("Login_user"))
            this.setState({ data: data_ss })
        }
        console.log(data_ss);
    }

    logOut = (e) => {
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
                <div className="fonthead">{data_ss.Positions}   :   {data_ss.Fname}</div>
                {/* ออกจากระบบ */}
                <div className="layoutbutre">
                    <NavLink to="/" className="logout-btn" onClick={this.logOut.bind(this)}>
                        ออกจากระบบ
                </NavLink>
                </div>
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
                <div className="fonthead">{data_ss.Positions}   :   {data_ss.Fname}</div>
                {/* ออกจากระบบ */}
                <div className="layoutbutre">
                    <NavLink to="/" className="logout-btn" onClick={this.logOut.bind(this)}>
                        ออกจากระบบ
                </NavLink>
                </div>

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