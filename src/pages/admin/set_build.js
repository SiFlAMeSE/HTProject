import React from 'react';
import { Table, Button, Input, FormGroup, Form, Container, Row, Col, Label } from 'reactstrap';
import locationBG from '../../img/BG_bl.jpg';
import axios from 'axios';

export default class set_build extends React.Component {
    constructor(props){
        super(props);
        this.onchangeNameBuild = this.onchangeNameBuild.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Name_Build: ''
        }
    }
    onchangeNameBuild(e){
        this.setState({
            Name_Build: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        const Build ={
            Name_Build: this.state.Name_Build
        }
        axios.post('http://localhost:5000/build/add', Build)
        .then(function(res){
            if(res.data == 'Server added successfully'){
                window.location = "/setbuild"
            }
        })
        .catch(function(err){
            console.log('error');
        })

        this.setState({
            Name_Build: ''
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
                        <h1>ลงทะเบียนอาคาร</h1>
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
                                            <Label>ชื่ออาคาร</Label>
                                            <Input type="text" name="bulid" placeholder="ใส่ชื่ออาคาร" onChange={this.onchangeNameBuild}></Input>
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