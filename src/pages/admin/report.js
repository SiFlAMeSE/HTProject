import React from 'react';
import { Table, Button, Input, FormGroup, Form, Container, Row, Col, Label } from 'reactstrap';
import locationBG from '../../img/BG_bl.jpg';

export default class report extends React.Component {
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
                        <h1>รายงาน</h1>
                    </center>

                    <span className="probootstrap-animate">
                        <a className="probootstrap-scroll-down js-next" href="#next-section">คลิกเลื่อน
                        <i className="icon-chevron-down"></i></a></span>
                </section>
                <div>
                    <section id="next-section" className="probootstrap-section">
                        <Container>
                            <FormGroup>
                                <Row><Label for="exampleSelect">Total All Reports in system : value in Database</Label></Row>
                                <Row align="center">
                                    <Col>
                                        <Input type="select" name="select">
                                            <option>ประเภทรายงาน</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </Input>
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
                                            <th>ประเภท</th>
                                            <th>รายงาน</th>
                                            <th>ข้อมูลที่ตรวจวัด</th>
                                            <th>โหลด</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Detail1</td>
                                            <td>Detail1</td>
                                            <td>Detail1</td>
                                            <td><Button color="success">โหลด</Button>{' '}</td>
                                        </tr>
                                        <tr>
                                            <td>Detail2</td>
                                            <td>Detail2</td>
                                            <td>Detail2</td>
                                            <td><Button color="success">โหลด</Button>{' '}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Form>
                        </Container>
                    </section>
                </div>
            </div>
        );
    }
}