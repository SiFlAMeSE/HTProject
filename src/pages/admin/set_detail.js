import React from 'react';
import { Table, Button, Input, FormGroup, Form, Container, Row, Col, Label } from 'reactstrap';
import locationBG from '../../img/BG_bl.jpg';
import axios from 'axios';

export default class set_detail extends React.Component {
    constructor(props){
        super(props);
        this.onchangePosition = this.onchangePosition.bind(this);
        this.onchangeMacaddress = this.onchangeMacaddress.bind(this);
        this.onchangeTemp_Low = this.onchangeTemp_Low.bind(this);
        this.onchangeTemp_Hight = this.onchangeTemp_Hight.bind(this);
        this.onchangeHumdi_Low = this.onchangeHumdi_Low.bind(this);
        this.onchangeHumdi_Hight = this.onchangeHumdi_Hight.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Position: '',
            Macaddress: '',
            Temp_Low: '',
            Temp_Hight: '',
            Humdi_Low: '',
            Humdi_Hight: ''
        }
    }
    onchangePosition(e){
        this.setState({
            Position: e.target.value
        });
    }
    onchangeMacaddress(e){
        this.setState({
            Macaddress: e.target.value
        });
    }
    onchangeTemp_Low(e){
        this.setState({
            Temp_Low: e.target.value
        });
    }
    onchangeTemp_Hight(e){
        this.setState({
            Temp_Hight: e.target.value
        });
    }
    onchangeHumdi_Low(e){
        this.setState({
            Humdi_Low: e.target.value
        });
    }
    onchangeHumdi_Hight(e){
        this.setState({
            Humdi_Hight: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        const Senser = {
            Position: this.state.Position,
            Macaddress: this.state.Macaddress,
            Temp_Low: this.state.Temp_Low,
            Temp_Hight: this.state.Temp_Hight,
            Humdi_Low: this.state.Humdi_Low,
            Humdi_Hight: this.state.Humdi_Hight
        }
        axios.post('http://localhost:5000/sensers/add', Senser)
        .then(function(res){
            if(res.data == 'Server added successfully'){
                window.location = "/setdetail"
            }
        })
        .catch(function(err){
            console.log('error');
        })

        this.setState({
            Position: '',
            Macaddress: '',
            Temp_Low: '',
            Temp_Hight: '',
            Humdi_Low: '',
            Humdi_Hight: ''
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
                        <h1>ตั้งค่าอุปกรณ์</h1>
                    </center>

                    <span className="probootstrap-animate">
                        <a className="probootstrap-scroll-down js-next" href="#next-section">คลิกเลื่อน
                        <i className="icon-chevron-down"></i></a></span>
                </section>
                <div>
                    <section id="next-section" className="probootstrap-section">
                        <Container>
                            <form onSubmit={this.onSubmit}>
                                <Table>
                                    <Row>
                                        <Col>
                                            <Label>จุดที่ตั้ง</Label>
                                            <Input type="text" name="name" placeholder="ตำแหน่ง" onChange={this.onchangePosition}></Input>
                                            <Label>รหัสอุปกรณ์</Label>
                                            <Input type="text" name="mac" placeholder="Mac Address" onChange={this.onchangeMacaddress}></Input>

                                            <Table>
                                                <Row>
                                                    <Col>
                                                        <Label>ค่าอุณหภูมิต่ำสุด</Label>
                                                        <Input type="text" name="mintem" placeholder="ค่าน้อยสุด" onChange={this.onchangeTemp_Low}></Input>
                                                    </Col>
                                                    <Col>
                                                        <Label>ค่าอุณหภูมิสูงสุด</Label>
                                                        <Input type="text" name="maxtem" placeholder="ค่ามากสุด" onChange={this.onchangeTemp_Hight}></Input>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Label>ค่าความชื้นต่ำสุด</Label>
                                                        <Input type="text" name="minhum" placeholder="ค่าน้อยสุด" onChange={this.onchangeHumdi_Low}></Input>
                                                    </Col>
                                                    <Col>
                                                        <Label>ค่าความชื้นสูงสุด</Label>
                                                        <Input type="text" name="maxhum" placeholder="ค่ามากสุด" onChange={this.onchangeHumdi_Hight}></Input>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Button type="submit" color="success">ตกลง</Button>{' '}
                                                    </Col>
                                                </Row>
                                            </Table>

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