import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Col, Row } from 'reactstrap';
import './css/footer.css';


class footer extends Component {
    render() {
        return (

            <footer className="bg-footer">
                <Container>
                    <Row>
                        <Col sm={8}>
                            <div className="headtopic">
                                วัตถุประสงค์
                        </div>
                            <div>
                                การพัฒนาเว็บแอพพลิเคชั่นระบบแบบตอบกลับทันทีและติดตามเฝ้าระวังอุณหภูมิและความชื้นแบบออนไลน์
                            </div>
                        </Col>

                        <Col sm={4}>
                        <div className="headtopic">
                                คณะผู้จัดทำ
                        </div>
                            <div>
                                นายสิรศักดิ์  สุนทรท้วม
                            </div>
                            <div>
                                นายสมโภชน์  สระทองแง๊ก
                            </div>
                    </Col>
                    </Row>
                    <br />
                </Container>
                <div className="bg-foot-low" align="center" >Copyright © 2019 Project Temperature And Humidnity</div>
            </footer>


        );
    }
}

export default footer;
