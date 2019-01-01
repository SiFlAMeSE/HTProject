import React, { Component } from 'react';
import { Table, Button, Input, FormGroup, Form, Container, Row, Col } from 'reactstrap';
import locationBG from '../../img/BG_bl.jpg';

class notification extends Component {
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
                        <h1>ระบบแจ้งเตือน</h1>
                    </center>

                    <span className="probootstrap-animate">
                        <a className="probootstrap-scroll-down js-next" href="#next-section">คลิกเลื่อน
                        <i className="icon-chevron-down"></i></a></span>
                </section>
                <div>
                    <section id="next-section" className="probootstrap-section">
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
                    </section>
                </div>


                <br /><br /><br />
            </div>
        );
    }
}

export default notification;