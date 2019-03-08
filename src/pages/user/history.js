import React, { Component } from 'react';
import { Table, Button, Input, Form, Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import Tablehistory from './Tabalhistory';
import SenserChoice from './Choice/SenserChoice';
import moment from 'moment';
import JsonToExcel from 'react-json-excel';

var _mac, _dateP, mac, date, Build, Location;
var bu_num, Loca_num;
var data_ss;

const className = 'class-name-for-style',
    filename = 'Excel-file',
    fields = {
        "index": "Index",
        "guid": "GUID"
    },
    style = {
        padding: "5px"
    },
    data = [
        { index: 0, guid: 'asdf231234' },
        { index: 1, guid: 'wetr2343af' }
    ];

class history extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {}
        }

        this.state = { History: [], Senser: [] };

    }

    componentWillMount() {
        _mac = this.props.match.params.id
        _dateP = this.props.match.params.date
        // var test = moment('2019-02-18 08:37:51.968Z').format('YYYY-MM-DD')
        //console.log(test)
        console.log(_mac)
        console.log(_dateP)
        data_ss = JSON.parse(sessionStorage.getItem('Login_add'))
    }

    componentDidMount() {
        axios.get('http://localhost:5000/history')
            .then(response => {
                const History = response.data;
                this.setState({ History: History });
                //console.log(History)
            })
            .catch(function (error) {
                console.log(error);
            })

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

    onchangeDate(e) {
        date = e.target.value
        //console.log(date)
    }

    // onSubmit(e) {
    //     window.location.replace('/history/' + this.state.mac)
    //     console.log(this.state.mac)
    // }

    sentid = (e) => {
        window.location.replace('/history/' + mac + '/' + date)
    }

    sentEx = (e) => {
       return <JsonToExcel
            data={data}
            className={className}
            filename={filename}
            fields={fields}
            style={style}
        />
    }

    tabRow() {
        return this.state.History.map((object, i) => {
            const _date = moment(object.date).format('YYYY-MM-DD')
            var set = "undefined"
            //console.log(set)
            if (_mac !== set && _dateP === set) {
                if (_mac === object.mac) {
                    return <Tablehistory obj={object} key={i} />;
                } else
                    return false
            }
            else if (_mac === set && _dateP !== set) {
                if (_dateP === _date) {
                    return <Tablehistory obj={object} key={i} />;
                } else
                    return false
            }
            else if (_mac !== set && _dateP !== set) {
                if (_mac === object.mac && _dateP === _date) {
                    return <Tablehistory obj={object} key={i} />;
                } else
                    return false
            } else
                return false
        });
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
        //console.log(this.state.Build);
        return (
            <div>
                <div>
                    <section id="space">
                        <div className="banner-h">
                            <div className="text-cobg">
                                ประวัติย้อนหลัง
                    </div>
                        </div>
                    </section>
                    <Container>
                        <Form>
                            <Row align="center">
                                <Col>
                                    <Input type="select" name="select" onChange={this.onchangeMAC}>
                                        <option value="undefined">เลือกเซนเซอร์</option>
                                        {this.choice()}
                                    </Input>
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
                                    <Button color="success" onClick={(e) => this.sentid(e)}>ค้นหา</Button>
                                    <Button color="success" onClick={(e) => this.sentEx(e)}>ส่งออก</Button>
                                </Col>
                            </Row>
                        </Form>
                        <Form>
                            <Table bordered>
                                <thead>
                                    <tr>
                                        <td>อุณหภูมิ</td>
                                        <td>ความชื้น</td>
                                        <td>รหัสเครื่อง</td>
                                        <td>วันที่และเวลา</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.tabRow()}
                                </tbody>
                            </Table>
                        </Form>
                    </Container>

                </div>
            </div >
        );
    }
}

export default history;