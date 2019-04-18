import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button, Input, Container, Row, Col, Label, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardTitle, CardText, CardImg } from 'reactstrap';
var data_ss
// const uuidv1 = require('uuid/v1');

class TabRowBuild extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            data: {}
        };
        this.toggle = this.toggle.bind(this);

        this.onchangePosition = this.onchangePosition.bind(this);
        this.onchangeMacaddress = this.onchangeMacaddress.bind(this);
        this.onchangeTemp_Low = this.onchangeTemp_Low.bind(this);
        this.onchangeTemp_Hight = this.onchangeTemp_Hight.bind(this);
        this.onchangeHumdi_Low = this.onchangeHumdi_Low.bind(this);
        this.onchangeHumdi_Hight = this.onchangeHumdi_Hight.bind(this);
        this.UpdateSenser = this.UpdateSenser.bind(this);

        this.state = {
            Position: '',
            Macaddress: '',
            Temp_Low: '',
            Temp_Hight: '',
            Humdi_Low: '',
            Humdi_Hight: '',
            Key_Room: '',
            Id_Build: ''
        }

    }

    componentWillMount() {
        data_ss = JSON.parse(sessionStorage.getItem('Login_add'))
        this.setState({
            data: data_ss
        })
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
        axios.get('http://206.189.94.192:5000/sensers/senser/' + this.props.obj._id)
            .then(response => {
                this.setState({
                    Position: response.data.Position,
                    Macaddress: response.data.Macaddress,
                    Temp_Low: response.data.Temp_Low,
                    Temp_Hight: response.data.Temp_Hight,
                    Humdi_Low: response.data.Humdi_Low,
                    Humdi_Hight: response.data.Humdi_Hight,
                    Key_Room: response.data.Key_Room
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onchangePosition(e) {
        this.setState({
            Position: e.target.value
        });
    }
    onchangeMacaddress(e) {
        this.setState({
            Macaddress: e.target.value
        });
    }
    onchangeTemp_Low(e) {
        this.setState({
            Temp_Low: e.target.value
        });
    }
    onchangeTemp_Hight(e) {
        this.setState({
            Temp_Hight: e.target.value
        });
    }
    onchangeHumdi_Low(e) {
        this.setState({
            Humdi_Low: e.target.value
        });
    }
    onchangeHumdi_Hight(e) {
        this.setState({
            Humdi_Hight: e.target.value
        });
    }

    Deletesenser() {
        axios.post('http://206.189.94.192:5000/sensers/Removesenser/' + this.props.obj._id)
            .then((res) => {
                if (res.data === 'Senser has been Deleted') {
                    // window.location = "/setdetail"
                    //window.location.replace('/setdetail/' + this.props.obj.Id_Build + this.props.match.params.idmap)
                    window.location.reload()
                    console.log('OK');
                } else {
                    console.log('error');
                }
            })
    }

    UpdateSenser(e) {
        e.preventDefault();
        const obj = {
            Position: this.state.Position,
            Macaddress: this.state.Macaddress,
            Temp_Low: this.state.Temp_Low,
            Temp_Hight: this.state.Temp_Hight,
            Humdi_Low: this.state.Humdi_Low,
            Humdi_Hight: this.state.Humdi_Hight
        };
        axios.post('http://206.189.94.192:5000/sensers/update/' + this.props.obj._id, obj)
            .then((res) => {
                if (res.data === 'Updated!') {
                    console.log(res.data);
                    //window.location.replace('/setdetail/' + this.props.obj.Id_Build + this.props.match.params.idmap)
                    window.location.reload()
                } else {
                    console.log('error');
                }
            })
    }

    render() {
        return (
            <div>
                <section style={{ paddingRight: '16px', paddingBottom: '25px' }} >
                    <Card style={{ width: 'auto', height: 'auto',paddingBottom:'10px'}} id="card">
                        <table>
                            <tr>
                                <td rowspan="3" width="30%">
                                    <CardImg height="150px" src={require('../../../img/sensor.gif')} />
                                </td>
                                <td xs="5">
                                    <CardTitle id="b">ตำแหน่ง : {this.props.obj.Position}</CardTitle>
                                </td>
                                <td xs="5">
                                    <CardText>MAC : {this.props.obj.Macaddress}</CardText>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <CardText id="b">Temparature</CardText>
                                </td>
                                <td>
                                    <CardText id="b">Humidity</CardText>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <tr>
                                        <td>Low : {this.props.obj.Temp_Low}</td>
                                    </tr>
                                    <tr>
                                        <td>Hight : {this.props.obj.Temp_Hight}</td>
                                    </tr>
                                </td>
                                <td>
                                    <tr>
                                        <td>Low : {this.props.obj.Humdi_Low}</td>
                                    </tr>
                                    <tr>
                                        <td>Hight : {this.props.obj.Humdi_Hight}</td>
                                    </tr>
                                </td>
                            </tr>
                            <tr >
                                <td align='center'>
                                    <CardText id="b">Key Room</CardText>
                                </td>
                                <td colspan='2' style={{color:'#f00'}}>{this.props.obj.Key_Room}</td>
                            </tr>
                        </table>
                    </Card>
                    <hr />
                    <Button href="/monitoring/undefined" color="primary">ตรวจสอบ</Button>
                    <Button onClick={this.toggle} color="secondary">การจัดการ</Button>
                </section>


                {/* เมนูตัวเลือกด้านใน */}
                <Modal isOpen={this.state.modal}
                    toggle={this.toggle}
                    className={this.props.className}>

                    <ModalHeader toggle={this.toggle}>เซ็นเซอร์</ModalHeader>
                    <form onSubmit={this.onSubmit}>
                        <ModalBody>
                            <Container>
                                <Table>
                                    <Row>
                                        <Col>
                                            <Label>จุดที่ตั้ง</Label>
                                            <Input className="form-control" name="Name" value={this.state.Position} onChange={this.onchangePosition}></Input>
                                        </Col>
                                    </Row>
                                    <br />
                                    <Row>
                                        <Col>
                                            <Label>รหัสอุปกรณ์</Label>
                                            <Input className="form-control" name="mac" value={this.state.Macaddress} onChange={this.onchangeMacaddress}></Input>
                                        </Col>
                                    </Row>
                                    <br />
                                    <Table>
                                        <Row>
                                            <Col>
                                                <Label>ค่าอุณหภูมิต่ำสุด</Label>
                                                <Input className="form-control" name="mintem" value={this.state.Temp_Low} onChange={this.onchangeTemp_Low}></Input>
                                            </Col>
                                            <Col>
                                                <Label>ค่าอุณหภูมิสูงสุด</Label>
                                                <Input className="form-control" name="maxtem" value={this.state.Temp_Hight} onChange={this.onchangeTemp_Hight}></Input>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Label>ค่าความชื้นต่ำสุด</Label>
                                                <Input className="form-control" name="minhum" value={this.state.Humdi_Low} onChange={this.onchangeHumdi_Low}></Input>
                                            </Col>
                                            <Col>
                                                <Label>ค่าความชื้นสูงสุด</Label>
                                                <Input className="form-control" name="maxhum" value={this.state.Humdi_Hight} onChange={this.onchangeHumdi_Hight}></Input>
                                            </Col>
                                        </Row>
                                    </Table>
                                    <br />
                                    <Row>
                                        <Col>
                                            <Label>รหัสสิทธิการเข้าถึง</Label>
                                            <Input className="form-control" name="mac" value={this.state.Key_Room} disabled></Input>
                                        </Col>
                                    </Row>
                                </Table>
                            </Container>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="info" onClick={this.UpdateSenser}>แก้ไขข้อมูล</Button>
                            <Button color="danger" onClick={() => { if (window.confirm('คุณต้องการลบเซนเซอร์ : ' + this.props.obj.Position + ' ใช่ไหม')) { this.Deletesenser() } }}>ลบข้อมูล</Button>
                            <Button color="secondary" onClick={this.toggle} >ยกเลิก</Button>
                        </ModalFooter>
                    </form>
                </Modal>
            </div>


        );
    }
}

export default TabRowBuild;