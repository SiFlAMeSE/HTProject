import React from 'react';
import { Line } from 'react-chartjs-2';
import { Container } from 'reactstrap';

var label_X = ['00.00', '01.00', '02.00', '03.00', '04.00',
    '05.00', '06.00', '07.00', '08.00', '09.00',
    '10.00', '11.00', '12.00', '13.00', '14.00',
    '15.00', '16.00', '17.00', '18.00', '19.00',
    '20.00', '21.00', '22.00', '23.00']
var label_temp = 'อุณหภูมิ'
var label_humdi = 'ความชื้น'

export default class Chart extends React.Component {

    render() {
        return (
            <div>
                <br />
                <div><center>{this.props.obj3}</center></div>

                <Container>
                    <Line height="550px"
                        data={{
                            labels: label_X,
                            datasets: [
                                {
                                    label: label_temp, label_humdi,
                                    data: this.props.obj1,
                                    backgroundColor: ['rgba(75, 99, 135, 0.6)',]
                                },
                                {
                                    label: label_humdi,
                                    data: this.props.obj2,
                                    backgroundColor: ['rgba(2,  99, 135, 0.6)']
                                }
                            ]
                        }}
                        options={{
                            animation: {
                                duration: 4
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
                </Container>
            </div>
        );
    }
}
