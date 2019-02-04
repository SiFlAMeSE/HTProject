import React from 'react';
import { Table, Button, Input, Container, Row, Col, Label, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import locationBG from '../../img/BG_bl.jpg';
import axios from 'axios';
import TabLoca from './TabRowLocation';
var data_ss;
export default class set_location extends React.Component {
    constructor(props) {
        super(props);
        this.onchangeNameLocation = this.onchangeNameLocation.bind(this);
        this.onchangeAddress = this.onchangeAddress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Name_Lo: '',
            Address: '',
            Id_Admin: ''
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
        //console.log(ss._id)
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

    onSubmit(e) {
        e.preventDefault();
        const Locations = {
            Name_Lo: this.state.Name_Lo,
            Address: this.state.Address,
            Id_Admin: data_ss._id
        }
        axios.post('http://localhost:5000/locations/add', Locations)
            .then(function (res) {
                if (res.data === 'Server added successfully') {
                    window.location = "/setlocation"
                    //console.log(item);
                    // console.log('OK');
                }
            })
            .catch(function (err) {
                console.log('error');
            })

        this.setState({
            Name_Lo: '',
            Address: ''
        });
    }


    componentDidMount() {
        axios.get('http://localhost:5000/locations/location_list')
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
        return this.state.Location.map(function (object, i) {
            return <TabLoca obj={object} key={i} />;
        });
    }

    render() {
        const divStyle = {
            color: 'blue',
            backgroundImage: 'url(' + locationBG + ')',
        };

        return (
            <div>
                <section className="probootstrap-intro probootstrap-intro-inner" style={divStyle} data-stellar-background-ratio="0.5">
                    <br /><br /><br /><br /><br /><br /><br /><br />
                    <center>
                        <h1>ลงทะเบียนสถานที่</h1>
                    </center>

                    <span className="probootstrap-animate">
                        <a className="probootstrap-scroll-down js-next" href="#next-section">คลิกเลื่อน
                        <i className="icon-chevron-down"></i></a></span>
                </section>
                <div>
                    <section id="next-section" className="probootstrap-section" >

                        <Modal isOpen={this.state.modal}
                            toggle={this.toggle}
                            className={this.props.className}>

                            <ModalHeader toggle={this.toggle}>พื้นที่</ModalHeader>
                            <form onSubmit={this.onSubmit}>
                                <ModalBody>
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
                                                    <Input type="textarea" cols="30" rows="10" onChange={this.onchangeAddress}></Input>
                                                </Col>
                                            </Row>
                                            <br />
                                        </Table>
                                    </Container>
                                </ModalBody>
                                <ModalFooter>
                                    <Button type="submit" color="primary" onClick={this.toggle}>ตกลง</Button>{' '}
                                    <Button color="secondary" onClick={this.toggle}>ยกเลิก</Button>
                                </ModalFooter>
                            </form>
                        </Modal>

                    </section>
                    <Container>
                        {this.createcard()}
                    </Container>

                    <Container>
                        <Row align="right">
                            <Col>
                                <div>
                                    <button type="button" onClick={this.toggle} className="btn btn-danger btn-lg" > เพิ่มตำแหน่ง </button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}