import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import moment from 'moment';

var label_X = []
var label_PM1 = 'PM1.0'
var label_PM2 = 'PM2.5'
var label_PM4 = 'PM4.0'
var label_PM10 = 'PM10.0'
var label_NC0 = 'NC0.5'
var label_NC1 = 'NC1.0'
var label_NC2 = 'NC2.5'
var label_NC4 = 'NC4.0'
var label_NC10 = 'NC10.0'
var data_PM1 = []
var data_PM2 = []
var data_PM4 = []
var data_PM10 = []
var data_NC0 = []
var data_NC1 = []
var data_NC2 = []
var data_NC4 = []
var data_NC10 = []

var data_set, data_num;

class ChartPM extends Component {
    constructor(props) {
        super(props);


        this.state = {
            chartData: {
                labels: label_X,
                datasets: [
                    {
                        label: label_PM1,
                        data: data_PM1,
                        borderColor: ['rgba(255, 99, 132, 1)',]
                    },
                    {
                        label: label_PM2,
                        data: data_PM2,
                        borderColor: ['rgba(255, 206, 86, 1)']
                    },
                    {
                        label: label_PM4,
                        data: data_PM4,
                        borderColor: ['rgba(54, 162, 235, 1)',]
                    },
                    {
                        label: label_PM10,
                        data: data_PM10,
                        borderColor: ['rgba(75, 192, 192, 1)']
                    },
                    {
                        label: label_NC0,
                        data: data_NC0,
                        borderColor: ['rgba(153, 102, 255, 1)',]
                    },
                    {
                        label: label_NC1,
                        data: data_NC1,
                        borderColor: ['rgba(255, 159, 64, 1']
                    },
                    {
                        label: label_NC2,
                        data: data_NC2,
                        borderColor: ['rgba(255, 206, 86, 1)',]
                    },
                    {
                        label: label_NC4,
                        data: data_NC4,
                        borderColor: ['rgba(255, 99, 132, 1)']
                    },
                    {
                        label: label_NC10,
                        data: data_NC10,
                        borderColor: ['rgba(54, 162, 235, 1)',]
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
            data_PM1[i]  = data_set[data_num].pm1
            data_PM2[i]  = data_set[data_num].pm2
            data_PM4[i]  = data_set[data_num].pm4
            data_PM10[i] = data_set[data_num].pm10
            data_NC0[i]  = data_set[data_num].nc0
            data_NC1[i]  = data_set[data_num].nc1
            data_NC2[i]  = data_set[data_num].nc2
            data_NC4[i]  = data_set[data_num].nc4
            data_NC10[i] = data_set[data_num].nc10
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
                                    max: 200,
                                    min: 0,
                                    stepSize: 20
                                }
                            }]
                        }
                    }}
                />
            </div >
        );
    }
}

export default ChartPM;