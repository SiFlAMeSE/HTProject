import React, { Component } from 'react';
import { Table, Button, Input, FormGroup, Form, Container, Row, Col, Label } from 'reactstrap';
import axios from 'axios';
import DashboardChoice from './Choice/DashboardChoice';
import DashboardTable from './Dashboard_Table';

import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

var _id, loca, Build, Location, mapLocation;
var bu_num, Loca_num, Pointlat, Pointlng;
var data_ss;
// var set = "undefined"

class dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {}
        }

        this.state = { Senser: [], Location: [], mapLocation: [] };

    }

    componentWillMount() {
        _id = this.props.match.params.id
        //console.log(_id)
        data_ss = JSON.parse(sessionStorage.getItem('Login_add'))
    }

    componentDidMount() {
        axios.get('http://206.189.94.192:5000/sensers/senser_list')
            .then(response => {
                const Senser = response.data;
                //sen_num = response.data.length;
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
                console.log(Build);
                console.log(bu_num);
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.get('http://206.189.94.192:5000/locations/location_list')
            .then(response => {
                Location = response.data;
                Loca_num = response.data.length;
                // Pointlat = response.data.Location.lat
                // Pointlng = response.data.Location.lng
                console.log(Location)
                this.setState({ Location: Location });
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.get('http://206.189.94.192:5000/locations/location/' + _id)
            .then(response => {
                mapLocation = response.data;
                this.setState({ mapLocation: mapLocation });
                // console.log(Location);
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    onchangeLocatioin(e) {
        loca = e.target.value
    }

    sentid = (e) => {
        window.location.replace('/dashboard/' + loca)
    }

    tabRow() {
        return this.state.Senser.map(function (object, i) {
            for (let z = 0; z < bu_num; z++) {
                if (object.Id_Build === Build[z]._id) {
                    for (let y = 0; y < Loca_num; y++) {
                        if (Build[z].Id_Loca === Location[y]._id) {
                            if (data_ss._id === Location[y].Id_Admin) {
                                const show = {
                                    Name_Lo: Location[y].Name_Lo,
                                    Name_Build: Build[z].Name_Build,
                                    Position: object.Position,
                                    Temp_Low: object.Temp_Low,
                                    Temp_Hight: object.Temp_Hight,
                                    Humdi_Low: object.Humdi_Low,
                                    Humdi_Hight: object.Humdi_Hight,
                                    Macaddress: object.Macaddress
                                }
                                // console.log("test")
                                // console.log(show)
                                if (_id === Location[y]._id) {
                                    return <DashboardTable obj={show} />
                                }
                                else if (_id === "undefined") {
                                    console.log(_id)
                                    return <DashboardTable obj={show} />
                                }

                            }
                        }
                    }
                }
            }
            return true
        });
        // return this.state.Location.map(function (object, i){
        //     return <TableDashboard obj={object} bu={Build} key={i} />
        // })

    }

    choice() {
        return this.state.Location.map(function (object, i) {
            if (data_ss._id === object.Id_Admin) {
                return <DashboardChoice obj={object} key={i} />
            }
            return false
        })
    }

    showpinmap() {
        Pointlat = this.state.mapLocation.lat
        Pointlng = this.state.mapLocation.lng
        return <Marker name={this.state.mapLocation.Address} position={{ lat: Pointlat, lng: Pointlng }} />
    }

    render() {
        console.log(this.state.mapLocation.Name_Lo)
        console.log(this.state.mapLocation.lat)
        return (
            <div>
                <section id="space">
                    <div className="banner-h">
                        <div className="text-cobg">
                            แผงควบคุม
                    </div>
                    </div>
                </section>
                <Table style={{ height: '650px' }}>
                    <Row align="center">
                        <Col xs="6" style={{ paddingLeft: '75px' }}>
                            <Map google={this.props.google}
                                style={{ width: 'auto', height: '550px', position: 'relative' }}
                                zoom={16}
                                initialCenter={{
                                    lat: 13.8185021,
                                    lng: 100.5141232
                                }}>
                                {this.showpinmap()}
                            </Map>
                        </Col>
                        <Col xs="5" style={{ paddingLeft: '190px' }}>
                            <FormGroup>
                                <Label for="selectlocation">เลือกสถานที่</Label>
                                <Input type="select" name="selectMulti" id="selectlocation" onChange={this.onchangeLocatioin} multiple>
                                    {/* <option value="undefined">สถานที่</option> */}
                                    {this.choice()}
                                </Input>
                                <br />
                                <Button color="success" onClick={(e) => this.sentid(e)}>ค้นหา</Button>

                            </FormGroup>
                        </Col>
                    </Row>
                </Table>
                <Container>

                    <Form>
                        <Table bordered>
                            <thead >
                                <tr align="center" valign="middle">
                                    <th rowspan="2">พื้นที่</th>
                                    <th rowspan="2">อาคาร</th>
                                    <th rowspan="2">ห้อง</th>
                                    <th colspan="4" >การตั้งค่า</th>
                                    <th rowspan="2" >สถานะ</th>
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
            </div >

        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAFHTcbUykLDkXfK19GoXmm8EltWUbq9dM")
})(dashboard)
// export default dashboard;