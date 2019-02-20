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
        // console.log(this.state.reload);
        // console.log(this.state.path);
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
        axios.post('http://localhost:5000/build/add', Build)
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
        axios.get('http://localhost:5000/build/build_list')
            .then(response => {
                const Build = response.data;
                this.setState({ Build });
                // console.log(Build);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    createcard() {
        return this.state.Build.map(function (object, i) {
            if (_id === object.Id_Loca) {
                return <TabBuild obj={object} key={i} />
            }
        });
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.state.modal}
                    toggle={this.toggle}
                >

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
                <Container>
                    <div className="container row">
                        {this.createcard()}
                        {/* {
                                this.state.Build.map((object, i) => {object.Id_Loca === this.props.match.params.id ? <TabBuild obj={object} key={i} params={this.props.match.params.id}/>} )
                            } */}
                    </div>
                </Container>
                <Container>
                    <Row align="right">
                        <Col>
                            <button type="button" onClick={this.toggle} className="btn btn-danger btn-lg" > เพิ่มอาคาร </button>
                        </Col>
                    </Row>
                </Container>

            </div>

        );
    }
}