import React from 'react';
import { Table, Button, Input, FormGroup, Form, Container, Row, Col } from 'reactstrap';
import locationBG from '../../img/BG_bl.jpg';

export default class monitoring extends React.Component {

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
            <h1>การตรวจสอบ</h1>
          </center>

          <span className="probootstrap-animate">
            <a className="probootstrap-scroll-down js-next" href="#next-section">คลิกเลื่อน
                        <i className="icon-chevron-down"></i></a></span>
        </section>
        <br /><br /><br />
        <Container>
          <Table>
            <Row align="center">
              <Col>
                <Form>
                  <Input type="select">
                    <option>สถานที่</option>
                    <option>Loca 1</option>
                    <option>Loca 2</option>
                    <option>Loca 3</option>
                    <option>Loca 4</option>
                  </Input>
                </Form>
              </Col>
              <Col>
                &nbsp;&nbsp;
              <Button color="success">ตกลง</Button>{' '}
              </Col>
            </Row>
          </Table>
        </Container>
        <br /><br /><br />
      </div>
    );
  }
}