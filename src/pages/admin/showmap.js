import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class showmap extends Component {
    render() {
        return (
            <div>
                <br />

                <br />
                <center>
                    <Map google={this.props.google}
                        style={{ width: '80%', height: '80%', position: 'relative' }}
                        zoom={12}
                        initialCenter={{
                            lat: 13.8185021,
                            lng: 100.5141232
                        }}>
                        <Marker name={'ตรอ.บางบอน3'} position={{ lat: 13.682210, lng: 100.383026 }} />
                        {/*<Setlocation /> */}

                    </Map>
                </center>

            </div >
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAFHTcbUykLDkXfK19GoXmm8EltWUbq9dM")
})(showmap)