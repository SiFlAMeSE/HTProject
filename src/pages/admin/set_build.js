import React from 'react';
import { Table, Button, Input, Container, Row, Col, Label, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';
import TabBuild from './Detail_Back/TabRowBuild';
var _id;

export default class set_build extends React.Component {
    constructor(props) {
        super(props);
        this.onchangeNameBuild = this.onchangeNameBuild.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Name_Build: '',
            Id_Loca: '',
            path: '',
            reload: ''
        }
        this.state = {
            modal: false
        };
        this.toggle = this.toggle.bind(this);
        this.state = { Build: [] };
    }

    componentWillMount() {
        this.setState({
            path: this.props.params,
            reload: this.props.match.params.id
        })
        _id = this.props.match.params.id
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    onchangeNameBuild(e) {
        this.setState({
            Name_Build: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const Build = {
            Name_Build: this.state.Name_Build,
            Id_Loca: this.props.match.params.id
        }
        axios.post('http://206.189.94.192:5000/build/add', Build)
            .then((res) => {
                if (res) {
                    window.location.replace('/setbuild/' + this.state.reload)
                }
                else {
                    console.log("error")
                }
            })
        this.setState({
            Name_Build: '',
            Id_Loca: ''
        });
    }

    componentDidMount() {
        axios.get('http://206.189.94.192:5000/build/build_list')
            .then(response => {
                const Build = response.data;
                this.setState({ Build });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    createcardBuild() {
        return this.state.Build.map(function (object, i) {
            if (_id === object.Id_Loca) {
                return <TabBuild obj={object} key={i} />
            } else
                return false
        });
    }

    render() {
        return (
            <div>
                <section id="space">
                    <div className="banner-h">
                        <div className="text-cobg">
                            ลงทะเบียนอาคาร
                    </div>
                    </div>
                </section>

                <center>
                    <Table style={{ width: '95%' }}>
                        <Row>
                            <Col style={{ fontSize: '48px', paddingTop: '20px', }} align='center' >
                                เพิ่มอาคาร
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
                            <div className="container row" >
                                {this.createcardBuild()}
                            </div>
                        </Col>
                    </Row>
                </center>

                <Modal isOpen={this.state.modal}
                    toggle={this.toggle}>

                    <ModalHeader toggle={this.toggle}>ระบุชื่ออาคาร</ModalHeader>
                    <form onSubmit={this.onSubmit}>
                        <ModalBody>
                            <Container>
                                <Table>
                                    <Row>
                                        <Col>
                                            <Label>ชื่ออาคาร</Label>
                                            <Input type="text" name="location" placeholder="ใส่ชื่ออาคาร" onChange={this.onchangeNameBuild}></Input>
                                        </Col>
                                    </Row>
                                    <br />
                                </Table>
                            </Container>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="submit" color="primary" onClick={this.toggle}>ตกลง</Button>
                            <Button color="secondary" onClick={this.toggle}>ยกเลิก</Button>
                        </ModalFooter>
                    </form>
                </Modal>



            </div>

        );
    }
}