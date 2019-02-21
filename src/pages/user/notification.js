import React, { Component } from 'react';
import { Table, Button, Input, FormGroup, Form, Container, Row, Col } from 'reactstrap';

class notification extends Component {
    render() {
        return (
            <div>
                <section id="space">
                    <div className="banner-h">
                        <div className="text-cobg">
                            test
                    </div>
                    </div>
                </section>
                <div>
                    <Container>
                        <FormGroup>
                            <Row align="center">
                                <Col>
                                    <Input type="select" name="select">
                                        <option>ชั้น</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </Input>
                                </Col>

                                <Col>
                                    <Input type="select" name="select" >
                                        <option>ประเภทการแจ้งเตือน</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </Input>
                                </Col>

                                <Col>
                                    <Input
                                        type="date"
                                        name="date"
                                        id="exampleDate"
                                        placeholder="ระบุวันเดือนปี"
                                    />
                                </Col>

                                <Col>
                                    <Button color="success">ตกลง</Button>{' '}
                                </Col>
                            </Row>
                        </FormGroup>
                        <Form>
                            <Table bordered>
                                <thead>
                                    <tr>
                                        <th>ลักษณะการเตือน</th>
                                        <th>สถานที่</th>
                                        <th>การตั้งค่าอุปกรณ์</th>
                                        <th>สถานะ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>รายละเอียด1</td>
                                        <td>รายละเอียด1</td>
                                        <td>รายละเอียด1</td>
                                        <td>รายละเอียด1</td>
                                    </tr>
                                    <tr>
                                        <td>รายละเอียด2</td>
                                        <td>รายละเอียด2</td>
                                        <td>รายละเอียด2</td>
                                        <td>รายละเอียด2</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Form>
                    </Container>
                </div>
            </div>
        );
    }
}

export default notification;