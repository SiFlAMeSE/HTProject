import React from 'react';
import { Table, Button, Input, Form, Container, Row, Col } from 'reactstrap';
import locationBG from '../../img/BG_bl.jpg';
import { Bar } from 'react-chartjs-2';
import 'chartjs-plugin-annotation';

export default class monitoring extends React.Component {

  render() {
    const divStyle = {
      color: 'blue',
      backgroundImage: 'url(' + locationBG + ')',
    };

    const options = {
      annotation: {
        annotations: [{
          drawTime: 'afterDatasetsDraw',
          borderColor: 'red',
          borderDash: [2, 2],
          borderWidth: 2,
          mode: 'vertical',
          type: 'line',
          value: 10,
          scaleID: 'x-axis-0',
        }]
      },
      maintainAspectRation: false
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
          <Bar
	         data={ [0, 10, 5, 2, 20, 30, 45]}
	         width={100}
	         height={50}
	         options={options}
             />
        </Container>
        <br /><br /><br />
      </div>
    );
  }
}