import React from 'react'
import { Polyline } from 'react-google-maps'

const FlightPath = ( { flightPath } ) => {
    const lineOptions = {
        geodesic: true,
        strokeOpacity: .2,
        strokeColor: '#461d99',
        strokeWeight: 2,
    }

    return (
        <Polyline path={flightPath} options={lineOptions}/>
    )
}

export default FlightPath