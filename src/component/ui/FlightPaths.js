import React from 'react';
import FlightPath from './FlightPath'

const FlightPaths = ({flightPaths = []}) => {
    return (
        flightPaths.map((path, i) =>
            <FlightPath flightPath={path} key={i} />
        )
    )
}

export default FlightPaths