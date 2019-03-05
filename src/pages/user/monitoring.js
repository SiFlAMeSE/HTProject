import React from 'react';
import { Table, Button, Input, Form, Container, Row, Col } from 'reactstrap';
import { Line } from 'react-chartjs-2';

export default class monitoring extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: {
        labels: ['ตัวที่1', 'ตัวที่2', 'ตัวที่3', 'ตัวที่4'],
        datasets: [
          {
            label: 'อุณหภูมิ',
            data: [{ x: 10, y: 20 }, { x: 15, y: 10 }, { x: 20, y: 80 }, { x: 12, y: 8 }
            ],
            backgroundColor: [
              'rgba(75, 99, 135, 0.6)',
            ]
          },
          {
            label: 'ความชื้น',
            data: [{ x: 55, y: 28 }, { x: 4, y: 5 }, { x: 8, y: 6 }, { x: 36, y: 28 }
            ],
            backgroundColor: [
              'rgba(255, 99, 135, 0.6)',
            ]
          }
        ]
      }
    }

  }
  render() {
    return (
      <div>
        <section id="space">
          <div className="banner-h">
            <div className="text-cobg">
              การตรวจสอบ
                    </div>
          </div>
        </section>
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
          <div className="chart">
            <Line
              data={this.state.chartData}
              options={{
                maintainAspectRatio: false
              }}
            />
          </div>
        </Container>
      </div>
    );
  }
}