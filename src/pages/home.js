import React, { Component } from 'react';
import { Container, Col, Row, Table } from 'reactstrap';

import '../css/home.css';

class home extends Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     data: {}
    //   }
    //   // const save = sessionStorage
    //   // alert("Login_user, " + sessionStorage.getItem("Fname"))
    //   // console.log(save)
    // }

    // componentWillMount() {
    //   var ss = JSON.parse(sessionStorage.getItem('Login_user'))
    //   this.setState({ data: ss })
    //   // console.log('first')

    // }

    render() {
        return (
            <home>
                <section className="banner-top">
                    <div className="co-picture">
                        <Table style={{ width: '100%' }}>
                            <Row>
                                <img src={require('../img/esp32.png')} className="picture" alt="esp32" />
                                <div className="content">
                                    <span className="content-cotext">
                                        <span className="content-text">ระบบแจ้งเตือน</span>
                                        <br />
                                        <span className="content-text">อุณหภูมิและความชื้น</span>
                                    </span>
                                </div>
                            </Row>
                        </Table>

                    </div>
                </section>
                <div className="bg-mid-low" align="center" >ใช้ได้สำหรับทุกองค์กร</div>

                <center>
                    <Table style={{ width: '80%' }}>
                        <Row align='center'>
                            <Col md="4" id="b">
                                ตรวจสอบสถานะปัจจุบัน
                            <br />
                                <img src={require('../img/h1.png')} alt="alert" height="200px" />
                            </Col>
                            <Col md="4" id="b">
                                ประวัติย้อนหลัง
                            <br />
                                <img src={require('../img/h2.png')} alt="history" height="200px" />
                            </Col>
                            <Col md="4" id="b">
                                ตรวจสอบความผิดพลาด
                            <br />
                                <img src={require('../img/h3.png')} alt="check" height="200px" />
                            </Col>
                        </Row>
                    </Table>
                </center>





            </home>
        );
    }
}

export default home;
