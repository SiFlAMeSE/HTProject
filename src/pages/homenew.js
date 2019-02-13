import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import locationBG from '../img/BG_bl.jpg';

class homenew extends Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     data: {}
    //   }
    //   // const save = sessionStorage
    //   // alert("Login_user, " + sessionStorage.getItem("Fname"))
    //   // console.log(save)
    // }

    // componentWillMount() {
    //   var ss = JSON.parse(sessionStorage.getItem('Login_user'))
    //   this.setState({ data: ss })
    //   // console.log('first')

    // }

    render() {

        return (
            <div>
                <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-interval="10000">
                            <img src={require('../img/cover.jpg')} className="d-block w-100" width="820px" height="610px" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default homenew;
