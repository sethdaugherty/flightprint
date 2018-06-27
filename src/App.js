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


const App = () =>
    <div className="App">
        <FlightMap />
        <FlightList />
        <ManageFlights />
    </div>

export default App
