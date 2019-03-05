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
                                    <Col><img width="485px" height="425px" src={require('../img/esp32.png')} alt="esp32" /></Col>
                                    <Col sm="6"><h1>Node ESP32</h1>ตัวกลางการเชื่อมต่อระหว่างอุปกรณ์และอินเตอร์เน็ต</Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col sm="6"><h1>DHT22</h1>ทำการส่งข้อมูลอุณหภูมิและความชื้นไปให้โหนด Node ESP32</Col>
                                    <Col><img width="260px" height="340px" src={require('../img/dht22.png')} alt="sensor" /></Col>
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