import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, fonthead, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
// import {Button} from react-Bootstrap

export default class header2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            menuOpen: false,
        }
    }

    logOut = (e) => {
        // console.log(e.target)
        sessionStorage.clear();
    }

    state = { visible: false }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    handleHideClick = () => this.setState({ visible: false })
    handleShowClick = () => this.setState({ visible: true })
    handleSidebarHide = () => this.setState({ visible: false })

    render() {

        const { activeItem } = this.state
        const { visible } = this.state

        const adminLink = (
            <Menu pointing secondary>
                {/* <Menu.Item name='sidebar'
                    active={activeItem === 'sidebar'}
                    onClick={this.handleShowClick} /> */}

                <NavLink to="/">
                    <Menu.Item name='หน้าหลัก'
                        active={activeItem === 'หน้าหลัก'}
                        onClick={this.handleItemClick}
                        className="fonthead"
                    />

                </NavLink>
                <NavLink to="/howto">
                    <Menu.Item
                        name='วิธีการใช้งาน'
                        active={activeItem === 'วิธีการใช้งาน'}
                        onClick={this.handleItemClick}
                        className="fonthead"
                    />
                </NavLink>
                <NavLink to="/infor">
                    <Menu.Item
                        name='ข้อมูลอุปกรณ์'
                        active={activeItem === 'ข้อมูลอุปกรณ์'}
                        onClick={this.handleItemClick}
                        className="fonthead"
                    />
                </NavLink>

                {/* Sidebar */}
                <NavLink to="/setlocation">
                    <Menu.Item
                        name='ตั้งค่าอุปกรณ์'
                        active={activeItem === 'ตั้งค่าอุปกรณ์'}
                        onClick={this.handleItemClick}
                        className="fonthead"
                    />
                </NavLink>

                <Menu.Item
                    name='Profile : admin'
                    position='right'
                    className="fonthead"
                />
                {/* ออกจากระบบ */}
                <NavLink to="/">
                    <Menu.Item
                        name='ออกจากระบบ'
                        active={activeItem === 'ออกจากระบบ'}
                        onClick={this.logOut.bind(this)}
                        position='right'
                        className="fonthead"
                    />
                </NavLink>
            </Menu>
        )
        const userLink = (
            <Menu pointing secondary>
                {/* <Menu.Item name='sidebar'
                    active={activeItem === 'sidebar'}
                    onClick={this.handleShowClick} /> */}

                <NavLink to="/">
                    <Menu.Item name='หน้าหลัก'
                        active={activeItem === 'หน้าหลัก'}
                        onClick={this.handleItemClick}
                        className="fonthead"
                    />
                </NavLink>
                <NavLink to="/howto">
                    <Menu.Item
                        name='วิธีการใช้งาน'
                        active={activeItem === 'วิธีการใช้งาน'}
                        onClick={this.handleItemClick}
                        className="fonthead"
                    />
                </NavLink>
                <NavLink to="/infor">
                    <Menu.Item
                        name='ข้อมูลอุปกรณ์'
                        active={activeItem === 'ข้อมูลอุปกรณ์'}
                        onClick={this.handleItemClick}
                        className="fonthead"
                    />
                </NavLink>
                <NavLink to="/contact">
                    <Menu.Item
                        name='ติดต่อ'
                        active={activeItem === 'ติดต่อ'}
                        onClick={this.handleItemClick}
                        className="fonthead"
                    />
                </NavLink>
                <NavLink to="/monitoring">
                    <Menu.Item
                        name='การตรวจสอบ'
                        active={activeItem === 'การตรวจสอบ'}
                        onClick={this.handleItemClick}
                        className="fonthead"
                    />
                </NavLink>
                <NavLink to="/notification">
                    <Menu.Item
                        name='ระบบแจ้งเตือน'
                        active={activeItem === 'ระบบแจ้งเตือน'}
                        onClick={this.handleItemClick}
                        className="fonthead"
                    />
                </NavLink>
                <NavLink to="/history">
                    <Menu.Item
                        name='ประวัติย้อนหลัง'
                        active={activeItem === 'ประวัติย้อนหลัง'}
                        onClick={this.handleItemClick}
                        className="fonthead"
                    />
                </NavLink>
                <Menu.Item
                    name='Profile : user'
                    position='right'
                    className="fonthead"
                />
                {/* ออกจากระบบ */}
                <NavLink to="/">
                    <Menu.Item
                        name='ออกจากระบบ'
                        active={activeItem === 'ออกจากระบบ'}
                        onClick={this.logOut.bind(this)}
                        className="fonthead"
                    />
                </NavLink>
            </Menu>
        )
        const Link = (
            <Menu pointing secondary>
                <Menu.Item
                    position='right'
                />
                {/* <Menu.Item name='sidebar'
                    active={activeItem === 'sidebar'}
                    onClick={this.handleShowClick} /> */}

                <NavLink to="/" className="fonthead" onClick={this.handleItemClick}>
                    {/* <Menu name='หน้าหลัก'
                        onClick={this.handleItemClick}
                        active={activeItem === 'หน้าหลัก'}
                    /> */}
                    หน้าหลัก
                </NavLink>
                <NavLink to="/howto" className="fonthead">
                    {/* <Menu.Item
                        name='วิธีการใช้งาน'
                        active={activeItem === 'วิธีการใช้งาน'}
                        onClick={this.handleItemClick}

                    /> */}
                    วิธีการใช้งาน
                </NavLink>
                <NavLink to="/infor" className="fonthead">
                    {/* <Menu.Item
                        name='ข้อมูลอุปกรณ์'
                        active={activeItem === 'ข้อมูลอุปกรณ์'}
                        onClick={this.handleItemClick}

                    /> */}
                    ข้อมูลอุปกรณ์
                </NavLink>
                <NavLink to="/contact" className="fonthead">
                    {/* <Menu.Item
                        name='ติดต่อ'
                        active={activeItem === 'ติดต่อ'}
                        onClick={this.handleItemClick}
                    /> */}
                    ติดต่อ
                </NavLink>
                <div className="fonthead">|</div>

                <NavLink to="/login" className="fonthead">
                    {/* <Menu.Item
                        name='เข้าสู่ระบบ'
                        active={activeItem === 'เข้าสู่ระบบ'}
                    /> */}
                    เข้าสู่ระบบ
                </NavLink>
                <Button size="tiny" color='blue' className="buttomregis">
                <NavLink to="/signup" className="buthead" >
                    {/* <Menu.Item
                        name='สมัครเข้าใช้งาน'
                        active={activeItem === 'สมัครเข้าใช้งาน'}
                    /> */}
                    สมัครเข้าใช้งาน
                </NavLink></Button>
                <Button size="tiny">TEST</Button>
            </Menu>
        )

        return (

            <div>
                {/* <Sidebar.Pushable as={Segment}>
                    <Sidebar
                        as={Menu}
                        animation='overlay'
                        icon='labeled'
                        inverted
                        onHide={this.handleSidebarHide}
                        vertical
                        visible={visible}
                        width='thin'
                    >
                        <Menu.Item as='a'>
                            <Icon name='home' />
                            Home
            </Menu.Item>
                        <Menu.Item as='a'>
                            <Icon name='gamepad' />
                            Games
            </Menu.Item>
                        <Menu.Item as='a'>
                            <Icon name='camera' />
                            Channels
            </Menu.Item>
                    </Sidebar>

                    <Sidebar.Pusher dimmed={visible}>
                        <Segment basic>

                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable> */}

                {sessionStorage.getItem('Login_add') ? adminLink : sessionStorage.getItem('Login_user') ? userLink : Link}

            </div>
        )
    }
}