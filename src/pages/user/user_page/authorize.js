import React, { Component } from 'react';
import { Form, Col, Row, Input, Button, Container } from 'reactstrap'

class authorize extends Component {
    render() {
        return (
            <>
                <section id="space">
                    <div className="banner-h">
                        <div className="text-cobg">
                            เข้าใช้งานสำหรับดูข้อมูล
                    </div>
                    </div>
                </section>
                <Container>
                    <Form>
                        <Row>
                            <Col>
                                <Input placeholder="กรุณากรอกรหัส" />
                            </Col>
                            <Col>
                                <Button type="submit" color="primary">ตกลง</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>

            </>
        );
    }
}

export default authorize;