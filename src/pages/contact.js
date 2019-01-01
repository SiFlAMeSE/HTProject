import React, { Component } from 'react';
import locationBG from '../img/BG_bl.jpg';

class contact extends Component {

    render() {
        const divStyle = {
            color: 'blue',
            backgroundImage: 'url(' + locationBG + ')',
        };

        return (
            <div >
                <section className="probootstrap-intro probootstrap-intro-inner" style={divStyle} data-stellar-background-ratio="0.5">
                                <br/><br/><br/><br/><br/><br/><br/><br/>
                                <center>
                                <h1>ข้อมูลติดต่อ</h1>
                                </center>
                                   
                    <span className="probootstrap-animate">
                        <a className="probootstrap-scroll-down js-next" href="#next-section">คลิกเลื่อน
                        <i className="icon-chevron-down"></i></a></span>
                </section>
                <div>
                    <section id="next-section" className="probootstrap-section">
                        <div className="container">
                            <div className="col-md-6">
                            {/* เขียนตรงนี้ */}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default contact;