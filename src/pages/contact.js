import React, { Component } from 'react';
import { Table, Container, Row, Col } from 'reactstrap';

class contact extends Component {

    render() {
        return (
            <div >

                <section id="space">
                    <div className="banner-h">
                        <div className="text-cobg">
                            ข้อมูลติดต่อ
                    </div>
                    </div>
                </section>
                <div>
                    <section>
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