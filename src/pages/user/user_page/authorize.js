import React, { Component } from 'react';
import { Form, Col, Row, Input, Button, Container, Table, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import axios from 'axios';
import classnames from 'classnames';
import TabalAuthorize from './TabalAuthorize';

import '../../../css/authorize.css'

var stylebg = {
    backgroundImage: `url(${require('../../../img/BGlog.png')})`,
    backgroundSize: 'cover'
}

var Senser, Build, Location, Authorize;
var sen_num, bu_num, Loca_num, aut_num;
var data_ss;
var s = 0;

class authorize extends Component {
    constructor(props) {
        super(props);
        this.onchangeKey = this.onchangeKey.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.toggle = this.toggle.bind(this);

        this.state = {
            Key_Room: '',
            Id_User: '',
        }

        this.state = { Authorize: [], Senser: [], Build: [], Location: [] };
    }

    componentWillMount() {
        data_ss = JSON.parse(sessionStorage.getItem('Login_user'))
        this.setState({ data: data_ss })
        console.log(data_ss)
        this.setState({
            activeTab: '1'
        });
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    onchangeKey(e) {
        this.setState({
            Key_Room: e.target.value
        });
    }

    componentDidMount() {
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
                this.setState({ Build: Build });
                //console.log(Build);
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.get('http://localhost:5000/locations/location_list')
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

    onSubmit(e) {
        e.preventDefault();
        for (let i = 0; i < sen_num; i++) {
            if (this.state.Key_Room === Senser[i].Key_Room) {
                s = s + 1;
                const Authorize = {
                    Key_Room: this.state.Key_Room,
                    Id_User: data_ss._id
                }
                axios.post('http://localhost:5000/authorize/add', Authorize)
                    .then(function (res) {
                        if (res.data === 'Server added successfully') {
                            window.location.replace('/user/authorize')
                            alert("ลงทะเบียนเซนเซอร์เรียบร้อยแล้ว")
                        }
                        else {
                            console.log("error")
                        }

                    })
                    .catch(function (err) {
                        console.log('error');
                    })

                this.setState({
                    Key_Room: '',
                    Id_User: ''
                });
            }
        }
        console.log(s)
        if (s === 0) {
            alert("ไม่พบข้อมูลที่กรอก")
        }
    }

    tabRow() {
        return this.state.Senser.map(function (object, i) {
            for (let z = 0; z < bu_num; z++) {
                if (object.Id_Build === Build[z]._id) {
                    for (let y = 0; y < Loca_num; y++) {
                        if (Build[z].Id_Loca === Location[y]._id) {
                            for (let i = 0; i < aut_num; i++) {
                                if (object.Key_Room === Authorize[i].Key_Room) {
                                    if (data_ss._id === Authorize[i].Id_User) {
                                        const show = {
                                            Name_Lo: Location[y].Name_Lo,
                                            Name_Build: Build[z].Name_Build,
                                            Position: object.Position,
                                            Temp_Low: object.Temp_Low,
                                            Temp_Hight: object.Temp_Hight,
                                            Humdi_Low: object.Humdi_Low,
                                            Humdi_Hight: object.Humdi_Hight,
                                            Macaddress: object.Macaddress,
                                            Key_Room: Authorize[i].Key_Room,
                                            _id: Authorize[i]._id
                                        }
                                        return <TabalAuthorize obj={show} />
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
        // return this.state.Location.map(function (object, i){
        //     return <TableDashboard obj={object} bu={Build} key={i} />
        // })

    }



    render() {
        return (
            <>
                <section>
                    <div className="banner-h">
                        <div className="text-cobg">เข้าใช้งานสำหรับดูข้อมูล</div>
                    </div>
                </section>
                <br />

                <div style={{ paddingLeft: '80vh' }} >
                    <Nav tabs >
                        <NavItem style={{paddingRight:'3px'}}>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle('1'); }}
                                id="tab1"
                            >
                                เพิ่มเซนเซอร์
            </NavLink>
                        </NavItem>
                        
                        <NavItem >
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle('2'); }}
                                id="tab2"
                            >
                                ตารางดูข้อมูล
            </NavLink>
                        </NavItem>
                    </Nav>
                </div>


                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <div style={stylebg}>
                            <div className="bgtabkey">
                                <div className="formedit">
                                    <Form onSubmit={this.onSubmit} style={{ paddingTop: '45px' }}>
                                        <Row>
                                            <Col align="center">
                                                <Input type="text" placeholder="กรุณากรอกรหัส" id="fixinput" onChange={this.onchangeKey}></Input>
                                                <br />
                                                <Button type="submit" color="primary" className="btn_cus">ตกลง</Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </div>
                            </div>
                        </div>

                    </TabPane>
                    <TabPane tabId="2">
                        <Container>
                            <Form style={{ paddingTop: '45px' }}>
                                <Table bordered>
                                    <thead >
                                        <tr align="center" valign="middle">
                                            <th rowspan="2">พื้นที่</th>
                                            <th rowspan="2">อาคาร</th>
                                            <th rowspan="2">ห้อง</th>
                                            <th colspan="4" >การตั้งค่า</th>
                                            <th rowspan="2" >จัดการ</th>
                                        </tr>
                                        <tr>
                                            <th>อุณหภูมิต่ำสุด</th>
                                            <th>อุณหภูมิสูงสุด</th>
                                            <th>ความชื้นต่ำสุด</th>
                                            <th>ความชื้นสูงสุด</th>
                                        </tr>
                                    </thead>
                                    {this.tabRow()}
                                </Table>
                            </Form>
                        </Container>
                    </TabPane>
                </TabContent>

            </>
        );
    }
}

export default authorize;