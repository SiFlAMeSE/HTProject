import React from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import ChoiceLable from './Choice/ChoiceLable';
import moment from 'moment';

var data_ss, Dht;
var label_X = /*['ตัวที่1', 'ตัวที่2', 'ตัวที่3', 'ตัวที่4', 'ตัวที่5',
         'ตัวที่6', 'ตัวที่7', 'ตัวที่8', 'ตัวที่9', 'ตัวที่10',
         'ตัวที่11', 'ตัวที่12', 'ตัวที่13', 'ตัวที่14', 'ตัวที่15',
         'ตัวที่16', 'ตัวที่17', 'ตัวที่18', 'ตัวที่19', 'ตัวที่20',
         'ตัวที่21', 'ตัวที่22', 'ตัวที่23', 'ตัวที่24', 'ตัวที่25',
         'ตัวที่26', 'ตัวที่27', 'ตัวที่28', 'ตัวที่29', 'ตัวที่30',
         'ตัวที่31', 'ตัวที่32', 'ตัวที่33', 'ตัวที่34', 'ตัวที่35',
         'ตัวที่36', 'ตัวที่37', 'ตัวที่38', 'ตัวที่39', 'ตัวที่40']*/ []
var label_temp = 'อุณหภูมิ'
var label_humdi = 'ความชื้น'
var data_temp = /*[{ y: 20 }, { y: 10 }, { y: 80 }, { y: 8 }, { y: 8 },
                 { y: -20 }, { y: 10 }, { y: 80 }, { y: 8 }, { y: 8 },
                 { y: 20 }, { y: 10 }, { y: 80 }, { y: 8 }, { y: 8 },
                 { y: 20 }, { y: 10 }, { y: 80 }, { y: 8 }, { y: 8 },
                 { y: 20 }, { y: 10 }, { y: 80 }, { y: 8 }, { y: 8 },
                 { y: 20 }, { y: 10 }, { y: 80 }, { y: 8 }, { y: 8 },
                 { y: 20 }, { y: 10 }, { y: 80 }, { y: 8 }, { y: 8 },
                 { y: 20 }, { y: 10 }, { y: 80 }, { y: 8 }, { y: 8 }]*/ []
var data_humdi = /*[{ y: 28 }, { y: 5 }, { y: 6 }, { y: 28 }, { y: 28 },
                  { y: 28 }, { y: 5 }, { y: 6 }, { y: 28 }, { y: 28 },
                  { y: 28 }, { y: 5 }, { y: 6 }, { y: 28 }, { y: 28 },
                  { y: 28 }, { y: 5 }, { y: 6 }, { y: 28 }, { y: 28 },
                  { y: 28 }, { y: 5 }, { y: 6 }, { y: 28 }, { y: 28 },
                  { y: 28 }, { y: 5 }, { y: 6 }, { y: 28 }, { y: 28 },
                  { y: 28 }, { y: 5 }, { y: 6 }, { y: 28 }, { y: 28 },
                  { y: 28 }, { y: 5 }, { y: 6 }, { y: 28 }, { y: 28 }]*/ []
var data_set,data_num;

export default class Chart extends React.Component {
    constructor(props) {
        super(props);

        this.state = { Dht: [] };

        this.state = {
            chartData: {
                labels: label_X,
                datasets: [
                    {
                        label: label_temp,label_humdi,
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
        }
    }

    componentWillMount() {
        data_set = this.props.obj
        data_num = this.props.obj.length - 1
        data_ss = JSON.parse(sessionStorage.getItem('Login_add'))
    }

    componentDidMount() {
        axios.get('http://localhost:5000/dht/dht_list')
            .then(response => {
                Dht = response.data;
                // this.setState({ Senser: Senser });
                //console.log(Dht)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    // componentWillReceiveProps(nextProps){
    //     this.label_X(nextProps)
    //     this.label_X(nextProps)
    // }

    dataGraph(){
        for(let i=39 ; i>=0 ; i-- , data_num--){
            // console.log(moment().format())
            label_X[i] = moment(data_set[data_num].date).format('LTS')
            data_temp[i] = data_set[data_num].t
            data_humdi[i] = data_set[data_num].h
            // console.log(data_set[data_num]._id)
            // console.log(data_set[data_num].t)
            // console.log(moment(data_set[data_num].date).format('LTS'))

        }
    }

    render() {
        // console.log(label_X)
        // console.log(data_temp)
        // console.log(data_humdi)
        // console.log(data_set)
        // console.log(data_num)
        return (
            <div>
                {this.dataGraph()}
                {/* กราฟที่โชว์ */}
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
        );
    }
}
