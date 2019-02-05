import React, { Component } from 'react';
import { Table, Container, Row, Col } from 'reactstrap';
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
                    <br /><br /><br /><br /><br /><br /><br /><br />
                    <center>
                        <h1>ผู้พัฒนาระบบ</h1>
                    </center>

                    <span className="probootstrap-animate">
                        <a className="probootstrap-scroll-down js-next" href="#next-section">คลิกเลื่อน
                        <i className="icon-chevron-down"></i></a></span>
                </section>
                <div>
                    <section id="next-section" className="probootstrap-section">
                        <Container>
                            <Table>
                                <Row>
                                    <Col><img width="410px" height="520px" src={require('../img/flame.jpg')} /></Col>
                                    <Col sm="6"><h1>นายสิรศักดิ์  สุนทรท้วม</h1>คณะครุศาสตร์อุตสาหกรรม ชั้นปีที่ 4</Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col sm="6"><h1>นายสมโภชน์  สระทองแง๊ก</h1>คณะครุศาสตร์อุตสาหกรรม ชั้นปีที่ 4</Col>
                                    <Col><img width="420px" height="520px" src={require('../img/thiey.jpg')} /></Col>
                                </Row>
                            </Table>
                        </Container>
                    </section>
                </div>
            </div>
        );
    }
}

export default contact;