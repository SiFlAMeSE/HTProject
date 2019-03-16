import React, { Component } from 'react';
import { Row, Col, Form } from 'reactstrap';

class howto extends Component {
    render() {
        return (
            <div>
                <section id="space">
                    <div className="banner-h">
                        <div className="text-cobg">
                            วิธีการใช้งาน
                    </div>
                    </div>
                </section>
                <div>
                    <section style={{ paddingLeft: '30vh', paddingRight: '30vh' }}>
                        <Form>
                            <Row align="center" >
                                <Col xs={6}>ผู้ใช้งาน</Col>
                                <Col xs={6}>ผู้ดูแลระบบ</Col>
                            </Row>
                            <Row>
                                <Col>อิอิ</Col>
                                <Col>อิอิ</Col>
                            </Row>
                            <Row>
                                <Col>อิอิ</Col>
                                <Col>อิอิ</Col>
                            </Row>
                        </Form>

                    </section>
                </div>
            </div>

        );
    }
}

export default howto;