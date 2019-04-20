import React, { Component } from 'react';
import { Table, Button, Input, Form, Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import ChartHistory from './Chart_history';
import SenserChoice from './Choice/SenserChoice';
import moment from 'moment';
import { CSVLink } from "react-csv";

import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { formatDate, parseDate } from 'react-day-picker/moment';

var _mac, _datePf, _datePt, mac, Build, Location, date_Next, dateS = [], History;
var bu_num, Loca_num, date_num, his_num;
var data_ss, csv_num = 0;
const headers = [
    { label: "ID", key: "_id" },
    { label: "Temperature", key: "t" },
    { label: "Humidity", key: "h" },
    { label: "MAC Address", key: "mac" },
    { label: "Date", key: "date" }
];
const csvData = [];
var status = 0;
var show = [], show_num = 0;

class history extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {}
        }

        this.handleFromChange = this.handleFromChange.bind(this);
        this.handleToChange = this.handleToChange.bind(this);
        this.state = {
            from: undefined,
            to: undefined,
        };


        this.state = { History: [], Senser: [], Data_Temp: [] };

    }

    componentWillMount() {
        _mac = this.props.match.params.id
        _datePf = this.props.match.params.datef
        _datePt = this.props.match.params.datet
        // var test = moment('2019-02-18 08:37:51.968Z').format('YYYY-MM-DD')
        //console.log(test)
        // console.log(_mac)
        // console.log(_datePf)
        // console.log(_datePt)
        //console.log(moment(_datePt).to(moment(_datePf), moment(_datePt)))
        date_num = (moment(_datePt).diff(moment(_datePf), 'days')) + 1
        date_Next = _datePf
        for (let i = 0; i < date_num; i++) {
            if (i === 0) {
                dateS[i] = _datePf
                //console.log(moment(_datePf).format('YYYY-MM-DD'))
            }
            else {
                date_Next = moment(date_Next).add(1, 'days').format('YYYY-MM-DD')
                dateS[i] = date_Next
                //console.log(date_Next)
            }

        }
        //console.log(dateS)
        //console.log(_datePt.to(_datePf, _datePt))
        status = 0
        //console.log(status)
        data_ss = JSON.parse(sessionStorage.getItem('Login_add'))
    }

    componentDidMount() {
        axios.get('http://206.189.94.192:5000/history')
            .then(response => {
                History = response.data;
                his_num = response.data.length;
                this.setState({ History: History });
                //console.log(History)
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.get('http://206.189.94.192:5000/sensers/senser_list')
            .then(response => {
                const Senser = response.data;
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
                //this.setState({ Build: Build});
                //console.log(Build);
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.get('http://206.189.94.192:5000/locations/location_list')
            .then(response => {
                Location = response.data;
                Loca_num = response.data.length;
                //this.setState({ Location: Location });
                //console.log(Locatio);
            })
            .catch(function (error) {
                console.log(error);
            })

        this.setState({ Data_Temp: dateS });
    }

    onchangeMAC(e) {
        mac = e.target.value
    }

    // onchangeDate(e) {
    //     date = e.target.value
    //     //console.log(date)
    // }

    // onSubmit(e) {
    //     window.location.replace('/history/' + this.state.mac)
    //     console.log(this.state.mac)
    // }

    sentid = (e) => {
        window.location.replace('/history/' + mac + '/' + moment(this.state.from).format('YYYY-MM-DD') + '/' + moment(this.state.to).format('YYYY-MM-DD'))
    }

    sentEx = (e) => {
        return <CSVLink data={csvData} headers={headers}><img alt="ok" width="180px" src={require('../../img/downloadEx.png')} /></CSVLink>
    }

    // tabRow() {
    //     return this.state.History.map((object, i) => {
    //         const _date = moment(object.date).format('YYYY-MM-DD')
    //         var set = "undefined"
    //         //console.log(set)
    //         if (_mac !== set && _dateP === set) {
    //             if (_mac === object.mac) {
    //                 csvData[csv_num] = object
    //                 csv_num = csv_num + 1
    //                 return <Tablehistory obj={object} key={i} />;
    //             } else
    //                 return false
    //         }
    //         else if (_mac === set && _dateP !== set) {
    //             if (_dateP === _date) {
    //                 csvData[csv_num] = object
    //                 csv_num = csv_num + 1
    //                 return <Tablehistory obj={object} key={i} />;
    //             } else
    //                 return false
    //         }
    //         else if (_mac !== set && _dateP !== set) {
    //             if (_mac === object.mac && _dateP === _date) {
    //                 csvData[csv_num] = object
    //                 csv_num = csv_num + 1
    //                 return <Tablehistory obj={object} key={i} />;
    //             } else
    //                 return false
    //         } else
    //             return false
    //     });
    // }

    Create2DArray(rows) {
        var arr = [];

        for (var i = 0; i < rows; i++) {
            arr[i] = [];
        }

        return arr;
    }

    Select_Data() {
        if (status === 0) {
            for (let i = 0; i < date_num; i++) {
                // console.log(his_num)
                // console.log(History)
                for (let z = 0; z < his_num; z++) {
                    const _date = moment(History[z].date).format('YYYY-MM-DD')
                    if (_mac === History[z].mac && _date === dateS[i]) {
                        //console.log(History[z])
                        csvData[csv_num] = History[z]
                        csv_num = csv_num + 1
                        //return <Tablehistory obj={History[z]} key={i} />;
                        //console.log(test)
                    }
                }
                //console.log(dateS[i])
            }

            var temp_sum = 0, humdi_sum = 0, temp_num = 0, humdi_num = 0
            var data_temp = this.Create2DArray(50), data_humdi = this.Create2DArray(50)
            // data_temp = [[]]
            // data_humdi = [[]]
            for (let x = 0; x < date_num; x++) {
                //console.log(x)
                for (var a = 0; a < 24; a++) {
                    temp_sum = 0
                    humdi_sum = 0
                    temp_num = 0
                    humdi_num = 0
                    for (let y = 0; y < csv_num; y++) {
                        const _date = moment(csvData[y].date).format('YYYY-MM-DD')
                        const _hous = moment(csvData[y].date).format('HH')
                        if (_date === dateS[x] && parseInt(_hous) === a) {
                            temp_sum = temp_sum + csvData[y].t
                            temp_num = temp_num + 1
                            humdi_sum = humdi_sum + csvData[y].h
                            humdi_num = humdi_num + 1
                            // console.log(parseInt(_hous))
                            // console.log(a)
                        }
                    }
                    data_temp[x][a] = (temp_sum / temp_num)
                    data_humdi[x][a] = (humdi_sum / humdi_num)

                }
                // console.log(data_temp)
                // console.log(data_humdi)

                //this.dataGraph(data_temp, data_humdi)
            }

            for (let x = 0; x < date_num; x++) {
                for (let i = 0; i < 24; i++) {
                    //console.log(this.props.obj1[i].toString())
                    if (data_temp[x][i].toString() === "NaN") {
                        data_temp[x][i] = "0"
                        data_humdi[x][i] = "0"
                    }
                    else {
                        data_temp[x][i] = data_temp[x][i].toString()
                        data_humdi[x][i] = data_humdi[x][i].toString()
                    }
                }
            }

            // console.log(data_temp)
            // console.log(data_humdi)
            this.showData()

            return this.state.Data_Temp.map(function (object, i) {
                return <ChartHistory obj1={data_temp[i]} obj2={data_humdi[i]} obj3={dateS[i]} />
            });

        }
    }

    choice() {
        show = [];
        show_num = 0;
        return this.state.Senser.map(function (object, i) {
            for (let z = 0; z < bu_num; z++) {
                if (object.Id_Build === Build[z]._id) {
                    for (let y = 0; y < Loca_num; y++) {
                        if (Build[z].Id_Loca === Location[y]._id) {
                            if (data_ss._id === Location[y].Id_Admin) {
                                show[show_num] = {
                                    Name_Lo: Location[y].Name_Lo,
                                    Name_Build: Build[z].Name_Build,
                                    Position: object.Position,
                                    Temp_Low: object.Temp_Low,
                                    Temp_Hight: object.Temp_Hight,
                                    Humdi_Low: object.Humdi_Low,
                                    Humdi_Hight: object.Humdi_Hight,
                                    Macaddress: object.Macaddress
                                }
                                show_num = show_num + 1
                                return <SenserChoice obj={object} key={i} />;
                            }
                        }
                    }
                }
            }
            return true
        });
    }

    showData() {
        // console.log(show)
        // console.log(show_num)
        if (_mac !== "undefined") {
            console.log("No deil")
            for (let i = 0; i < show_num; i++) {
                if (_mac === show[i].Macaddress) {
                    return <Table >
                        <Row align="center">
                            <Col>
                                <div>ข้อมูลตั้งค่า</div>
                            </Col>
                            <Col>
                                <div>ข้อมูลเซนเซอร์ </div>
                            </Col>
                        </Row>
                        <Row align="center">
                            <Col>
                                <div>สถานที่ : {show[i].Name_Lo}</div>
                            </Col>
                            <Col>
                                <div>อุณหภูมิสูงสุด : {show[i].Temp_Hight} </div>
                            </Col>
                        </Row>
                        <Row align="center">
                            <Col>
                                <div>อาคาร : {show[i].Name_Build}</div>
                            </Col>
                            <Col>
                                <div>อุณหภูมิตำสุด : {show[i].Temp_Low} </div>
                            </Col>
                        </Row>
                        <Row align="center">
                            <Col>
                                <div>ห้องติดตั้งเซนเซอร์ : {show[i].Position}</div>
                            </Col>
                            <Col>
                                <div>ความชื้นสูงสุด : {show[i].Humdi_Hight} </div>
                            </Col>
                        </Row>
                        <Row align="center">
                            <Col>
                                <div>รหัสเครื่อง : {show[i].Macaddress}</div>
                            </Col>
                            <Col>
                                <div>ความชื้นต่ำสุด : {show[i].Humdi_Low} </div>
                            </Col>
                        </Row>
                    </Table>
                }
            }
        }
    }

    // ปฏิทิน
    showFromMonth() {
        const { from, to } = this.state;
        if (!from) {
            return;
        }
        if (moment(to).diff(moment(from), 'months') < 2) {
            this.to.getDayPicker().showMonth(from);
        }
    }
    handleFromChange(from) {
        // Change the from date and focus the "to" input field
        this.setState({ from });
        status = 1
        //console.log(status)
    }
    handleToChange(to) {
        this.setState({ to }, this.showFromMonth);
    }

    render() {
        // console.log(csv_num);
        // console.log(csvData);
        // console.log(moment(this.state.to).to(moment(this.state.from), moment(this.state.to)))
        // console.log(data_temp[0][0])
        // console.log(data_humdi[0][0])
        const { from, to } = this.state;
        //const modifiers = { start: from, end: to };
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
                    <center>
                        <table >
                            <tr>
                                <td style={{width:'100px'}}>
                                   <b>เซนเซอร์</b>  
                            </td>
                                <td colSpan='2'>
                                    <Input type="select" name="select" onChange={this.onchangeMAC}>
                                        <option value="undefined">เลือกเซนเซอร์</option>
                                        {this.choice()}
                                    </Input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                   <b>วันเวลา</b> 
                            </td>
                                <td>
                                    <span className="InputFromTo">
                                        <DayPickerInput
                                            value={from}
                                            placeholder="จาก"
                                            // format="LL"
                                            formatDate={formatDate}
                                            parseDate={parseDate}
                                            dayPickerProps={{
                                                selectedDays: [from, { from, to }],
                                                disabledDays: { after: to },
                                                toMonth: to,
                                                modifiers: { start: from, end: to },
                                                numberOfMonths: 1,
                                                onDayClick: () => this.to.getInput().focus(),
                                            }}
                                            onDayChange={this.handleFromChange}
                                        />{' '}</span>
                                </td>
                                <td>
                                    —{' '}<span className="InputFromTo-to">
                                        <DayPickerInput
                                            ref={el => (this.to = el)}
                                            value={to}
                                            placeholder="ถึง"
                                            // format="LL"
                                            formatDate={formatDate}
                                            parseDate={parseDate}
                                            dayPickerProps={{
                                                selectedDays: [from, { from, to }],
                                                disabledDays: { before: from },
                                                modifiers: { start: from, end: to },
                                                month: from,
                                                fromMonth: from,
                                                numberOfMonths: 1,
                                            }}
                                            onDayChange={this.handleToChange}
                                        />
                                    </span>
                                </td>
                            </tr>
                            <tr align='center'>
                                <td colSpan='2'><Button style={{ width: '200px' }} color="primary" onClick={(e) => this.sentid(e)}>ค้นหา</Button></td>
                                <td>{this.sentEx()}</td>
                            </tr>
                        </table>
                    </center>

                    <Container>
                        {this.showData()}
                    </Container>

                    <Form id="spacetop">
                        {this.Select_Data()}
                    </Form>
                </div>
            </div >
        );
    }
}

export default history;