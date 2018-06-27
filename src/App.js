import React, {Component} from 'react';
import './App.css';
import { connect } from 'react-redux'
import {compose, withProps} from "recompose";
import C from './constants';
import { removeRoute } from './actions';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Polyline
} from "react-google-maps";

import FlightList from './component/containers/FlightList'
import FlightMap from './component/containers/FlightMap'
import ManageFlights from './component/containers/ManageFlights'


//TODO: use the module for this
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

class App extends Component {
    constructor() {
        super();

        this.onAddSubmit = this.onAddSubmit.bind(this);
        this.onClickRemoveFlight = this.onClickRemoveFlight.bind(this);
    }

    render() {
        //const linePath = [{lat: -34.397, lng: 150.644}, {lat: 0, lng: 0}];

        return (
            <div className="App">
                <FlightMap />
                <FlightList />
                <ManageFlights />
            </div>
        );
    }

    onAddSubmit(event, from, to) {
        console.log(event);
        console.log("submitted");
        console.log(from, to);

        const {flights} = this.state;
        this.setState( {
            'flights': [
                ...flights,
                {
                    'from': from,
                    'to': to,
                    'id': guid()
                }
            ]
        });
        event.preventDefault();

    }

    onClickRemoveFlight(event, id) {
        console.log("event", event);
        //event.preventDefault();

        const filteredFlights = this.state.flights.filter((flight) => {
            return flight.id !== id;
        });

        console.log("filtered flights", filteredFlights);
        this.setState( {
            'flights': filteredFlights
        })
    }
}

export default App;
