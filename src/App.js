import React from 'react'
import './App.css'
import FlightList from './component/containers/FlightList'
import FlightMap from './component/containers/FlightMap'
import ManageFlights from './component/containers/ManageFlights'

// TODO list:
// Add propType checkers to components
// Convert to Typescript
// Add styles
// Read data from a server
// Draw lines using SVG like: http://jsfiddle.net/bfer8e0b/630/    https://stackoverflow.com/questions/20321006/curved-line-between-two-near-points-in-google-maps


const App = () =>
    <div className="App">
        <FlightMap />

    </div>

export default App
