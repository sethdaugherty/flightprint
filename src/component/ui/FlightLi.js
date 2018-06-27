import React from 'react'

const FlightLi = ({ fromAirport, toAirport, id, onClick }) =>
    <li>
        {fromAirport} -&gt; {toAirport}
        &nbsp;
        <button onClick={() => onClick(id) }>X</button>
    </li>

export default FlightLi