import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button
} from 'reactstrap';

import CheeseburgerMenu from 'cheeseburger-menu'
import HamburgerMenu from 'react-hamburger-menu'
import MenuContent from './menuContent'

import { Link, withRouter } from 'react-router-dom'

const contentStyles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
}

export default class headernew extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menuOpen: false,
            test: "sdfljk"
        }

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    openMenu() {
        this.setState({ menuOpen: true })
    }

    closeMenu() {
        this.setState({ menuOpen: false })
    }

    logOut = (e) => {
        console.log(e.target)
        // e.preventDefault()
        // localStorage.removeItem('usertoken')
        // window.location = "/"

        sessionStorage.clear();

    }



    render() {
        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/signup_user" className="nav-link">
                        Register
                    </Link>
                </li>
            </ul>
        )

        const userLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/test" className="nav-link">
                        User
                    </Link>
                </li>
                <li className="nav-item">
                    <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                        Logout
                    </a>
                </li>
            </ul>
        )
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
                    <button className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbar1"
                        aria-controls="navbar1"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justigy-contert-md-center" id="navbar1">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    Home
                            </Link>
                                <Button onClick={this.logOut} ref={this.test} >ออกจากระบบ</Button>
                            </li>
                        </ul>
                        {localStorage.usertoken ? userLink : loginRegLink}
                    </div>
                </nav>
                {/* <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">LOGO</NavbarBrand>
                    <CheeseburgerMenu
                        isOpen={this.state.menuOpen}
                        closeCallback={this.closeMenu.bind(this)}>
                        <MenuContent closeCallback={this.closeMenu.bind(this)} />
                    </CheeseburgerMenu>
                    <HamburgerMenu
                        isOpen={this.state.menuOpen}
                        menuClicked={this.openMenu.bind(this)}
                        width={32}
                        height={24}
                        strokeWidth={3}
                        rotate={0}
                        color='black'
                        borderRadius={0}
                        animationDuration={0.5}
                    />
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">หน้าหลัก</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/howto">วิธีการใช้งาน</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/infor">ข้อมูลอุปกรณ์</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/contact">ติดต่อ</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/test">ทดสอบ</NavLink>
                            </NavItem>

                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Options
                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
                  </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                  </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                  </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar> */}
            </div>
        );
    }
}