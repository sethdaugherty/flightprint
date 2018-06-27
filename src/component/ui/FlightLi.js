import React from 'react';

const FlightLi = ({ fromAirport, toAirport, id, onClick }) =>
    <li>
        {fromAirport} -> {toAirport}
        &nbsp;
        <button onClick={() => onClick(id) }>X</button>
    </li>

export default FlightLi