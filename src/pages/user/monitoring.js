import React from 'react';
import axios from 'axios';
import { Table, Button, Input, Container, Row, Col } from 'reactstrap';
import SenserChoice from './Choice/SenserChoice';
import Chart from './Chart';
import MonitorChoice from './Choice/MonitorChoice';

var _mac, mac, Build, Location, Dht;
var bu_num, Loca_num, dht_num;
var data_ss;
var num = 0,seconds=1 , timer;
var data = [];

export default class monitoring extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    }

    this.state = { Senser: [], Location: [], Dht: [], time: {}};
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);

  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentWillMount() {
    _mac = this.props.match.params.id
    data_ss = JSON.parse(sessionStorage.getItem('Login_add'))

    //console.log(_mac)
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

  componentDidUpdate(){
    let timeLeftVar = this.secondsToTime(seconds);
    timer = timeLeftVar;
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
    if (_mac !== "undefined") {
      return this.state.Dht.map((object, i) => {
        // console.log(i)
        // console.log(dht_num-1)
        if (object.mac === _mac) {
          // console.log(i)
          // console.log(num)
          data[num] = object
          // console.log(data[num])
          num = num + 1
        }
        if (i === (dht_num - 1)) {
          // console.log(data)
          return <Chart obj={data} key={num} />;
          //return <MonitorChoice obj={data} key={num} />; 
        }
      });
    }
  }

  startTimer() {
    console.log('start');
    if (timer == 0 && seconds > 0) {
      timer = setInterval(this.countDown, 7000);
      // this.state.down = 1;
    }
    // this.showbar()
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    // Check if we're at zero.
    if (seconds == 0) {
      clearInterval(this.timer);
    }
  }

  render() {
    if (seconds == 1) {
      console.log('loop 1')
      this.startTimer()
      this.componentDidMount()
    } 
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


        <Row >
          <Col md={11} style={{ paddingLeft: '150px', paddingBottom: '20px' }}> <div className="chart">
            {/* <Chart /> */}
            {this.showbar()}
            {/* กราฟที่โชว์ */}
          </div>
          </Col>
        </Row>
      </div>
    );
  }
}
