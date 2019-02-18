import React, { Component } from 'react';
import './css/footer.css';

class footer extends Component {
    render() {
        return (

            <footer className="bg-footer">
                <center>
                    ติดต่อ
                        <br />
                    <span>นายสิรศักดิ์  สุนทรท้วม  5802041610089</span> &nbsp;&nbsp;
                        <i className="icon-phone2"></i>&nbsp;<span>094-931-2638</span>
                    <br />
                    <span>นายสมโภชน์  สระทองแง๊ก  5802041620203</span> &nbsp;&nbsp;
                        <i className="icon-phone2"></i>&nbsp;<span>092-493-6145</span>
                </center>
                <div className="bg-foot-low" align="center" >Copyright © 2019 Project Temperature And Humidnity</div>
            </footer>


        );
    }
}

export default footer;
