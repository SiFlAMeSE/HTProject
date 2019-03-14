import React, { Component } from 'react';
import { Table, Button, Input, Form, Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import Tablehistory from '../Tabalhistory';
import SenserChoice from '../Choice/SenserChoice';
import moment from 'moment';
import { CSVLink } from "react-csv";

var _mac, _dateP, mac, date, Build, Location, Senser, Authorize;
var sen_num, bu_num, Loca_num, aut_num;
var data_ss, csv_num = 0;
const headers = [
    { label: "ID", key: "_id" },
    { label: "Temperature", key: "t" },
    { label: "Humidity", key: "h" },
    { label: "MAC Address", key: "mac" },
    { label: "Date", key: "date" }
];
const csvData = [];

class history_user extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {}
        }

        this.state = { History: [], Senser: [], Authorize: [], Build: [], Location: []};

    }

    componentWillMount() {
        _mac = this.props.match.params.id
        _dateP = this.props.match.params.date
        // var test = moment('2019-02-18 08:37:51.968Z').format('YYYY-MM-DD')
        //console.log(test)
        console.log(_mac)
        console.log(_dateP)
        data_ss = JSON.parse(sessionStorage.getItem('Login_user'))
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

        axios.get('http://localhost:5000/authorize/authorize_list')
            .then(response => {
                Authorize = response.data;
                aut_num = response.data.length;
                // this.setState({ Authorize });
                // console.log(Authorize);
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.get('http://localhost:5000/sensers/senser_list')
            .then(response => {
                Senser = response.data;
                sen_num = response.data.length;
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
        window.location.replace('/user/history/' + mac + '/' + date)
    }

    sentEx = (e) => {
        return <CSVLink data={csvData} headers={headers}><img width="180px" src={require('../../../img/downloadEx.png')} /></CSVLink>
    }

    tabRow() {
        return this.state.History.map((object, i) => {
            const _date = moment(object.date).format('YYYY-MM-DD')
            var set = "undefined"
            //console.log(set)
            if (_mac !== set && _dateP === set) {
                if (_mac === object.mac) {
                    csvData[csv_num] = object
                    csv_num = csv_num + 1
                    return <Tablehistory obj={object} key={i} />;
                } else
                    return false
            }
            else if (_mac === set && _dateP !== set) {
                if (_dateP === _date) {
                    csvData[csv_num] = object
                    csv_num = csv_num + 1
                    return <Tablehistory obj={object} key={i} />;
                } else
                    return false
            }
            else if (_mac !== set && _dateP !== set) {
                if (_mac === object.mac && _dateP === _date) {
                    csvData[csv_num] = object
                    csv_num = csv_num + 1
                    return <Tablehistory obj={object} key={i} />;
                } else
                    return false
            } else
                return false
        });
    }

    choice() {
        // return this.state.Senser.map(function (object, i) {
        //     for (let z = 0; z < bu_num; z++) {
        //         if (object.Id_Build === Build[z]._id) {
        //             for (let y = 0; y < Loca_num; y++) {
        //                 if (Build[z].Id_Loca === Location[y]._id) {
        //                     if (data_ss._id === Location[y].Id_Admin) {
        //                         return <SenserChoice obj={object} key={i} />;
        //                     }
        //                 }
        //             }
        //         }
        //     }
        //     return true
        // });
        return this.state.Senser.map(function (object, i) {
            for (let z = 0; z < bu_num; z++) {
                if (object.Id_Build === Build[z]._id) {
                    for (let y = 0; y < Loca_num; y++) {
                        if (Build[z].Id_Loca === Location[y]._id) {
                            for (let i = 0; i < aut_num; i++) {
                                if (object.Key_Room === Authorize[i].Key_Room) {
                                    if (data_ss._id === Authorize[i].Id_User) {
                                        return <SenserChoice obj={object} key={i} />;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
    }

    render() {
        console.log(csv_num);
        console.log(csvData);
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
                            <Row>
                                <Col style={{ paddingTop: '25px',paddingLeft: '70px' }}>
                                    <Input type="select" name="select" onChange={this.onchangeMAC}>
                                        <option value="undefined">เลือกเซนเซอร์</option>
                                        {this.choice()}
                                    </Input>
                                </Col>

                                <Col style={{ paddingTop: '25px' }}>
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
                                    {this.sentEx()}
                                </Col>

                            </Row>



                        </Form>
                        <Form id="spacetop">
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

export default history_user;