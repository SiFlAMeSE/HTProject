import React from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import ChoiceLable from './Choice/ChoiceLable';

var data_ss, Dht;
export default class Chart extends React.Component {
    constructor(props) {
        super(props);

        this.state = { Dht: [] };

        // this.state = {
        //     chartData: {
        //         labels: ['ตัวที่1', 'ตัวที่2', 'ตัวที่3', 'ตัวที่4', 'ตัวที่5',
        //         'ตัวที่6', 'ตัวที่7', 'ตัวที่8', 'ตัวที่9', 'ตัวที่10',
        //         'ตัวที่11', 'ตัวที่12', 'ตัวที่13', 'ตัวที่14', 'ตัวที่15',
        //         'ตัวที่16', 'ตัวที่17', 'ตัวที่18', 'ตัวที่19', 'ตัวที่20',
        //         'ตัวที่21', 'ตัวที่22', 'ตัวที่23', 'ตัวที่24', 'ตัวที่25',
        //         'ตัวที่26', 'ตัวที่27', 'ตัวที่28', 'ตัวที่29', 'ตัวที่30',
        //         'ตัวที่31', 'ตัวที่32', 'ตัวที่33', 'ตัวที่34', 'ตัวที่35',
        //         'ตัวที่36', 'ตัวที่37', 'ตัวที่38', 'ตัวที่39', 'ตัวที่40'],
        //         datasets: [
        //             {
        //                 label: 'อุณหภูมิ',
        //                 data: [{ y: 20 }, { y: 10 }, { y: 80 }, { y: 8 }, { y: 8 },
        //                 { y: -20 }, { y: 10 }, { y: 80 }, { y: 8 }, { y: 8 },
        //                 { y: 20 }, { y: 10 }, { y: 80 }, { y: 8 }, { y: 8 },
        //                 { y: 20 }, { y: 10 }, { y: 80 }, { y: 8 }, { y: 8 },
        //                 { y: 20 }, { y: 10 }, { y: 80 }, { y: 8 }, { y: 8 },
        //                 { y: 20 }, { y: 10 }, { y: 80 }, { y: 8 }, { y: 8 },
        //                 { y: 20 }, { y: 10 }, { y: 80 }, { y: 8 }, { y: 8 },
        //                 { y: 20 }, { y: 10 }, { y: 80 }, { y: 8 }, { y: 8 }
        //                 ],
        //                 backgroundColor: [
        //                     'rgba(75, 99, 135, 0.6)',
        //                 ]
        //             },
        //             {
        //                 label: 'ความชื้น',
        //                 data: [{ y: 28 }, { y: 5 }, { y: 6 }, { y: 28 }, { y: 28 },
        //                 { y: 28 }, { y: 5 }, { y: 6 }, { y: 28 }, { y: 28 },
        //                 { y: 28 }, { y: 5 }, { y: 6 }, { y: 28 }, { y: 28 },
        //                 { y: 28 }, { y: 5 }, { y: 6 }, { y: 28 }, { y: 28 },
        //                 { y: 28 }, { y: 5 }, { y: 6 }, { y: 28 }, { y: 28 },
        //                 { y: 28 }, { y: 5 }, { y: 6 }, { y: 28 }, { y: 28 },
        //                 { y: 28 }, { y: 5 }, { y: 6 }, { y: 28 }, { y: 28 },
        //                 { y: 28 }, { y: 5 }, { y: 6 }, { y: 28 }, { y: 28 },
        //                 ],
        //                 backgroundColor: [
        //                     'rgba(2,  99, 135, 0.6)'
        //                 ]
        //             }
        //         ]
        //     }
        // }

        this.state = {
                chartData: {
                    labels: [],
                    datasets: [{ label: '',
                                 data: [],
                                 backgroundColor: ['',]},
                               { label: '',
                                 data: [],
                                 backgroundColor: ['']
                               }]
                           }
                     }
    }

    componentWillMount() {
        data_ss = JSON.parse(sessionStorage.getItem('Login_add'))
    }

    componentDidMount() {
        axios.get('http://localhost:5000/dht/dht_list')
            .then(response => {
                Dht = response.data;
                // this.setState({ Senser: Senser });
                console.log(Dht)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    test() {
        this.setState ({
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
            });
    }



    render() {
        return (
            <div>
                {/* กราฟที่โชว์ */}
                <Line height="550px"
                    data={this.test()}
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
