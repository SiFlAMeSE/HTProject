import React from 'react';
import { Table, Button, Input, Form, Container, Row, Col } from 'reactstrap';
import { Bar } from 'react-chartjs-2';
import 'chartjs-plugin-annotation';

export default class monitoring extends React.Component {

  render() {
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
        <section id="space">
          <div className="banner-h">
            <div className="text-cobg">
              test
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
          <Bar
            data={[0, 10, 5, 2, 20, 30, 45]}
            width={100}
            height={50}
            options={options}
          />
        </Container>
      </div>
    );
  }
}