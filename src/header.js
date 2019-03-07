import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


var data_ss;
export default class header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {},
            isOpen: false
        }
    }
    componentWillMount() {
        if (sessionStorage.getItem('Login_add')) {
            data_ss = JSON.parse(sessionStorage.getItem("Login_add"))
            this.setState({ data: data_ss })
        } else if (sessionStorage.getItem('Login_user')) {
            data_ss = JSON.parse(sessionStorage.getItem("Login_user"))
            this.setState({ data: data_ss })
        }
        // console.log(data_ss);
    }

    logOut = (e) => {
        sessionStorage.clear();
    }

    sh_profile() {
        return <b className="fonthead">{data_ss.Positions}   :   {data_ss.Fname}</b>
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const adminLink = (
            <Navbar color="light" light expand="md" right>
                <NavbarBrand><img src={require('./img/water.png')} height="35px" alt="water" style={{ paddingLeft: '5px' }} />ระบบการจัดการ</NavbarBrand>
                <NavbarToggler onClick={(e) => this.toggle(e)} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" >
                        <NavItem id="spacetop">
                            <NavLink to="/" className="fonthead">หน้าหลัก</NavLink>
                        </NavItem>
                        <NavItem id="spacetop">
                            <NavLink to="/howto" className="fonthead">วิธีการใช้งาน</NavLink>
                        </NavItem>
                        <NavItem id="spacetop">
                            <NavLink to="/monitoring/:id" className="fonthead">การตรวจสอบ</NavLink>
                        </NavItem>
                        <NavItem id="spacetop">
                            <NavLink to="/dashboard" className="fonthead">แผงควบคุม</NavLink>
                        </NavItem>
                        <NavItem id="spacetop">
                            <NavLink to="/notification" className="fonthead">ระบบแจ้งเตือน</NavLink>
                        </NavItem>
                        <NavItem id="spacetop">
                            <NavLink to="/history" className="fonthead">ประวัติย้อนหลัง</NavLink>
                        </NavItem>
                        <NavItem id="spacetop">
                            <NavLink to="/setlocation" className="fonthead">ตั้งค่าอุปกรณ์</NavLink>
                        </NavItem>
                        {/* <div className="fonthead">|</div> */}
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                <this.sh_profile />
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem divider />
                                <DropdownItem className="layoutbutre">
                                    {/* ออกจากระบบ */}
                                    <NavLink to="/" className="logout-btn" onClick={this.logOut.bind(this)}>ออกจากระบบ</NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        )

        const userLink = (
            <Navbar color="light" light expand="md">
                <NavbarBrand><img src={require('./img/water.png')} height="35px" alt="water" style={{ paddingLeft: '5px' }} />ระบบการจัดการ</NavbarBrand>
                <NavbarToggler onClick={(e) => this.toggle(e)} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem id="spacetop">
                            <NavLink to="/" className="fonthead">หน้าหลัก</NavLink>
                        </NavItem>
                        <NavItem id="spacetop">
                            <NavLink to="/howto" className="fonthead">วิธีการใช้งาน</NavLink>
                        </NavItem>
                        <NavItem id="spacetop">
                            <NavLink to="/infor" className="fonthead">ข้อมูลอุปกรณ์</NavLink>
                        </NavItem>
                        <NavItem id="spacetop">
                            <NavLink to="/monitoring" className="fonthead">การตรวจสอบ</NavLink>
                        </NavItem>
                        <NavItem id="spacetop">
                            <NavLink to="/dashboard" className="fonthead">แผงควบคุม</NavLink>
                        </NavItem>
                        <NavItem id="spacetop">
                            <NavLink to="/notification" className="fonthead">ระบบแจ้งเตือน</NavLink>
                        </NavItem>
                        <NavItem id="spacetop">
                            <NavLink to="/history" className="fonthead">ประวัติย้อนหลัง</NavLink>
                        </NavItem>

                        {/* <div className="fonthead">|</div> */}
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                <this.sh_profile />
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem divider />
                                <DropdownItem className="layoutbutre">
                                    {/* ออกจากระบบ */}
                                    <NavLink to="/" className="logout-btn" onClick={this.logOut.bind(this)}>ออกจากระบบ</NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        )

        const Link = (
            <Navbar color="light" light expand="md">
                <NavbarBrand><img src={require('./img/water.png')} height="35px" alt="water" style={{ paddingLeft: '5px' }} />ระบบการจัดการ</NavbarBrand>
                <NavbarToggler onClick={(e) => this.toggle(e)} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem id="spacetop">
                            <NavLink to="/" className="fonthead">หน้าหลัก</NavLink>
                        </NavItem>
                        <NavItem id="spacetop">
                            <NavLink to="/howto" className="fonthead">วิธีการใช้งาน</NavLink>
                        </NavItem>
                        <NavItem id="spacetop">
                            <NavLink to="/infor" className="fonthead">ข้อมูลอุปกรณ์</NavLink>
                        </NavItem>
                        <NavItem id="spacetop">
                            <NavLink to="/contact" className="fonthead">ติดต่อ</NavLink>
                        </NavItem>
                        <NavItem id="spacetop">
                            <b className="fonthead">|</b>
                        </NavItem>
                        <NavItem id="spacetop">
                            <NavLink to="/login" className="fonthead">เข้าสู่ระบบ</NavLink>
                        </NavItem>
                        <NavItem id="spacetop">
                            <NavLink to="/signup" className="regis-btn">สมัครเข้าใช้งาน</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
        return (
            <div>
                {sessionStorage.getItem('Login_add') ? adminLink : sessionStorage.getItem('Login_user') ? userLink : Link}
            </div>
        )
    }
}