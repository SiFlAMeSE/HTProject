import React from 'react';
import { Table, Button, Input, FormGroup, Form, Container, Row, Col } from 'reactstrap';

export default class dashboard extends React.Component {
    render() {
        return (
            <div>
                <section id="space">
                    <div className="banner-h">
                        <div className="text-cobg">
                            แผงควบคุม
                    </div>
                    </div>
                </section>
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
            </div >

        );
    }
}