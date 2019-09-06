import React from 'react'
import MapGL, { GeolocateControl, NavigationControl } from 'react-map-gl'

import './map.css'
import 'mapbox-gl/dist/mapbox-gl.css'


const TOKEN = 'pk.eyJ1IjoiZGFpbmVyb3NlIiwiYSI6ImNrMDY4MzFxZDN0ODUzY212N201dHBoZTkifQ.Jw8YX-5dZxqUbZ_KZkR50Q';


class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                width: "100%",
                height: 900,
                latitude: 48.43,
                longitude: -123.35,
                zoom: 12
            }
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <div id="map">
                <MapGL
                    {...this.state.viewport}
                    mapboxApiAccessToken={TOKEN}
                    // mapStyle="mapbox://styles/mapbox/streets-v10"
                    mapStyle="mapbox://styles/dainerose/ck06atamr274z1cqj0ff1wpjp"
                    onViewportChange={(viewport) => this.setState({viewport})}
                >
                    <GeolocateControl
                        positionOptions={{enableHighAccuracy: true}}
                        trackUserLocation={true}
                    />
                    <div style={{position: 'absolute', right: 0}}>
                        <NavigationControl />
                    </div>
                </MapGL>
            </div>
        );
    }
}

export default Map;