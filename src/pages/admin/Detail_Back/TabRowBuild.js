import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button, Input, Container, Row, Col, Label, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardTitle, CardImg } from 'reactstrap';
var data_ss

class TabRowBuild extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            path: ''
        };
        this.state = {
            data: {},
        };
        this.toggle = this.toggle.bind(this);
        this.onchangeNameBuild = this.onchangeNameBuild.bind(this);
        this.Updatebuild = this.Updatebuild.bind(this);

        this.state = {
            Name_Build: '',
            Id_Loca: '',

        }
    }
    componentWillMount() {
        data_ss = JSON.parse(sessionStorage.getItem('Login_add'))
        this.setState({
            data: data_ss,
            path: this.props.params
        })
    }


    toggle() {
        this.setState({
            modal: !this.state.modal
        });
        axios.get('http://localhost:5000/build/build/' + this.props.obj._id)
            .then(response => {
                this.setState({
                    Name_Build: response.data.Name_Build
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onchangeNameBuild(e) {
        this.setState({
            Name_Build: e.target.value
        });
    }

    Deletebuild() {
        axios.post('http://localhost:5000/build/Removebuild/' + this.props.obj._id)
            .then((res) => {
                if (res.data === 'Build has been Deleted') {
                    window.location.replace('/setbuild/' + this.props.params)
                    // console.log(this.state.path);
                } else {
                    console.log("error");
                }
            })
    }

    Updatebuild(e) {
        e.preventDefault();
        const obj = {
            Name_Build: this.state.Name_Build
        };
        axios.post('http://localhost:5000/build/update/' + this.props.obj._id, obj)
            .then((res) => {
                if (res.data === 'Updated!') {
                    // console.log(res.data);
                    console.log(this.state.path);
                    window.location.replace('/setbuild/' + this.props.params)
                } else {
                    console.log('error');
                }
            })
    }

    render() {
        return (
            <div>
                <Row>
                    <Col xs="15" style={{ paddingRight: "50px" }}>
                        <Card>
                            <CardImg width="150px" height="150px" src={require('../../../img/location.gif')} />
                            <CardTitle>{this.props.obj.Name_Build}</CardTitle>
                            <Button href={"/setdetail/" + this.state.path} color="primary">เพิ่มอุปกรณ์</Button>
                            <Button onClick={this.toggle} color="secondary">การจัดการ</Button>
                        </Card>
                    </Col>
                </Row>
                <br /><br />

                {/* เมนูตัวเลือกด้านใน */}
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
                                            <Label>ชื่ออาคาร</Label>
                                            <Input className="form-control" name="location" value={this.state.Name_Build} onChange={this.onchangeNameBuild}></Input>
                                        </Col>
                                    </Row>
                                    <br />
                                </Table>
                            </Container>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="info" onClick={this.Updatebuild}>แก้ไขข้อมูล</Button>
                            <Button color="danger" onClick={() => { if (window.confirm('คุณต้องการลบ : ' + this.props.obj.Name_Build + ' ใช่ไหม')) { this.Deletebuild() } }}>ลบข้อมูล</Button>
                            <Button color="secondary" onClick={this.toggle}>ยกเลิก</Button>
                        </ModalFooter>
                    </form>
                </Modal>
            </div>


        );
    }
}

export default TabRowBuild;