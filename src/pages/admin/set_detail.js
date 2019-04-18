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
            Id_Map: '',
            Picturemap: {}

        }

        this.state = {
            modal: false,
        };
        this.toggle = this.toggle.bind(this);

        this.state = { Senser: [] };
    }
    componentWillMount() {
        this.setState({
            path: this.props.params,
            reload: this.props.match.params.id,

        })
        _id = this.props.match.params.idmap

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
            Id_Build: this.props.match.params.id,
            Id_Map: this.props.match.params.idmap
        }
        axios.post('http://206.189.94.192:5000/sensers/add', Senser)
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
            Id_Build: '',
            Id_Map: ''
        });

        const Authorize = {
            Key_Room: key,
            Id_User: data_ss
        }

        axios.post('http://206.189.94.192:5000/authorize/add', Authorize)
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
        axios.get('http://206.189.94.192:5000/sensers/senser_list')
            .then(response => {
                const Senser = response.data;
                this.setState({ Senser });
                //console.log(Senser);
            })
            .catch(function (error) {
                console.log(error);
            })


        axios.get('http://206.189.94.192:5000/imageupload/picmap/' + this.props.match.params.idmap)
            .then(res => {
                this.setState({
                    Picturemap: res.data
                });
            })
    }

    createcardDetail() {
        return this.state.Senser.map(function (object, i) {
            if (_id === object.Id_Map) {
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

        axios.post('http://206.189.94.192:5000/imageupload/up', data)
            .then(res => {
                console.log(res.data);
            });
    }

    previewFile() {


        var reader = new FileReader();

        reader.onloadstart = () => {
        }
        reader.onloadend = () => {
            console.log(this.state.Picturemap)
        };
        // reader.readAsDataURL(this.state.Picturemap)

        // <img src={this.state.Picturemap.Id_Map} />

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
                <div className="bg-mid-low" align="center" >แผนที่แสดงเซนเซอร์</div>
                <br />
                <center>
                    <Table style={{ width: '80%' }} >
                        <center>
                            {/* {this.previewFile()} */}
                            {
                                this.state.Picturemap !== undefined &&
                                <img src={this.state.Picturemap.Id_Map} alt="ok" />
                            }
                        </center>
                    </Table>
                </center>
                <br />

                <center>
                    <Table style={{ width: '95%' }}>
                        <Row>
                            <Col style={{ fontSize: '48px', paddingTop: '20px', }} align='center' >
                                เพิ่มเซนเซอร์
                            </Col>
                            <Col align='center'>
                                <button type="button" onClick={this.toggle} className="btn btn-info btn-lg" > คลิ๊ก </button>
                            </Col>
                        </Row>
                        <br />
                        <hr />
                    </Table>
                    <Row>
                        <Col xl={12}>
                            <div className="container" >
                                {this.createcardDetail()}
                            </div>
                        </Col>
                    </Row>
                </center>

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




            </div >

        );
    }
}