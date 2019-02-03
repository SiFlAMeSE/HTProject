import React from 'react';
import {

    NavLink,

} from 'react-router-dom';

import CheeseburgerMenu from 'cheeseburger-menu'
import HamburgerMenu from 'react-hamburger-menu'
import MenuContent from './menuContent'

export default class header extends React.Component {
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
            <ul className="probootstrap-main-nav">
                <li>
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
                    /></li>

                <li><a href="/">หน้าหลัก</a></li>
                <li><NavLink to="/howto">วิธีการใช้งาน</NavLink></li>
                <li><NavLink to="/infor">ข้อมูลอุปกรณ์</NavLink></li>
                <li><NavLink to="/contact">ติดต่อ</NavLink></li>
                <li><NavLink to="/test">ทดสอบ</NavLink></li>
                <li><NavLink to="" onClick={this.logOut.bind(this)}>ออกจากระบบ</NavLink></li>
            </ul>
        )
        const userLink = (
            <ul className="probootstrap-main-nav">
                <li><a href="/">หน้าหลัก</a></li>
                <li><NavLink to="/howto">วิธีการใช้งาน</NavLink></li>
                <li><NavLink to="/infor">ข้อมูลอุปกรณ์</NavLink></li>
                <li><NavLink to="/contact">ติดต่อ</NavLink></li>
                <li><NavLink to="/monitoring">การตรวจสอบ</NavLink></li>
                <li><NavLink to="/notification">ระบบแจ้งเตือน</NavLink></li>
                <li><NavLink to="/history">ประวัติย้อนหลัง</NavLink></li>
                <li><NavLink to="" onClick={this.logOut.bind(this)}>ออกจากระบบ</NavLink></li>
            </ul>
        )
        const Link = (
            <ul className="probootstrap-main-nav">
                <li><a href="/">หน้าหลัก</a></li>
                <li><NavLink to="/howto">วิธีการใช้งาน</NavLink></li>
                <li><NavLink to="/infor">ข้อมูลอุปกรณ์</NavLink></li>
                <li><NavLink to="/contact">ติดต่อ</NavLink></li>
            </ul>
        )
        return (
            <header role="banner" className="probootstrap-header">
                <div>
                    <CheeseburgerMenu
                        isOpen={this.state.menuOpen}
                        closeCallback={this.closeMenu.bind(this)}>
                        <MenuContent closeCallback={this.closeMenu.bind(this)} />
                    </CheeseburgerMenu>


                    <nav role="navigation" className="probootstrap-nav hidden-xs">

                        {sessionStorage.getItem('Login_add') ? adminLink : sessionStorage.getItem('Login_user') ? userLink : Link}

                        {/* <div className="extra-text visible-xs">
                            <a href="/" className="probootstrap-burger-menu"><i>เมนู</i></a>
                        </div> */}

                    </nav>
                </div>
            </header >
        );
    }
}