import React from 'react';
import { Table, Button, Input, Form, Container, Row, Col } from 'reactstrap';
import { Line } from 'react-chartjs-2';

export default class monitoring extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: {
        labels: ['ตัวที่1', 'ตัวที่2', 'ตัวที่3', 'ตัวที่4', 'ตัวที่5',
          'ตัวที่6', 'ตัวที่7', 'ตัวที่8', 'ตัวที่9', 'ตัวที่10',
          'ตัวที่11', 'ตัวที่12', 'ตัวที่13', 'ตัวที่14', 'ตัวที่15',
          'ตัวที่16', 'ตัวที่17', 'ตัวที่18', 'ตัวที่19', 'ตัวที่20',
          'ตัวที่21', 'ตัวที่22', 'ตัวที่23', 'ตัวที่24', 'ตัวที่25',
          'ตัวที่26', 'ตัวที่27', 'ตัวที่28', 'ตัวที่29', 'ตัวที่30',
          'ตัวที่31', 'ตัวที่32', 'ตัวที่33', 'ตัวที่34', 'ตัวที่35',
          'ตัวที่36', 'ตัวที่37', 'ตัวที่38', 'ตัวที่39', 'ตัวที่40'],
        datasets: [
          {
            label: 'อุณหภูมิ',
            data: [{ y: 20 }, { y: 10 }, { y: 80 }, { y: 8 }, { y: 8 },
            { y: -20 }, { y: 10 }, { y: 80 }, { y: 8 }, { y: 8 },
            { y: 20 }, { y: 10 }, { y: 80 }, { y: 8 }, { y: 8 },
            { y: 20 }, { y: 10 }, { y: 80 }, { y: 8 }, { y: 8 },
            { y: 20 }, { y: 10 }, { y: 80 }, { y: 8 }, { y: 8 },
            { y: 20 }, { y: 10 }, { y: 80 }, { y: 8 }, { y: 8 },
            { y: 20 }, { y: 10 }, { y: 80 }, { y: 8 }, { y: 8 },
            { y: 20 }, { y: 10 }, { y: 80 }, { y: 8 }, { y: 8 }
            ],
            backgroundColor: [
              'rgba(75, 99, 135, 0.6)',
            ]
          },
          {
            label: 'ความชื้น',
            data: [{ y: 28 }, { y: 5 }, { y: 6 }, { y: 28 }, { y: 28 },
            { y: 28 }, { y: 5 }, { y: 6 }, { y: 28 }, { y: 28 },
            { y: 28 }, { y: 5 }, { y: 6 }, { y: 28 }, { y: 28 },
            { y: 28 }, { y: 5 }, { y: 6 }, { y: 28 }, { y: 28 },
            { y: 28 }, { y: 5 }, { y: 6 }, { y: 28 }, { y: 28 },
            { y: 28 }, { y: 5 }, { y: 6 }, { y: 28 }, { y: 28 },
            { y: 28 }, { y: 5 }, { y: 6 }, { y: 28 }, { y: 28 },
            { y: 28 }, { y: 5 }, { y: 6 }, { y: 28 }, { y: 28 },
            ],
            backgroundColor: [
              'rgba(2,  99, 135, 0.6)'
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
        </Container>
        <Row >
          <Col md={11} style={{ paddingLeft: '150px', paddingBottom: '20px' }}> <div className="chart">
            <Line height="550px"
              data={this.state.chartData}
              options={{
                responsive: true,
                legend: {
                  display: false,
                  labels: {
                    boxWidth: 50
                  }
                },
                maintainAspectRatio: false,
                scales: {
                  yAxes: [{
                    ticks: {
                      max: 100,
                      min: -60,
                      stepSize: 20
                    }
                  }]
                }
              }}
            />
          </div>
          </Col>
        </Row>





      </div>
    );
  }
}