import React from 'react';
import './App.css';
import FlightList from './component/containers/FlightList'
import FlightMap from './component/containers/FlightMap'
import ManageFlights from './component/containers/ManageFlights'

const App = () =>
    <div className="App">
        <FlightMap />
        <FlightList />
        <ManageFlights />
    </div>

export default App;
