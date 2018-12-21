import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
// import Sidebar from "react-sidebar";


class header extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       sidebarOpen: true
    //     };
    //     this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    //   }
     
    //   onSetSidebarOpen(open) {
    //     this.setState({ sidebarOpen: open });
    //   }
    render() {
         return (
            <header role="banner" className="probootstrap-header">
                <div className="container-fluid">

                {/* <Sidebar
        sidebar={<b>Sidebar content</b>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white" } }}
      >
        <button onClick={() => this.onSetSidebarOpen(true)}>
          Open sidebar
        </button>
      </Sidebar> */}

                    <a href="/" className="probootstrap-logo">Monitor<span>.</span></a>

                    <a href="#" className="probootstrap-burger-menu visible-xs" ><i>Menu</i></a>
                    <div className="mobile-menu-overlay"></div>

                    <nav role="navigation" className="probootstrap-nav hidden-xs">
                        <ul className="probootstrap-main-nav">
                            <li>

                                <a href="/">Home</a></li>
                            <li><NavLink to="/howto">How to use</NavLink></li>
                            <li><NavLink to="/infor">Information</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>

                        </ul>
                        <ul className="probootstrap-header-social hidden-xs">
                            <li><a target="_blank" href="https://www.facebook.com"><i className="icon-facebook2"></i></a></li>
                            <li><a target="_blank" href="https://www.instagram.com/"><i className="icon-instagram2"></i></a></li>
                        </ul>
                        <div className="extra-text visible-xs">
                            <a href="#" className="probootstrap-burger-menu"><i>Menu</i></a>
                            <h5>Connect With Me</h5>
                            <ul className="social-buttons">
                                <li><a href="https://www.facebook.com"><i className="icon-facebook2"></i></a></li>
                                <li><a href="https://www.instagram.com/"><i className="icon-instagram2"></i></a></li>
                            </ul>
                        </div>
                    </nav>
                </div>


            </header>
        );
    }
}
export default header;