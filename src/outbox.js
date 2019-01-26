import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

class outbox extends Component {
    constructor() {
        super()
        this.state = {
            User_g: '',
            Fname: ''
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            User_g: decoded.User_g,
            Fname: decoded.Fname
        })
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">PROFILE</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td>User</td>
                                <td>{this.state.User_g}</td>
                            </tr>
                            <tr>
                                <td>Fname</td>
                                <td>{this.state.Fname}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default outbox