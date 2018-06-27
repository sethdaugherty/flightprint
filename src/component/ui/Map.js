import React from 'react';
import {compose, withProps} from "recompose";
import {GoogleMap, withGoogleMap, withScriptjs} from "react-google-maps";
import FlightPaths from './FlightPaths'

const Map = compose(
    withProps({
        googleMapURL:
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyBzlLYISGjL_ovJwAehh6ydhB56fCCpPQw&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{height: `100%`}}/>,
        containerElement: <div style={{height: `400px`}}/>,
        mapElement: <div style={{height: `100%`}}/>
    }),
    withScriptjs,
    withGoogleMap
    )(({ flightPaths }) => {
        return (
            <GoogleMap defaultZoom={4} defaultCenter={{lat: 39.861698150635, lng: -104.672996521}}>
                <FlightPaths flightPaths={flightPaths} />
            </GoogleMap>
        );
    })
;

export default Map