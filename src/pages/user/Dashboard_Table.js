import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import moment from 'moment';


var Dht, num = 0
var label_X = [], data = []
var label_temp = 'อุณหภูมิ'
var label_humdi = 'ความชื้น'
var data_temp = []
var data_humdi = []
var data_set;
var count, seconds = 1;

class Dashboard_Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Dht: [],
      modal: false,
      time: {},
      chartData: {
        labels: label_X,
        datasets: [
          {
            label: label_temp, label_humdi,
            data: data_temp,
            backgroundColor: ['rgba(75, 99, 135, 0.6)',]
          },
          {
            label: label_humdi,
            data: data_humdi,
            backgroundColor: ['rgba(2,  99, 135, 0.6)']
          }
        ]
      }
    };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
    this.toggle = this.toggle.bind(this);

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
    JSON.parse(sessionStorage.getItem('Login_add'))


    console.log(data_set)
  }

  componentDidMount() {
    axios.get('http://206.189.94.192:5000/dht/dht_list')
      .then(response => {
        Dht = response.data;
        this.setState({ Dht: Dht });
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
        this.setState({ Dht: Dht });
      })
      .catch(function (error) {
        console.log(error);
      })
    count = 0;
  }

  showbar(_mac) {
    console.log(_mac)
    num = 0
    data = []
    if (_mac !== "undefined") {
      return this.state.Dht.map((object, i) => {
        if (object.mac === _mac) {
          data[num] = object
          num = num + 1
        } return false
      });
    }
  }

  dataGraph() {
    console.log(this.props.obj.Macaddress)
    this.showbar(this.props.obj.Macaddress)
    console.log(data)
    console.log(num - 1)
    num -= 1
    for (let i = 39; i >= 0; i-- , num--) {
      console.log(data[num])
      console.log(num)
      label_X[i] = moment(data[num].date).format('LTS')
      data_temp[i] = data[num].t
      data_humdi[i] = data[num].h

      console.log(data[i].mac)

    }
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
    this.dataGraph()

  }

  startTimer() {
    if (this.timer === 0 && seconds > 0) {
      this.timer = setInterval(this.countDown, 10000);
    }
  }

  countDown() {
    count = 1;
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    if (seconds === 0) {
      clearInterval(this.timer);

    }
  }


  render() {
    if (seconds === 1) {
      console.log('render 1')
      this.startTimer()

    } if (count === 1) {
      console.log('render 2')
      this.loopdht()
    }
    return (
      <>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>สถานะของ : {this.props.obj.Macaddress}</ModalHeader>
          <ModalBody>
            <>
              {/* กราฟที่โชว์ */}
              <Line height="550px"
                data={this.state.chartData}
                options={{
                  animation: {
                    duration: 0
                  },
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
            </>
          </ModalBody>

        </Modal>
        <tr>
          <td>
            {this.props.obj.Name_Lo}
          </td>
          <td>
            {this.props.obj.Name_Build}
          </td>
          <td>
            {this.props.obj.Position}
          </td>
          <td>
            {this.props.obj.Temp_Low}
          </td>
          <td>
            {this.props.obj.Temp_Hight}
          </td>
          <td>
            {this.props.obj.Humdi_Low}
          </td>
          <td>
            {this.props.obj.Humdi_Hight}
          </td>
          <td>
            <Button color="danger" onClick={this.toggle}>ข้อมูล</Button>
          </td>
        </tr>
      </>

    );
  }
}

export default Dashboard_Table;