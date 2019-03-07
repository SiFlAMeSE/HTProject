import React from 'react';
import axios from 'axios';
import { Table, Button, Input, Container, Row, Col } from 'reactstrap';
import SenserChoice from './Choice/SenserChoice';
import Chart from './Chart';
import MonitorChoice from './Choice/MonitorChoice';

var _mac, mac, Build, Location, Dht;
var bu_num, Loca_num, dht_num;
var data_ss;
export default class monitoring extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    }

    this.state = { Senser: [], Location: [], Dht: [] };

  }

  componentWillMount() {
    _mac = this.props.match.params.id
    data_ss = JSON.parse(sessionStorage.getItem('Login_add'))

    console.log(_mac)
  }

  componentDidMount() {

    axios.get('http://localhost:5000/sensers/senser_list')
      .then(response => {
        const Senser = response.data;
        this.setState({ Senser: Senser });
        //console.log(Senser);
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/build/build_list')
      .then(response => {
        Build = response.data;
        bu_num = response.data.length;
        //this.setState({ Build: Build});
        // console.log(Build);
        // console.log(bu_num);
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/locations/location_list')
      .then(response => {
        Location = response.data;
        Loca_num = response.data.length;
        this.setState({ Location: Location });
        // console.log(Location);
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/dht/dht_list')
      .then(response => {
        Dht = response.data;
        dht_num = response.data.length;
        this.setState({ Dht: Dht });
        // console.log(Dht)
      })
      .catch(function (error) {
        console.log(error);
      })
  }


  sentid = (e) => {
    window.location.replace('/monitoring/' + mac)

  }

  onchangeMAC(e) {
    mac = e.target.value
  }

  choice() {
    return this.state.Senser.map((object, i) => {
      for (let z = 0; z < bu_num; z++) {
        if (object.Id_Build === Build[z]._id) {
          for (let y = 0; y < Loca_num; y++) {
            if (Build[z].Id_Loca === Location[y]._id) {
              if (data_ss._id === Location[y].Id_Admin) {
                return <SenserChoice obj={object} key={i} />;
              }
            }
          }
        }
      }
      return true
    });
  }

  showbar() {
    return this.state.Dht.map((object, i) => {
      for (let z = 0; z < dht_num; z++) {
        if (object.mac === Dht[z].mac) {
          return <MonitorChoice obj={object} key={i} />;
        }
      }
    });
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
                <Input type="select" name="select" onChange={this.onchangeMAC}>
                  <option>เลือกเซนเซอร์</option>
                  {this.choice()}
                </Input>
              </Col>
              <Col>
                <Button color="success" onClick={(e) => this.sentid(e)}>ค้นหา</Button>
              </Col>
            </Row>
          </Table>
        </Container>

        {this.showbar()}
        {/* กราฟที่โชว์ */}
        <Row >
          <Col md={11} style={{ paddingLeft: '150px', paddingBottom: '20px' }}> <div className="chart">
            <Chart />
          </div>
          </Col>
        </Row>
      </div>
    );
  }
}
