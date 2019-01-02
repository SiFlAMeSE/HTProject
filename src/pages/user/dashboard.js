import React from 'react';
import { Table, Button, Input, FormGroup, Form, Container, Row, Col } from 'reactstrap';
import locationBG from '../../img/BG_bl.jpg';

export default class dashboard extends React.Component {
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
                        <h1>แผงควบคุม</h1>
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
                                            <option>Workplace</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </Input>
                                    </Col>

                                    <Col>
                                        <Input type="select" name="select" >
                                            <option>Department</option>
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
                                            <th>สถานที่</th>
                                            <th>การตั้งค่า</th>
                                            <th>สถานะปัจจุบัน</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>รายละเอียด1</td>
                                            <td>รายละเอียด1</td>
                                            <td>รายละเอียด1</td>
                                        </tr>
                                        <tr>
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