import React, { Component } from 'react';
import { Table, Button, Input, FormGroup, Form, Row, Col } from 'reactstrap';
import axios from 'axios';
import SenserChoice from './Choice/SenserChoice';
import WarnSenser from './TabalNotification';
import moment from 'moment';

var _mac, _dateP, _t, _h, _s_error;
var mac, date, t, h, s_error, Build, Location, Senser;
var bu_num, Loca_num, num = 0;
var data_ss;
var loca = [];
var set = "undefined";
var _mass;

class notification extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {}
        }

        this.state = { Senser: [], WarnTH: [], WarnSenser: [], Build: [], Location: [] };

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
        axios.get('http://206.189.94.192:5000/WarnTempHumid')
            .then(response => {
                const WarnTH = response.data;
                this.setState({ WarnTH: WarnTH });
                console.log(WarnTH)
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.get('http://206.189.94.192:5000/WarnSenser')
            .then(response => {
                const WarnSenser = response.data;
                this.setState({ WarnSenser: WarnSenser });
                console.log(WarnSenser)
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.get('http://206.189.94.192:5000/sensers/senser_list')
            .then(response => {
                Senser = response.data;
                this.setState({ Senser: Senser });
                //console.log(Senser);
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.get('http://206.189.94.192:5000/build/build_list')
            .then(response => {
                Build = response.data;
                bu_num = response.data.length;
                this.setState({ Build: Build });
                //console.log(Build);
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.get('http://206.189.94.192:5000/locations/location_list')
            .then(response => {
                Location = response.data;
                Loca_num = response.data.length;
                this.setState({ Location: Location });
                //console.log(Locatio);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onchangeMAC(e) {
        mac = e.target.value
    }

    onchangeError(e) {
        s_error = e.target.value
    }

    onchangeT(e) {
        t = e.target.value
    }

    onchangeH(e) {
        h = e.target.value
    }

    onchangeDate(e) {
        date = e.target.value
        //console.log(date)
    }

    sentid = (e) => {
        window.location.replace('/notification/' + mac + '/' + s_error + '/' + t + '/' + h + '/' + date)
    }

    tabRow1() {
        return this.state.WarnSenser.map(function (object, i) {
            const _date = moment(object.date).format('YYYY-MM-DD')
            if (_s_error !== set) {
                if (_mac !== set && _dateP === set) {
                    if (_mac === object.Id_MAC) {
                        for (i = 0; i < loca.length; i++) {
                            if (_mac === loca[i].Macaddress) {
                                const show = {
                                    mass: "ข้อบกพร่องของอุปกรณ์",
                                    location: "สถานที่ : " + loca[i].Name_Lo + "อาคาร : " + loca[i].Name_Build + "ห้อง : " + loca[i].Position,
                                    max_t: loca[i].Temp_Hight,
                                    min_t: loca[i].Temp_Low,
                                    max_h: loca[i].Humdi_Hight,
                                    min_h: loca[i].Humdi_Low,
                                    t: " - ",
                                    h: " - ",
                                    error: object.Message,
                                    mac: loca[i].Macaddress,
                                    date: object.date
                                }
                                return <WarnSenser obj={show} />
                            }
                        }
                    }
                }
                else if (_mac === set && _dateP !== set) {
                    if (_dateP === _date) {
                        for (i = 0; i < loca.length; i++) {
                            if (object.Id_MAC === loca[i].Macaddress) {
                                const show = {
                                    mass: "ข้อบกพร่องของอุปกรณ์",
                                    location: "สถานที่ : " + loca[i].Name_Lo + "อาคาร : " + loca[i].Name_Build + "ห้อง : " + loca[i].Position,
                                    max_t: loca[i].Temp_Hight,
                                    min_t: loca[i].Temp_Low,
                                    max_h: loca[i].Humdi_Hight,
                                    min_h: loca[i].Humdi_Low,
                                    t: " - ",
                                    h: " - ",
                                    error: object.Message,
                                    mac: loca[i].Macaddress,
                                    date: object.date
                                }
                                return <WarnSenser obj={show} />
                            }
                        }
                    }
                }
                else if (_mac !== set && _dateP !== set) {
                    if (_mac === object.Id_MAC && _dateP === _date) {
                        for (i = 0; i < loca.length; i++) {
                            if (object.Id_MAC === loca[i].Macaddress) {
                                const show = {
                                    mass: "ข้อบกพร่องของอุปกรณ์",
                                    location: "สถานที่ : " + loca[i].Name_Lo + "อาคาร : " + loca[i].Name_Build + "ห้อง : " + loca[i].Position,
                                    max_t: loca[i].Temp_Hight,
                                    min_t: loca[i].Temp_Low,
                                    max_h: loca[i].Humdi_Hight,
                                    min_h: loca[i].Humdi_Low,
                                    t: " - ",
                                    h: " - ",
                                    error: object.Message,
                                    mac: loca[i].Macaddress,
                                    date: object.date
                                }
                                return <WarnSenser obj={show} />
                            }
                        }
                    }
                }
            }
            return false
        });
    }

    tabRow2() {
        return this.state.WarnTH.map(function (object, i) {
            const _date = moment(object.date).format('YYYY-MM-DD')
            if (_t !== set && _h === set) {
                if (object.Message === "อุณหภูมิสูงกว่าค่าที่กำหนด" || object.Message === "อุณหภูมิต่ำกว่าค่าที่กำหนด") {
                    console.log("test2")
                    if (_mac !== set && _dateP === set) {
                        if (_mac === object.Id_MAC) {
                            for (i = 0; i < loca.length; i++) {
                                if (_mac === loca[i].Macaddress) {
                                    const show = {
                                        mass: "ข้อบกพร่องของอุณหภูมิ",
                                        location: "สถานที่ : " + loca[i].Name_Lo + "อาคาร : " + loca[i].Name_Build + "ห้อง : " + loca[i].Position,
                                        max_t: loca[i].Temp_Hight,
                                        min_t: loca[i].Temp_Low,
                                        max_h: loca[i].Humdi_Hight,
                                        min_h: loca[i].Humdi_Low,
                                        t: object.Temp,
                                        h: object.Humdidity,
                                        error: object.Message,
                                        mac: loca[i].Macaddress,
                                        date: object.date
                                    }
                                    return <WarnSenser obj={show} />
                                }
                            }
                        }
                    }
                    else if (_mac === set && _dateP !== set) {
                        if (_dateP === _date) {
                            for (i = 0; i < loca.length; i++) {
                                if (object.Id_MAC === loca[i].Macaddress) {
                                    const show = {
                                        mass: "ข้อบกพร่องของอุณหภูมิ",
                                        location: "สถานที่ : " + loca[i].Name_Lo + "อาคาร : " + loca[i].Name_Build + "ห้อง : " + loca[i].Position,
                                        max_t: loca[i].Temp_Hight,
                                        min_t: loca[i].Temp_Low,
                                        max_h: loca[i].Humdi_Hight,
                                        min_h: loca[i].Humdi_Low,
                                        t: object.Temp,
                                        h: object.Humdidity,
                                        error: object.Message,
                                        mac: loca[i].Macaddress,
                                        date: object.date
                                    }
                                    return <WarnSenser obj={show} />
                                }
                            }
                        }
                    }
                    else if (_mac !== set && _dateP !== set) {
                        if (_mac === object.Id_MAC && _dateP === _date) {
                            for (i = 0; i < loca.length; i++) {
                                if (object.Id_MAC === loca[i].Macaddress) {
                                    const show = {
                                        mass: "ข้อบกพร่องของอุณหภูมิ",
                                        location: "สถานที่ : " + loca[i].Name_Lo + "อาคาร : " + loca[i].Name_Build + "ห้อง : " + loca[i].Position,
                                        max_t: loca[i].Temp_Hight,
                                        min_t: loca[i].Temp_Low,
                                        max_h: loca[i].Humdi_Hight,
                                        min_h: loca[i].Humdi_Low,
                                        t: object.Temp,
                                        h: object.Humdidity,
                                        error: object.Message,
                                        mac: loca[i].Macaddress,
                                        date: object.date
                                    }
                                    return <WarnSenser obj={show} />
                                }
                            }
                        }
                    }
                }
            } else if (_t === set && _h !== set) {
                if (object.Message === "ความชื้นสูงกว่าค่าที่กำหนด" || object.Message === "ความชื้นตำกว่าค่าที่กำหนด") {
                    console.log("test2")
                    if (_mac !== set && _dateP === set) {
                        if (_mac === object.Id_MAC) {
                            for (i = 0; i < loca.length; i++) {
                                if (_mac === loca[i].Macaddress) {
                                    const show = {
                                        mass: "ข้อบกพร่องของความชื้น",
                                        location: "สถานที่ : " + loca[i].Name_Lo + "อาคาร : " + loca[i].Name_Build + "ห้อง : " + loca[i].Position,
                                        max_t: loca[i].Temp_Hight,
                                        min_t: loca[i].Temp_Low,
                                        max_h: loca[i].Humdi_Hight,
                                        min_h: loca[i].Humdi_Low,
                                        t: object.Temp,
                                        h: object.Humdidity,
                                        error: object.Message,
                                        mac: loca[i].Macaddress,
                                        date: object.date
                                    }
                                    return <WarnSenser obj={show} />
                                }
                            }
                        }
                    }
                    else if (_mac === set && _dateP !== set) {
                        if (_dateP === _date) {
                            for (i = 0; i < loca.length; i++) {
                                if (object.Id_MAC === loca[i].Macaddress) {
                                    const show = {
                                        mass: "ข้อบกพร่องของความชื้น",
                                        location: "สถานที่ : " + loca[i].Name_Lo + "อาคาร : " + loca[i].Name_Build + "ห้อง : " + loca[i].Position,
                                        max_t: loca[i].Temp_Hight,
                                        min_t: loca[i].Temp_Low,
                                        max_h: loca[i].Humdi_Hight,
                                        min_h: loca[i].Humdi_Low,
                                        t: object.Temp,
                                        h: object.Humdidity,
                                        error: object.Message,
                                        mac: loca[i].Macaddress,
                                        date: object.date
                                    }
                                    return <WarnSenser obj={show} />
                                }
                            }
                        }
                    }
                    else if (_mac !== set && _dateP !== set) {
                        if (_mac === object.Id_MAC && _dateP === _date) {
                            for (i = 0; i < loca.length; i++) {
                                if (object.Id_MAC === loca[i].Macaddress) {
                                    const show = {
                                        mass: "ข้อบกพร่องของความชื้น",
                                        location: "สถานที่ : " + loca[i].Name_Lo + "อาคาร : " + loca[i].Name_Build + "ห้อง : " + loca[i].Position,
                                        max_t: loca[i].Temp_Hight,
                                        min_t: loca[i].Temp_Low,
                                        max_h: loca[i].Humdi_Hight,
                                        min_h: loca[i].Humdi_Low,
                                        t: object.Temp,
                                        h: object.Humdidity,
                                        error: object.Message,
                                        mac: loca[i].Macaddress,
                                        date: object.date
                                    }
                                    return <WarnSenser obj={show} />
                                }
                            }
                        }
                    }
                }
            } else if (_t !== set && _h !== set) {
                if (object.Message === "ความชื้นสูงกว่าค่าที่กำหนด" || object.Message === "ความชื้นตำกว่าค่าที่กำหนด") {
                    _mass = "ข้อบกพร่องของความชื้น"
                } else if (object.Message === "อุณหภูมิสูงกว่าค่าที่กำหนด" || object.Message === "อุณหภูมิต่ำกว่าค่าที่กำหนด") {
                    _mass = "ข้อบกพร่องของอุณหภูมิ"
                }
                if (_mac !== set && _dateP === set) {
                    if (_mac === object.Id_MAC) {
                        for (i = 0; i < loca.length; i++) {
                            if (_mac === loca[i].Macaddress) {
                                const show = {
                                    mass: _mass,
                                    location: "สถานที่ : " + loca[i].Name_Lo + "อาคาร : " + loca[i].Name_Build + "ห้อง : " + loca[i].Position,
                                    max_t: loca[i].Temp_Hight,
                                    min_t: loca[i].Temp_Low,
                                    max_h: loca[i].Humdi_Hight,
                                    min_h: loca[i].Humdi_Low,
                                    t: object.Temp,
                                    h: object.Humdidity,
                                    error: object.Message,
                                    mac: loca[i].Macaddress,
                                    date: object.date
                                }
                                return <WarnSenser obj={show} />
                            }
                        }
                    }
                }
                else if (_mac === set && _dateP !== set) {
                    if (_dateP === _date) {
                        for (i = 0; i < loca.length; i++) {
                            if (object.Id_MAC === loca[i].Macaddress) {
                                const show = {
                                    mass: _mass,
                                    location: "สถานที่ : " + loca[i].Name_Lo + "อาคาร : " + loca[i].Name_Build + "ห้อง : " + loca[i].Position,
                                    max_t: loca[i].Temp_Hight,
                                    min_t: loca[i].Temp_Low,
                                    max_h: loca[i].Humdi_Hight,
                                    min_h: loca[i].Humdi_Low,
                                    t: object.Temp,
                                    h: object.Humdidity,
                                    error: object.Message,
                                    mac: loca[i].Macaddress,
                                    date: object.date
                                }
                                return <WarnSenser obj={show} />
                            }
                        }
                    }
                }
                else if (_mac !== set && _dateP !== set) {
                    if (_mac === object.Id_MAC && _dateP === _date) {
                        for (i = 0; i < loca.length; i++) {
                            if (object.Id_MAC === loca[i].Macaddress) {
                                const show = {
                                    mass: _mass,
                                    location: "สถานที่ : " + loca[i].Name_Lo + "อาคาร : " + loca[i].Name_Build + "ห้อง : " + loca[i].Position,
                                    max_t: loca[i].Temp_Hight,
                                    min_t: loca[i].Temp_Low,
                                    max_h: loca[i].Humdi_Hight,
                                    min_h: loca[i].Humdi_Low,
                                    t: object.Temp,
                                    h: object.Humdidity,
                                    error: object.Message,
                                    mac: loca[i].Macaddress,
                                    date: object.date
                                }
                                return <WarnSenser obj={show} />
                            }
                        }
                    }
                }
            }
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
                                loca[num] = {
                                    Name_Lo: Location[y].Name_Lo,
                                    Name_Build: Build[z].Name_Build,
                                    Position: object.Position,
                                    Macaddress: object.Macaddress,
                                    Temp_Low: object.Temp_Low,
                                    Temp_Hight: object.Temp_Hight,
                                    Humdi_Low: object.Humdi_Low,
                                    Humdi_Hight: object.Humdi_Hight
                                }
                                num = num + 1
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
        //console.log(loca)
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
                    <section style={{ paddingLeft: '80px', paddingRight: '80px' }}>
                        <FormGroup>
                            <Row align="center">
                                <Col>
                                    <Input type="select" name="select" id="font" onChange={this.onchangeMAC}>
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
                                    <Button color="primary" onClick={(e) => this.sentid(e)}>ค้นหา</Button>
                                </Col>
                            </Row>
                            <br />
                            <div style={{ paddingLeft: '15px' }} align="center">
                                <label>
                                    <center><b>ประเภทการแจ้งเตือน</b></center>
                                    <hr />
                                    <div>
                                        <input
                                            name="error"
                                            type="checkbox"
                                            value="error"
                                            onChange={this.onchangeError} />    ข้อบกพร่องของอุปกรณ์
                                                    <span style={{ paddingRight: '15px' }} />
                                        <input
                                            name="t"
                                            type="checkbox"
                                            value="max_t"
                                            onChange={this.onchangeT} />    ข้อบกพร่องของอุณหภูมิ
                                                    <span style={{ paddingRight: '15px' }} />
                                        <input
                                            name="h"
                                            type="checkbox"
                                            value="max_h"
                                            onChange={this.onchangeH} />    ข้อบกพร่องของความชื้น
                                                    <span style={{ paddingRight: '15px' }} />
                                    </div>
                                </label>

                            </div>
                        </FormGroup>
                        <Form>
                            <Table bordered >
                                <thead >
                                    <tr align="center" valign="middle">
                                        <th rowspan="2">ลักษณะการเตือน</th>
                                        <th rowspan="2">สถานที่</th>
                                        <th colspan="4">การตั้งค่าอุปกรณ์</th>
                                        <th colspan="3">สถานะ</th>
                                        <th rowspan="2">รหัสเครื่อง</th>
                                        <th rowspan="2">วันที่และเวลา</th>
                                    </tr>
                                    <tr>
                                        <th>อุณหภูมิต่ำสุด</th>
                                        <th>อุณหภูมิสูงสุด</th>
                                        <th>ความชื้นต่ำสุด</th>
                                        <th>ความชื้นสูงสุด</th>
                                        <th>อุณหภูมิ</th>
                                        <th>ความชื้น</th>
                                        <th>ข้อความแจ้งเตือน</th>
                                    </tr>
                                </thead>
                                {this.tabRow1()}
                                {this.tabRow2()}
                            </Table>
                        </Form>
                    </section>
                </div>
            </div>
        );
    }
}

export default notification;