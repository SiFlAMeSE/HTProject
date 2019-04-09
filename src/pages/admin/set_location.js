import React from 'react';
import { Table, Button, Input, Container, Row, Col, Label, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';
import TabLoca from './Detail_Back/TabRowLocation';
var data_ss;
export default class set_location extends React.Component {
    constructor(props) {
        super(props);
        this.onchangeNameLocation = this.onchangeNameLocation.bind(this);
        this.onchangeAddress = this.onchangeAddress.bind(this);
        this.onchangelat = this.onchangelat.bind(this);
        this.onchangelng = this.onchangelng.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Name_Lo: '',
            Address: '',
            Id_Admin: '',
            lat: '',
            lng: ''
        }
        // เช็คสถานะ
        this.state = {
            data: {}
        }
        // เปิดปิด modal
        this.state = {
            modal: false
        };
        this.toggle = this.toggle.bind(this);
        this.state = { Location: [] };
    }

    componentWillMount() {
        data_ss = JSON.parse(sessionStorage.getItem('Login_add'))
        this.setState({ data: data_ss })
        // console.log(data_ss._id)
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    onchangeNameLocation(e) {
        this.setState({
            Name_Lo: e.target.value
        });
    }
    onchangeAddress(e) {
        this.setState({
            Address: e.target.value
        });
    }
    onchangelat(e) {
        this.setState({
            lat: e.target.value
        });
    }
    onchangelng(e) {
        this.setState({
            lng: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();
        const Locations = {
            Name_Lo: this.state.Name_Lo,
            Address: this.state.Address,
            Id_Admin: data_ss._id,
            lat: this.state.lat,
            lng: this.state.lng

        }
        axios.post('http://206.189.94.192:5000/locations/add', Locations)
            .then(function (res) {
                if (res.data === 'Server added successfully') {
                    window.location = "/setlocation"
                }
            })
            .catch(function (err) {
                console.log('error');
            })

        this.setState({
            Name_Lo: '',
            Address: '',
            lat: '',
            lng: ''
        });
    }

    componentDidMount() {
        axios.get('http://206.189.94.192:5000/locations/location_list')
            .then(response => {
                const Location = response.data;
                this.setState({ Location });
                // console.log(Location);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    createcard() {
        return this.state.Location.map((object, i) => {
            if (data_ss._id === object.Id_Admin) {
                return <TabLoca obj={object} key={i} />;
            }
            else
                return false
        });
    }

    render() {
        return (
            <div>
                <section id="space">
                    <div className="banner-h">
                        <div className="text-cobg">
                            ลงทะเบียนสถานที่
                    </div>
                    </div>
                </section>

                <Modal isOpen={this.state.modal}
                    toggle={this.toggle}
                    className={this.props.className} >

                    <ModalHeader toggle={this.toggle} id="font">พื้นที่</ModalHeader>
                    <form onSubmit={this.onSubmit}>
                        <ModalBody >
                            <Container>
                                <Table>
                                    <Row>
                                        <Col>
                                            <Label>ชื่อสถานที่</Label>
                                            <Input type="text" name="location" placeholder="ใส่ชื่อสถานที่" onChange={this.onchangeNameLocation}></Input>
                                        </Col>
                                    </Row>
                                    <br />
                                    <Row>
                                        <Col>
                                            <Label>ที่อยู่</Label>
                                            <Input type="textarea" cols="30" rows="5" onChange={this.onchangeAddress}></Input>
                                        </Col>
                                    </Row>
                                    <br />
                                    <hr />
                                    <Row>
                                        <Col align="center">
                                            <Label >ตำแหน่ง</Label>
                                            <Row>

                                                <Col>
                                                    <Input type="text" name="lat" placeholder="ละติจูด" onChange={this.onchangelat}></Input>
                                                </Col>
                                                <Col>
                                                    <Input type="text" name="lng" placeholder="ลองติจูด" onChange={this.onchangelng}></Input>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Table>
                            </Container>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="submit" color="primary" onClick={this.toggle}>ตกลง</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>ยกเลิก</Button>
                        </ModalFooter>
                    </form>
                </Modal>

                <Row style={{ paddingLeft: '160px', paddingRight: '250px' }}>
                    <Col sm={8}>
                        <div className="container row" >
                            {this.createcard()}
                        </div>
                    </Col>
                    <Col sm={4} align="center" >
                        <img src={require('../../img/arrow.gif')} height="120" style={{ paddingBottom: '20px' }} alt="arrow" /><br />
                        <button type="button" onClick={this.toggle} className="btn btn-info btn-lg"> เพิ่มตำแหน่ง </button>
                    </Col>
                </Row>

            </div>

        );
    }
}