import React from 'react';
import axios from 'axios';
import { Table, Button, Input, Container, Row, Col } from 'reactstrap';
import SenserChoice from './Choice/SenserChoice';
import Bar1 from './ChartPM';
import Chart from './Chart';
import moment from 'moment';

var _mac, mac, Build, Location, Dht, MapI;
var bu_num, Loca_num, dht_num, map_num;
var data_ss, num = 0;
var count, seconds = 1;
var data = [];
var show = [], show_num = 0;

export default class monitoring extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    }

    this.state = { Senser: [], Location: [], Dht: [], time: {}, Map: [] };
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

  }

  componentDidMount() {
    axios.get('http://206.189.94.192:5000/sensers/senser_list')
      .then(response => {
        const Senser = response.data;
        this.setState({ Senser: Senser });
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://206.189.94.192:5000/build/build_list')
      .then(response => {
        Build = response.data;
        bu_num = response.data.length;
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://206.189.94.192:5000/locations/location_list')
      .then(response => {
        Location = response.data;
        Loca_num = response.data.length;
        this.setState({ Location: Location });
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://206.189.94.192:5000/dht/dht_list')
      .then(response => {
        Dht = response.data;
        dht_num = response.data.length;
        this.setState({ Dht: Dht });
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://206.189.94.192:5000/imageupload/picmap_list')
      .then(response => {
        MapI = response.data;
        map_num = response.data.length;
        this.setState({ MapI: MapI });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  loopdht() {
    console.log('dhtupdate')
    axios.get('http://206.189.94.192:5000/dht/dht_list')
      .then(response => {
        Dht = response.data;
        dht_num = response.data.length;
        this.setState({ Dht: Dht });
      })
      .catch(function (error) {
        console.log(error);
      })
    count = 0;
  }


  sentid = (e) => {
    window.location.replace('/monitoring/' + mac)
  }

  onchangeMAC(e) {
    mac = e.target.value
  }

  choice() {
    show = [];
    show_num = 0;
    return this.state.Senser.map((object, i) => {
      for (let z = 0; z < bu_num; z++) {
        if (object.Id_Build === Build[z]._id) {
          for (let y = 0; y < Loca_num; y++) {
            if (Build[z].Id_Loca === Location[y]._id) {
              if (data_ss._id === Location[y].Id_Admin) {
                for (let x = 0; x < map_num; x++) {
                  if (object.Id_Map === MapI[x]._id) {
                    show[show_num] = {
                      Name_Lo: Location[y].Name_Lo,
                      Name_Build: Build[z].Name_Build,
                      Position: object.Position,
                      Temp_Low: object.Temp_Low,
                      Temp_Hight: object.Temp_Hight,
                      Humdi_Low: object.Humdi_Low,
                      Humdi_Hight: object.Humdi_Hight,
                      Macaddress: object.Macaddress,
                      Id_Map: MapI[x].Id_Map
                    }
                    show_num = show_num + 1
                    return <SenserChoice obj={object} key={i} />;
                  }
                }
              }
            }
          }
        }
      }
      return true
    });
  }

  showData() {
    if (_mac !== "undefined") {
      for (let i = 0; i < show_num; i++) {
        if (_mac === show[i].Macaddress) {
          return <section style={{ width: '80%' }} >
            <Table>
              <Row align='center' >
                <Col id='b'>
                  ข้อมูลตั้งค่า
              </Col>
                <Col id='b'>
                  ข้อมูลเซนเซอร์
              </Col>
              </Row>
              <Row>
                <Col>
                  สถานที่ : {show[i].Name_Lo}
                </Col>
                <Col align='center'>
                  อุณหภูมิสูงสุด : {show[i].Temp_Hight}
                </Col>
              </Row>
              <Row>
                <Col>
                  อาคาร : {show[i].Name_Build}
                </Col>
                <Col align='center'>
                  อุณหภูมิตำสุด : {show[i].Temp_Low}
                </Col>
              </Row>
              <Row>
                <Col>
                  ห้องติดตั้งเซนเซอร์ : {show[i].Position}
                </Col>
                <Col align='center'>
                  ความชื้นสูงสุด : {show[i].Humdi_Hight}
                </Col>
              </Row>
              <Row>
                <Col>
                  รหัสเครื่อง : {show[i].Macaddress}
                </Col>
                <Col align='center'>
                  ความชื้นต่ำสุด : {show[i].Humdi_Low}
                </Col>
              </Row>
            </Table>
          </section>

        }
      }
    }
  }

  showMap() {
    if (_mac !== "undefined") {
      for (let i = 0; i < show_num; i++) {
        if (_mac === show[i].Macaddress) {
          return <img src={show[i].Id_Map} alt="ok" style={{ height: "560px" }} />
        }
      }
    }
  }

  dateNow() {
    if (_mac !== "undefined") {
      return moment().format('MMMM Do YYYY, h:mm:ss a')
    }
  }

  showbar() {
    if (_mac !== "undefined") {
      return this.state.Dht.map((object, i) => {
        if (object.mac === _mac) {
          data[num] = object
          num = num + 1
        }
        if (i === (dht_num - 1)) {
          return <Chart obj={data} key={num} />
        } return false

      });
    }
  }

  showbar1() {
    if (_mac !== "undefined") {
      return this.state.Dht.map((object, i) => {
        if (object.mac === _mac) {
          data[num] = object
          num = num + 1
        }
        if (i === (dht_num - 1)) {
          if (data[num - 1].nc10 !== 0) {
            return <Bar1 obj={data} key={num} />
          }
        } return false
      });
    }

  }

  startTimer() {
    if (this.timer === 0 && seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    count = 1;
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    // Check if we're at zero.
    if (seconds === 0) {
      clearInterval(this.timer);

    }
  }

  render() {
    if (seconds === 1) {
      this.startTimer()

    } if (count === 1) {
      this.loopdht()
    }

    return (
      <div>
        <section id="space">
          <div className="banner-h">
            <div className="text-cobg">
              การตรวจสอบข้อมูลอุณหภูมิและความชื้น
                    </div>
          </div>
        </section>
        <Container>
          <Table>
            <Row align="center">
              <Col>
                <Input type="select" name="select" onChange={this.onchangeMAC}>
                  <option value="undefined">เลือกเซนเซอร์</option>
                  {this.choice()}
                </Input>
              </Col>
              <Col>
                <Button color="success" onClick={(e) => this.sentid(e)}>ค้นหา</Button>
              </Col>
            </Row>
            <br />
          </Table>
        </Container>

        <center>
          {this.showData()}
        </center>
        <br />
        <center>
          <section style={{ fontSize: '48px' }} >
            <b>แผนที่</b>
          </section>
        </center>

        <br />
        <Table style={{ width: '80%' }} bordered="2" align="center">
          <center>
            {this.showMap()}
          </center>
        </Table>
        <br />
        <div className="bg-mid-low" align="center" >สถานะปัจจุบัน</div>
        <br />
        <center>
        <section style={{ fontSize: '48px' }}>
          <b>เวลาปัจจุบัน : {this.dateNow()}</b>
        </section>
        </center>
        <br />
        <Row >
          <Col md={5} style={{ paddingLeft: '150px', paddingBottom: '20px' }}> <div className="chart">
            {this.showbar()}
            {/* กราฟที่โชว์ */}
          </div>
          </Col>

          <Col md={5} style={{ paddingLeft: '150px', paddingBottom: '20px' }}> <div className="chart">
            {this.showbar1()}
            {/* กราฟที่โชว์ */}
          </div>
          </Col>

        </Row>
      </div>
    );
  }
}
