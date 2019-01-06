import React from 'react';
import { Table, Button, Input, FormGroup, Form, Container, Row, Col, Label } from 'reactstrap';
import locationBG from '../../img/BG_bl.jpg';

export default class set_location extends React.Component {
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
                        <h1>ลงทะเบียนอาคาร</h1>
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
                                        <Label>ชื่อสถานที่</Label>
                                        <Input type="text" name="location" placeholder="ใส่ชื่อสถานที่"></Input>
                                    </Col>
                                </Row>
                                <br/>
                                <Row>
                                    <Col>
                                        <Label>ที่อยู่</Label>
                                        <Input type="textarea" cols="30" rows="10"></Input>
                                    </Col>
                                </Row>
                                <br/>
                                <Row>
                                    <Col>
                                        <Button color="success">ตกลง</Button>{' '}
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