import React from 'react';
import { Table, Button, Input,  Container, Row, Col, Label } from 'reactstrap';
import locationBG from '../../img/BG_bl.jpg';
import axios from 'axios';

export default class set_location extends React.Component {
    constructor(props){
        super(props);
        this.onchangeNameLocation = this.onchangeNameLocation.bind(this);
        this.onchangeAddress = this.onchangeAddress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Name_Lo: '',
            Address: ''
        }
    }
    onchangeNameLocation(e){
        this.setState({
            Name_Lo: e.target.value
        });
    }
    onchangeAddress(e){
        this.setState({
            Address: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        const Locations = {
            Name_Lo: this.state.Name_Lo,
            Address: this.state.Address
        }
        axios.post('http://localhost:5000/locations/add', Locations)
        .then(function(res){
            if(res.data === 'Server added successfully'){
                window.location = "/setlocation"
            }
        })
        .catch(function(err){
            console.log('error');
        })

        this.setState({
            Name_Lo: '',
            Address: ''
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
                        <Container>
                            <form onSubmit={this.onSubmit}>
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
                                    <Row>
                                        <Col>
                                            <Button type="submit" color="success">ตกลง</Button>{' '}
                                        </Col>
                                    </Row>
                                </Table>
                            </form>
                        </Container>
                    </section>


                </div>
            </div>
        );
    }
}