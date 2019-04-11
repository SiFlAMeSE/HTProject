import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
var dataPM = []
var data_set, data_num;

class ChartPM extends Component {
    constructor(props) {
        super(props);


        this.state = {
            chartData: {
                labels: ['PM1.0', 'PM2.5', 'PM4.0', 'PM10.0', 'NC0.5', 'NC1.0', 'NC2.5', 'NC4.0', 'NC10.0'],
                datasets: [
                    {
                        label: 'แสดงการวัดค่าฝุน',
                        backgroundColor: 'rgba(255,99,132,0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                        hoverBorderColor: 'rgba(255,99,132,1)',
                        data: dataPM
                    }
                ]
            }
        }
    }

    componentWillMount() {
        data_set = this.props.obj
        data_num = this.props.obj.length - 1
        //console.log(data_set)
        //console.log(data_num)
        // data_ss = JSON.parse(sessionStorage.getItem('Login_add'))
        JSON.parse(sessionStorage.getItem('Login_add'))

        // console.log(data_set)
    }

    dataGraph() {
        dataPM[0] = data_set[data_num].pm1
        dataPM[1] = data_set[data_num].pm2
        dataPM[2] = data_set[data_num].pm4
        dataPM[3] = data_set[data_num].pm10
        dataPM[4] = data_set[data_num].nc0
        dataPM[5] = data_set[data_num].nc1
        dataPM[6] = data_set[data_num].nc2
        dataPM[7] = data_set[data_num].nc4
        dataPM[8] = data_set[data_num].nc10
        //console.log(dataPM)
    }

    render() {
        //console.log(dataPM)
        return (
            <div>
                {this.dataGraph()}
                
                <Bar
                    data={this.state.chartData}
                    // width={100}
                    height="550px"
                    options={{
                        animation: {
                            duration: 0,
                            lazy: false,
                        },
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [{
                                ticks: {
                                    max: 330,
                                    min: 0,
                                    stepSize: 10
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