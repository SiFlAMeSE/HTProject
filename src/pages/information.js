import React, { Component } from 'react';
import { Table, Container, Row, Col } from 'reactstrap';
class infor extends Component {
    render() {
        return (
            <information>
                <section id="space">
                    <div className="banner-h">
                        <div className="text-cobg">
                            ข้อมูลอุปกรณ์
                    </div>
                    </div>
                </section>
                <div>
                    <section>
                        <Container>
                            <Table>
                                <Row>
                                    <Col><img width="480px" height="520px" src={require('../img/esp32.png')} alt="esp32" /></Col>
                                    <Col sm="6"><h1>นายสิรศักดิ์  สุนทรท้วม</h1>คณะครุศาสตร์อุตสาหกรรม ชั้นปีที่ 4</Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col sm="6"><h1>นายสมโภชน์  สระทองแง๊ก</h1>คณะครุศาสตร์อุตสาหกรรม ชั้นปีที่ 4</Col>
                                    <Col><img width="420px" height="520px" src={require('../img/dht22.png')} alt="sensor" /></Col>
                                </Row>
                            </Table>
                        </Container>
                    </section>
                </div>
            </information>
        );
    }
}

export default infor;