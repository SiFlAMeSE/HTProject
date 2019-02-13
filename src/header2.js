import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

export default class header2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            menuOpen: false,
        }
    }

    logOut = (e) => {
        console.log(e.target)
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
            <Menu inverted pointing secondary>
                {/* <Menu.Item name='sidebar'
                    active={activeItem === 'sidebar'}
                    onClick={this.handleShowClick} /> */}

                <NavLink to="/">
                    <Menu.Item name='หน้าหลัก'
                        active={activeItem === 'หน้าหลัก'}
                        onClick={this.handleItemClick} />
                </NavLink>
                <NavLink to="/howto">
                    <Menu.Item
                        name='วิธีการใช้งาน'
                        active={activeItem === 'วิธีการใช้งาน'}
                        onClick={this.handleItemClick}
                    />
                </NavLink>
                <NavLink to="/infor">
                    <Menu.Item
                        name='ข้อมูลอุปกรณ์'
                        active={activeItem === 'ข้อมูลอุปกรณ์'}
                        onClick={this.handleItemClick}
                    />
                </NavLink>

                {/* Sidebar */}
                <NavLink to="/setlocation">
                    <Menu.Item
                        name='ตั้งค่าอุปกรณ์'
                        active={activeItem === 'ตั้งค่าอุปกรณ์'}
                        onClick={this.handleItemClick}
                    />
                </NavLink>

                <Menu.Item
                    name='Profile : admin'
                    position='right'
                />
                {/* ออกจากระบบ */}
                <NavLink to="#">
                    <Menu.Item
                        name='ออกจากระบบ'
                        active={activeItem === 'ออกจากระบบ'}
                        onClick={this.logOut.bind(this)}
                        position='right'
                    />
                </NavLink>
            </Menu>
        )
        const userLink = (
            <Menu inverted pointing secondary>
                {/* <Menu.Item name='sidebar'
                    active={activeItem === 'sidebar'}
                    onClick={this.handleShowClick} /> */}

                <NavLink to="/">
                    <Menu.Item name='หน้าหลัก'
                        active={activeItem === 'หน้าหลัก'}
                        onClick={this.handleItemClick} />
                </NavLink>
                <NavLink to="/howto">
                    <Menu.Item
                        name='วิธีการใช้งาน'
                        active={activeItem === 'วิธีการใช้งาน'}
                        onClick={this.handleItemClick}
                    />
                </NavLink>
                <NavLink to="/infor">
                    <Menu.Item
                        name='ข้อมูลอุปกรณ์'
                        active={activeItem === 'ข้อมูลอุปกรณ์'}
                        onClick={this.handleItemClick}
                    />
                </NavLink>
                <NavLink to="/contact">
                    <Menu.Item
                        name='ติดต่อ'
                        active={activeItem === 'ติดต่อ'}
                        onClick={this.handleItemClick}
                    />
                </NavLink>
                <NavLink to="/monitoring">
                    <Menu.Item
                        name='การตรวจสอบ'
                        active={activeItem === 'การตรวจสอบ'}
                        onClick={this.handleItemClick}
                    />
                </NavLink>
                <NavLink to="/notification">
                    <Menu.Item
                        name='ระบบแจ้งเตือน'
                        active={activeItem === 'ระบบแจ้งเตือน'}
                        onClick={this.handleItemClick}
                    />
                </NavLink>
                <NavLink to="/history">
                    <Menu.Item
                        name='ประวัติย้อนหลัง'
                        active={activeItem === 'ประวัติย้อนหลัง'}
                        onClick={this.handleItemClick}
                    />
                </NavLink>

                <Menu.Item
                    name='Profile : user'
                    position='right'
                />
                {/* ออกจากระบบ */}
                <NavLink to="#">
                    <Menu.Item
                        name='ออกจากระบบ'
                        active={activeItem === 'ออกจากระบบ'}
                        onClick={this.logOut.bind(this)}
                    />
                </NavLink>
            </Menu>
        )
        const Link = (
            <Menu inverted pointing secondary>
                {/* <Menu.Item name='sidebar'
                    active={activeItem === 'sidebar'}
                    onClick={this.handleShowClick} /> */}

                <NavLink to="/">
                    <Menu.Item name='หน้าหลัก'
                        active={activeItem === 'หน้าหลัก'}
                        onClick={this.handleItemClick} />
                </NavLink>
                <NavLink to="/howto">
                    <Menu.Item
                        name='วิธีการใช้งาน'
                        active={activeItem === 'วิธีการใช้งาน'}
                        onClick={this.handleItemClick}
                    />
                </NavLink>
                <NavLink to="/infor">
                    <Menu.Item
                        name='ข้อมูลอุปกรณ์'
                        active={activeItem === 'ข้อมูลอุปกรณ์'}
                        onClick={this.handleItemClick}
                    />
                </NavLink>
                <NavLink to="/contact">
                    <Menu.Item
                        name='ติดต่อ'
                        active={activeItem === 'ติดต่อ'}
                        onClick={this.handleItemClick}
                    />
                </NavLink>
                <Menu.Item
                    position='right'
                />
                <NavLink to="/login">
                    <Menu.Item
                        name='เข้าสู่ระบบ'
                        active={activeItem === 'เข้าสู่ระบบ'}
                        onClick={this.logOut.bind(this)}
                    />
                </NavLink>
            </Menu>
        )

        return (
            <div>
                <Sidebar.Pushable as={Segment}>
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
                        {/* <Segment basic> */}
                        <Segment inverted>
                            {sessionStorage.getItem('Login_add') ? adminLink : sessionStorage.getItem('Login_user') ? userLink : Link}
                        </Segment>
                        {/* </Segment> */}
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    }
}