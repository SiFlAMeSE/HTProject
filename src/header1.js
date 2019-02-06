import React from 'react';
import {NavLink} from 'react-router-dom';
import {Nav,Navbar} from 'react-bootstrap';

import CheeseburgerMenu from 'cheeseburger-menu'
import HamburgerMenu from 'react-hamburger-menu'
import MenuContent from './menuContent'

export default class header1 extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            menuOpen: false,
        }
    }

    openMenu() {
        this.setState({ menuOpen: true })
    }

    closeMenu() {
        this.setState({ menuOpen: false })
    }

    logOut = (e) => {
        console.log(e.target)
        sessionStorage.clear();
    }

    render() {
        const adminLink = (
            <Nav className="mr-auto">
                <Nav.Link>
                    <HamburgerMenu
                        isOpen={this.state.menuOpen}
                        menuClicked={this.openMenu.bind(this)}
                        width={32}
                        height={24}
                        strokeWidth={3}
                        rotate={0}
                        color='white'
                        borderRadius={0}
                        animationDuration={0.5}
                    /></Nav.Link>

                <Nav.Link href="/">หน้าหลัก</Nav.Link>
                <Nav.Link href="/howto">วิธีการใช้งาน</Nav.Link>
                <Nav.Link href="/infor">ข้อมูลอุปกรณ์</Nav.Link>
                <Nav.Link href="/contact">ติดต่อ</Nav.Link>
                <Nav.Link href="/test">ทดสอบ</Nav.Link>
                <Nav.Link href="" onClick={this.logOut.bind(this)}>ออกจากระบบ</Nav.Link>
            </Nav>
        )
        const userLink = (
            <Nav className="mr-auto">
                <Nav.Link href="/">หน้าหลัก</Nav.Link>
                <Nav.Link href="/howto">วิธีการใช้งาน</Nav.Link>
                <Nav.Link href="/infor">ข้อมูลอุปกรณ์</Nav.Link>
                <Nav.Link href="/contact">ติดต่อ</Nav.Link>
                <Nav.Link href="/monitoring">การตรวจสอบ</Nav.Link>
                <Nav.Link href="/notification">ระบบแจ้งเตือน</Nav.Link>
                <Nav.Link href="/history">ประวัติย้อนหลัง</Nav.Link>
                <Nav.Link href="" onClick={this.logOut.bind(this)}>ออกจากระบบ</Nav.Link>
            </Nav>
        )
        const Link = (
            <Nav className="mr-auto">
                <Nav.Link a href="/">หน้าหลัก</Nav.Link>
                <Nav.Link href="/howto">วิธีการใช้งาน</Nav.Link>
                <Nav.Link href="/infor">ข้อมูลอุปกรณ์</Nav.Link>
                <Nav.Link href="/contact">ติดต่อ</Nav.Link>
            </Nav>
        )
        return (
            <Navbar bg="dark" variant="dark">
                <div>
                    <CheeseburgerMenu
                        isOpen={this.state.menuOpen}
                        closeCallback={this.closeMenu.bind(this)}>
                        <MenuContent closeCallback={this.closeMenu.bind(this)} />
                    </CheeseburgerMenu>
                    <div className="mr-auto">
                        {sessionStorage.getItem('Login_add') ? adminLink : sessionStorage.getItem('Login_user') ? userLink : Link}
                    </div>
                </div>
            </Navbar >
        );
    }
}