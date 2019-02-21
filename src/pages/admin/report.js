import React from 'react';
import { Table, Button, Input, FormGroup, Form, Container, Row, Col, Label } from 'reactstrap';
export default class report extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <section id="space">
                        <div className="banner-h">
                            <div className="text-cobg">
                                test
                    </div>
                        </div>
                    </section>
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
                </div>
            </div>
        );
    }
}