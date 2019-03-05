import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'
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
    DropdownItem
} from 'reactstrap';


var data_ss;
export default class header2 extends Component {
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
        return <div className="fonthead">{data_ss.Positions}   :   {data_ss.Fname}</div>
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {



        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <NavbarToggler onClick={(e) => this.toggle(e)} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/">Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
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
                </Navbar>
            </div>
        )
    }
}