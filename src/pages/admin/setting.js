import React from 'react';
import { Table, Button, Input, FormGroup, Form, Container, Row, Col, Label } from 'reactstrap';
import locationBG from '../../img/BG_bl.jpg';

export default class setting extends React.Component {
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
                        <h1>ตั้งค่าอุปกรณ์</h1>
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
                                    <Col>
                                        <Input type="text" name="location" placeholder="ใส่ชื่อสถานที่"></Input>
                                    </Col>
                                    <Col>
                                        <Button color="success">ตกลง</Button>{' '}
                                    </Col>
                                    <Col span="2"></Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Label>รหัสสถานที่</Label>
                                        <Input type="text" name="key" placeholder="ลงทะเบียนคีย์ที่ต้องการ"></Input>
                                    </Col>
                                    <Col span="3"></Col>
                                </Row>
                                <Row>
                                    <Col span="3"></Col>
                                    <Col>
                                        <Label>จุดที่ตั้ง</Label>
                                        <Input type="text" name="name" placeholder="ตำแหน่ง"></Input>
                                        <Label>รหัสอุปกรณ์</Label>
                                        <Input type="text" name="mac" placeholder="Mac Address"></Input>

                                        <Table>
                                            <Row>
                                                <Col>
                                                    <Label>ค่าอุณหภูมิต่ำสุด</Label>
                                                    <Input type="text" name="mintem" placeholder="ค่าน้อยสุด"></Input>
                                                </Col>
                                                <Col>
                                                    <Label>ค่าอุณหภูมิสูงสุด</Label>
                                                    <Input type="text" name="maxtem" placeholder="ค่ามากสุด"></Input>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Label>ค่าความชื้นต่ำสุด</Label>
                                                    <Input type="text" name="minhum" placeholder="ค่าน้อยสุด"></Input>
                                                </Col>
                                                <Col>
                                                    <Label>ค่าความชื้นสูงสุด</Label>
                                                    <Input type="text" name="maxhum" placeholder="ค่ามากสุด"></Input>
                                                </Col>
                                            </Row>
                                        </Table>

                                    </Col>

                                </Row>
                            </Table>

                        </Container>
                    </section>
                </div>
            </div>
        );
    }
}