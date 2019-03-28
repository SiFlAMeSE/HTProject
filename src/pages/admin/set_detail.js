import React from 'react';
import { Table, Button, Input, Container, Row, Col, Label, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';
import TabDetail from './Detail_Back/TabRowDetail';
const uuidv1 = require('uuid/v1');
var _id;
var data_ss

export default class set_detail extends React.Component {
    constructor(props) {
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
            Humdi_Hight: '',
            Key_Room: '',
            Id_Build: '',

            file: '',
            Pictures: null,
        }
        this.state = {
            modal: false,
            modal1: false
        };
        this.toggle = this.toggle.bind(this);
        this.togglemap = this.togglemap.bind(this);

        this.state = { Senser: [] };
    }
    componentWillMount() {
        this.setState({
            path: this.props.params,
            reload: this.props.match.params.id
        })
        _id = this.props.match.params.id

        data_ss = JSON.parse(sessionStorage.getItem('Login_add'))
        this.setState({
            data: data_ss
        })
    }
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    togglemap() {
        this.setState({
            modal1: !this.state.modal1,
            file: ''
        });
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
    onSubmit(e) {
        e.preventDefault();
        var key = uuidv1();
        const Senser = {
            Position: this.state.Position,
            Macaddress: this.state.Macaddress,
            Temp_Low: this.state.Temp_Low,
            Temp_Hight: this.state.Temp_Hight,
            Humdi_Low: this.state.Humdi_Low,
            Humdi_Hight: this.state.Humdi_Hight,
            Key_Room: key,
            Id_Build: this.props.match.params.id
        }
        axios.post('http://localhost:5000/sensers/add', Senser)
            .then((res) => {
                if (res.data === 'Server added successfully') {
                    window.location.reload()
                }
            })
            .catch(function (err) {
                console.log('error');
            })

        this.setState({
            Position: '',
            Macaddress: '',
            Temp_Low: '',
            Temp_Hight: '',
            Humdi_Low: '',
            Humdi_Hight: '',
            Key_Room: '',
            Id_Build: ''
        });

        const Authorize = {
            Key_Room: key,
            Id_User: data_ss
        }

        axios.post('http://localhost:5000/authorize/add', Authorize)
            .then((res) => {
                if (res.data === 'Server added successfully') {
                    window.location.reload()
                }
            })
            .catch(function (err) {
                console.log('error');
            })
    }

    componentDidMount() {
        axios.get('http://localhost:5000/sensers/senser_list')
            .then(response => {
                const Senser = response.data;
                this.setState({ Senser });
                //console.log(Senser);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    createcardDetail() {
        return this.state.Senser.map(function (object, i) {
            if (_id === object.Id_Build) {
                return <TabDetail obj={object} key={i} />
            } else
                return false
        });
    }

    // uploadpicturemap
    fileSelectedHandler = event => {
        this.setState({
            file: event.target.files[0]
        })
        var reader = new FileReader();

        const fd = new FormData();
        fd.append('image', event.target.files[0]);

        reader.onloadstart = () => {
        }
        reader.onloadend = () => {
            this.setState({
                file: reader.result,
                Pictures: fd


            })

        };
        reader.readAsDataURL(event.target.files[0])
    }

    fileUploadHandler = () => {
        // console.log(this.state.Pictures)

        let data = {
            img: this.state.file,
            Id_Build: this.props.match.params.id
        }

        axios.post('http://localhost:5000/imageupload/up', data)
            .then(res => {
                console.log(res.data);
            });
    }

    render() {
        return (
            <div>
                <section id="space">
                    <div className="banner-h">
                        <div className="text-cobg">
                            ลงทะเบียนเซนเซอร์
                    </div>
                    </div>
                </section>
                <Modal isOpen={this.state.modal}
                    toggle={this.toggle}>

                    <ModalHeader toggle={this.toggle}>รายละเอียดอุปกรณ์</ModalHeader>
                    <form onSubmit={this.onSubmit}>
                        <ModalBody>
                            <Container>
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
                                            </Table>
                                        </Col>
                                    </Row>
                                </Table>
                            </Container>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="submit" color="primary" onClick={this.toggle}>ตกลง</Button>
                            <Button color="secondary" onClick={this.toggle}>ยกเลิก</Button>
                        </ModalFooter>
                    </form>
                </Modal>

                <Modal isOpen={this.state.modal1}
                    togglemap={this.togglemap}>

                    <ModalHeader togglemap={this.togglemap}>เพิ่มรูปภาพ</ModalHeader>
                    <ModalBody>
                        <Container>
                            <input type="file" onChange={this.fileSelectedHandler} name="image" />
                            {/* <button type="button" onClick={this.fileUploadHandler}>Upload</button> */}
                            <br />
                            {
                                this.state.file !== '' &&
                                <img src={this.state.file} alt="Picture" />
                            }
                        </Container>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={this.fileUploadHandler}>อัพโหลด</Button>
                        <Button color="secondary" onClick={this.togglemap}>ปิด</Button>
                    </ModalFooter>
                </Modal>


                <Row style={{ paddingLeft: '160px', paddingRight: '250px' }}>
                    <Col sm={8}>
                        <div className="container row" >
                            {this.createcardDetail()}
                        </div>
                    </Col>
                    <Col sm={4} align="center" >
                        <img src={require('../../img/arrow.gif')} height="120" style={{ paddingBottom: '20px' }} alt="arrow" /><br />
                        <button type="button" onClick={this.toggle} className="btn btn-info btn-lg" > เพิ่มอุปกรณ์ </button>
                        <br /><br />
                        <img src={require('../../img/arrow.gif')} height="120" style={{ paddingBottom: '20px' }} alt="arrow" /><br />
                        <button type="button" onClick={this.togglemap} className="btn btn-info btn-lg" > เพิ่มรูปต่ำแหน่ง </button>
                    </Col>

                </Row>
            </div >

        );
    }
}