import React, { Component } from 'react';
import { Table, Button, Input, FormGroup, Form, Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import SenserChoice from './Choice/SenserChoice';

var _mac, _dateP, _t, _h, _s_error;
var mac, date, t, h, s_error, Build, Location;
var bu_num, Loca_num;
var data_ss;

class notification extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {}
        }

        this.state = { Senser: [] };

    }

    componentWillMount() {
        _mac = this.props.match.params.id
        _s_error = this.props.match.params.error
        _t = this.props.match.params.t
        _h = this.props.match.params.h
        _dateP = this.props.match.params.date
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

    onchangeMAC(e) {
        mac = e.target.value
    }

    onchangeError(e){
        s_error = e.target.value
    }

    onchangeT(e){
        t = e.target.value
    }

    onchangeH(e){
        h = e.target.value
    }

    onchangeDate(e) {
        date = e.target.value
        //console.log(date)
    }

    sentid = (e) => {
        window.location.replace('/notification/' + mac +'/' + s_error + '/' + t + '/' + h + '/' + date)
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
                                    <Input type="select" name="select" id="font" onChange={this.onchangeMAC}>
                                        <option value="undefined">เลือกเซนเซอร์</option>
                                        {this.choice()}
                                    </Input>
                                </Col>

                                <Col>
                                        <label>
                                            ประเภทการแจ้งเตือน
                                            <div>
                                                <input
                                                    name="error"
                                                    type="checkbox"
                                                    value="error"
                                                    onChange={this.onchangeError} />ข้อบกพร่องของอุปกรณ์
                                                    <span style={{ paddingRight: '15px' }} />
                                                <input
                                                    name="max_t"
                                                    type="checkbox"
                                                    value="max_t"
                                                    onChange={this.onchangeT} />ข้อบกพร่องของอุณหภูมิ
                                                    <span style={{ paddingRight: '15px' }} />
                                                <input
                                                    name="max_h"
                                                    type="checkbox"
                                                    value="max_h"
                                                    onChange={this.onchangeH} />ข้อบกพร่องของความชื้น
                                                    <span style={{ paddingRight: '15px' }} />
                                            </div>
                                        </label>
                                </Col>

                                <Col>
                                    <Input
                                        type="date"
                                        name="date"
                                        id="exampleDate"
                                        placeholder="ระบุวันเดือนปี"
                                        onChange={this.onchangeDate}
                                    />
                                </Col>

                                <Col>
                                    <Button color="primary" onClick={(e) => this.sentid(e)}>ค้นหา</Button>
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
                                        <th>วันที่และเวลา</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>รายละเอียด1</td>
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