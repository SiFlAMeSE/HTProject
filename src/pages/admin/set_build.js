import React from 'react';
import { Table, Button, Input, Container, Row, Col, Label, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import locationBG from '../../img/BG_bl.jpg';
import axios from 'axios';
import TabBuild from './Detail_Back/TabRowBuild';


export default class set_build extends React.Component {
    constructor(props) {
        super(props);
        this.onchangeNameBuild = this.onchangeNameBuild.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Name_Build: ''
        }
        this.state = {
            modal: false
        };
        this.toggle = this.toggle.bind(this);
        this.state = { Build: [] };
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
            Name_Build: this.state.Name_Build
        }
        axios.post('http://localhost:5000/build/add', Build)
            .then(function (res) {
                if (res.data === 'Server added successfully') {
                    window.location = "/setbuild"
                }
            })
            .catch(function (err) {
                console.log('error');
            })

        this.setState({
            Name_Build: ''
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

    // createcard() {
    //     return this.state.Build.map(function (object, i) {
    //         return <TabBuild obj={object} key={i} params={this.props.match.params.id} />
    //     });
    // }

    render() {
        const divStyle = {
            color: 'blue',
            backgroundImage: 'url(' + locationBG + ')',
            backgroundSize: 'cover',
        };
        return (
            <div>
                <section className="probootstrap-intro probootstrap-intro-inner" style={divStyle} data-stellar-background-ratio="0.5">
                    <br /><br /><br /><br /><br /><br /><br /><br />
                    <center>
                        <h1>ลงทะเบียนอาคาร</h1>
                        <h3>{this.props.match.params.id}</h3>
                    </center>

                    <span className="probootstrap-animate">
                        <a className="probootstrap-scroll-down js-next" href="#next-section">คลิกเลื่อน
                        <i className="icon-chevron-down"></i></a></span>
                </section>
                <div>
                    <section id="next-section" className="probootstrap-section" >

                        <Modal isOpen={this.state.modal}
                            toggle={this.toggle}
                        // className={this.props.className}
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
                                    <Button type="submit" color="primary" onClick={this.toggle}>ตกลง</Button>{' '}
                                    <Button color="secondary" onClick={this.toggle}>ยกเลิก</Button>
                                </ModalFooter>
                            </form>
                        </Modal>
                    </section>
                    <Container>
                        <div className="justify-content-md-center">
                            {/* {this.createcard()} */}
                            {
                                this.state.Build.map((object,i)=> <TabBuild obj={object} key={i} params={this.props.match.params.id} />)
        
                            }
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
            </div>
        );
    }
}