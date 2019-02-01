import React, { Component } from 'react';

class footer extends Component {
    render() {
        return (
            <footer className="probootstrap-footer">
                <div className="probootstrap-backtotop">
                <a href="/" className="js-backtotop">
                <i className="icon-chevron-thin-up"></i></a></div>
                <div className="container">
                    <div className="row">
                        <ul className="probootstrap-footer-widget">
                        <center>
                        <h4>ติดต่อ</h4>
                        <span>นายสิรศักดิ์  สุนทรท้วม  5802041610089</span> &nbsp;&nbsp; 
                        <i className="icon-phone2"></i>&nbsp;<span>094-931-2638</span>
                        <br/>
                        <span>นายสมโภชน์  สระทองแง๊ก  5802041620203</span> &nbsp;&nbsp; 
                        <i className="icon-phone2"></i>&nbsp;<span>092-493-6145</span>
                        </center>
                        </ul>
                    </div>
                </div>
            </footer>

        );
    }
}

export default footer;
