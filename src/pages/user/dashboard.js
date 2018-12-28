import React from 'react';
import { Table , Button } from 'reactstrap';
import locationBG from '../../img/BG_bl.jpg';

export default class dashboard extends React.Component {
    render() {
        const divStyle = {
            color: 'blue',
            backgroundImage: 'url(' + locationBG + ')',
        };
        return (
            <div>
                <section className="probootstrap-intro probootstrap-intro-inner" style={divStyle} data-stellar-background-ratio="0.5">
                    <br /><br /><br /><br /><br /><br /><br /><br />
                    <center>
                        <h1>แผงควบคุม</h1>
                    </center>

                    <span className="probootstrap-animate">
                        <a className="probootstrap-scroll-down js-next" href="#next-section">คลิกเลื่อน
                        <i className="icon-chevron-down"></i></a></span>
                </section>
                <div>
                    <section id="next-section" className="probootstrap-section">
                        <div className="container">
                            
                        <Button color="success">ตกลง</Button>{' '}
                                <br/><br/>
                                <Table bordered>
                                    <thead>
                                        <tr>
                                            <th>Location</th>
                                            <th>Location Statistic</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Detail1</td>
                                            <td>Detail1</td>
                                            <td>Detail1</td>
                                        </tr>
                                        <tr>
                                            <td>Detail2</td>
                                            <td>Detail2</td>
                                            <td>Detail2</td>
                                        </tr>
                                    </tbody>
                                </Table>
                           
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}