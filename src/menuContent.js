import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './menuContent.css'

class MenuContent extends Component {
  // constructor(props) {
  //   super(props)

  //   this.items = []
  //   for (let i=1; i<=5; i++) {
  //     this.items.push(i)
  //   }
  // }

  render() {
    return (
      <div>
        {/* {this.items.map(i => <div className="menu-item" key={i}>
          <a
            href="https://github.com/Middlerun/cheeseburger-menu"
            onClick={this.props.closeCallback}
            target="_blank">
            Menu item {i}
          </a>
        </div>)}

        <p className="hint">Click outside the menu to close it, or swipe it closed on touch device</p> */}
        <br/><br/><br/><br/>
        <div className="menu-item">
        <NavLink to="/monitoring" onClick={this.props.closeCallback}>Monitering</NavLink>
        <NavLink to="/dashboard" onClick={this.props.closeCallback}>Dashboard</NavLink>
        <NavLink to="/notification" onClick={this.props.closeCallback}>Notification</NavLink>
        <NavLink to="/history" onClick={this.props.closeCallback}>History</NavLink>
        <NavLink to="/report" onClick={this.props.closeCallback}>Reports</NavLink>
        <NavLink to="/setting" onClick={this.props.closeCallback}>Setting</NavLink>
        </div>
         
      </div>
    )
  }
}

export default MenuContent
