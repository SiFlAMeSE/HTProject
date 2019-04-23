import React from 'react';
import { Line } from 'react-chartjs-2';

import moment from 'moment';

var label_X =  []
var label_temp = 'อุณหภูมิ'
var label_humdi = 'ความชื้น'
var data_temp =  []
var data_humdi = []
var data_set, data_num;

export default class Chart extends React.Component {
    constructor(props) {
        super(props);

        this.state = { Dht: [] };

        this.state = {
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
        }
    }

    componentWillMount() {
        data_set = this.props.obj
        data_num = this.props.obj.length - 1
        JSON.parse(sessionStorage.getItem('Login_add'))
    }

    dataGraph() {
        for (let i = 19; i >= 0; i-- , data_num--) {
            label_X[i] = moment(data_set[data_num].date).format('LTS')
            data_temp[i] = data_set[data_num].t
            data_humdi[i] = data_set[data_num].h
        }
    }


    render() {
        return (
            <div>
                {this.dataGraph()}
                
                <Line height="550px"
                    data={this.state.chartData}
                    options={{
                        animation: {
                            duration: 0,
                            lazy: false,
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
            </div>
        );
    }
}
