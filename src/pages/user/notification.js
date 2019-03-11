import React, { Component } from 'react';
import { Table, Button, Input, FormGroup, Form, Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import SenserChoice from './Choice/SenserChoice';

var _mac, _dateP, mac, date, Build, Location;
var bu_num, Loca_num;
var data_ss;

class notification extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {}
        }

        this.state = {Senser: [] };

    }

    componentWillMount() {
        data_ss = JSON.parse(sessionStorage.getItem('Login_add'))
    }

    componentDidMount() {
        // axios.get('http://localhost:5000/history')
        //     .then(response => {
        //         const History = response.data;
        //         this.setState({ History: History });
        //         //console.log(History)
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     })

        axios.get('http://localhost:5000/sensers/senser_list')
            .then(response => {
                const Senser = response.data;
                this.setState({ Senser: Senser });
                //console.log(Senser);
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.get('http://localhost:5000/build/build_list')
            .then(response => {
                Build = response.data;
                bu_num = response.data.length;
                //this.setState({ Build: Build});
                //console.log(Build);
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.get('http://localhost:5000/locations/location_list')
            .then(response => {
                Location = response.data;
                Loca_num = response.data.length;
                //this.setState({ Location: Location });
                //console.log(Locatio);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    choice() {
        return this.state.Senser.map(function (object, i) {
            for (let z = 0; z < bu_num; z++) {
                if (object.Id_Build === Build[z]._id) {
                    for (let y = 0; y < Loca_num; y++) {
                        if (Build[z].Id_Loca === Location[y]._id) {
                            if (data_ss._id === Location[y].Id_Admin) {
                                return <SenserChoice obj={object} key={i} />;
                            }
                        }
                    }
                }
            }
            return true
        });
    }

    render() {
        return (
            <div>
                <section id="space">
                    <div className="banner-h">
                        <div className="text-cobg">
                            ระบบการแจ้งเตือน
                    </div>
                    </div>
                </section>
                <div>
                    <Container>
                        <FormGroup>
                            <Row align="center">
                                <Col>
                                    <Input type="select" name="select" id="font">
                                        <option value="undefined">เลือกเซนเซอร์</option>
                                        {this.choice()}
                                    </Input>
                                </Col>

                                <Col>
                                    <Input type="select" name="select" id="font">
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