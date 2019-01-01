import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import CheeseburgerMenu from 'cheeseburger-menu'
import HamburgerMenu from 'react-hamburger-menu'
import MenuContent from './menuContent'

const contentStyles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
}

class header extends Component {
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
    render() {
        return (

            <header role="banner" className="probootstrap-header">
                <a href="/" className="probootstrap-logo">LOGO<span>.</span></a>

                {/* ---------------------------------------------------------------------------------------------------- */}
                <CheeseburgerMenu
                    isOpen={this.state.menuOpen}
                    closeCallback={this.closeMenu.bind(this)}>
                    <MenuContent closeCallback={this.closeMenu.bind(this)} />
                </CheeseburgerMenu>

                <a href="#" className="probootstrap-burger-menu visible-xs" ><i>เมนู</i></a>
                <div className="mobile-menu-overlay"></div>
                <nav role="navigation" className="probootstrap-nav hidden-xs">
                    <ul className="probootstrap-main-nav">
                        <li>
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
                            <a href="/">หน้าหลัก</a></li>
                        <li><NavLink to="/howto">วิธีการใช้งาน</NavLink></li>
                        <li><NavLink to="/infor">ข้อมูลอุปกรณ์</NavLink></li>
                        <li><NavLink to="/contact">ติดต่อ</NavLink></li>
                        <li><NavLink to="/test">ทดสอบ</NavLink></li>

                    </ul>
                    <ul className="probootstrap-header-social hidden-xs">
                        <li><a target="_blank" href="https://www.facebook.com"><i className="icon-facebook2"></i></a></li>
                        <li><a target="_blank" href="https://www.instagram.com/"><i className="icon-instagram2"></i></a></li>
                    </ul>
                    <div className="extra-text visible-xs">
                        <a href="#" className="probootstrap-burger-menu"><i>เมนู</i></a>
                    </div>
                </nav>



                {/* ---------------------------------------------------------------------------------------------------- */}


            </header >
        );

    }

}
export default header;