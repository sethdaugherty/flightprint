import React from 'react';
import FlightLi from './FlightLi'

const FlightUl = ({routes=[], onRemove=f=>f}) =>
    <div className="flightList">
        <h2>List of flights</h2>
        <ul>
            {routes.map((flight, i) =>
                <span key={i}><FlightLi {...flight} onClick={(event) => {onRemove(flight.id)}} key={i}></FlightLi></span>
            )}
        </ul>
    </div>

export default FlightUl