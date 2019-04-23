import React, { Component } from 'react';
import axios from 'axios';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Label } from 'reactstrap';
var _id;

class showmap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Name_Lo: '',
            Address: '',
            Id_Admin: '',
            lat: '',
            lng: '',
        }

        this.state = { Location: [] };
    }
    componentWillMount() {
        _id = this.props.match.params.id
    }

    componentDidMount() {
        axios.get('http://206.189.94.192:5000/locations/location/' + _id)
            .then(response => {
                const Location = response.data;
                this.setState({ Location: Location });
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    render() {
        const Pointlat = this.state.Location.lat
        const Pointlng = this.state.Location.lng

        return (
            <div>

                <center>
                    <br />
                    <Label>{this.state.Location.Name_Lo}</Label>
                    <Map google={this.props.google}
                        style={{ width: '80%', height: '80%', position: 'relative' }}
                        zoom={12}
                        initialCenter={{
                            lat: 13.8185021,
                            lng: 100.5141232
                        }}>
                        <Marker name={this.state.Location.Address} position={{ lat: Pointlat, lng: Pointlng }} />

                    </Map>
                </center>

            </div >
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAFHTcbUykLDkXfK19GoXmm8EltWUbq9dM")
})(showmap)