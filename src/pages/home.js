import React, { Component } from 'react';
import '../css/home.css';
import { Container, Col, Row } from 'reactstrap';

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
                        <img src={require('../img/cover.jpg')} className="picture" />
                        {/* <img src={require('../img/icon.png')} className="iconfront1"/> */}
                        {/* <div className="iconfront1"></div> */}
                        <div className="content">
                            <span className="content-cotext">
                                <span className="content-text">ระบบแจ้งเตือน</span>
                                <br />
                                <span className="content-text">อุณหภูมิและความชื้น</span>
                            </span>
                        </div>
                    </div>
                </section>
                <div className="bg-mid-low" align="center" >ใช้ได้สำหรับทุกองค์กร</div>
                <Container className="space">
                    <Row align="center">
                        <Col xs={6} md={4} id="b">
                            ตรวจสอบสถานะปัจจุบัน
                        </Col>
                        <Col xs={6} md={4} id="b">
                            ประวัติย้อนหลัง
                        </Col>
                        <Col xs={6} md={4} id="b">
                            ตรวจสอบความผิดหลาด
                        </Col>
                    </Row>
                </Container>
            </home>
        );
    }
}

export default home;
