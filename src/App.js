import React, {Component} from 'react';
import './App.css';
import {compose, withProps} from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Polyline
} from "react-google-maps";

//TODO: use the module for this
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

const AIRPORT_COORDINATES = {
    'DEN': {
        lat: 39.861698150635,
        lng: -104.672996521,
        name: 'Denver International Airport'
    },
    'SEA': {
        lat: 47.44900131225586,
        lng: -122.30899810791016,
        name: 'Seattle Tachoma International Airport'
    },
    'PDX': {
        lat: 45.58869934,
        lng: -122.5979996,
        name: 'Portland International Airport'
    },
    'JFK': {
        lat: 40.63980103,
        lng: -73.77890015,
        name: 'John F Kennedy Memorial Airport'
    },
    'ATL': {
        lat: 33.63669967651367,
        lng: -84.4281005859375,
        name: 'Hartsfield Jackson Atlanta International Airport'
    },
    'MCO': {
        lat: 28.429399490356445,
        lng: -81.30899810791016,
        name: 'Orlando International Airport'
    },
    'PHX': {
        lat: 33.43429946899414,
        lng: -112.01200103759766,
        name: 'Phoenix Sky Harbor International Airport'
    },
    'YYZ': {
        lat: 43.6772003174,
        lng: -79.63059997559999,
        name: 'Lester B. Pearson International Airport (Toronto)'
    },
    'SPJC': {
        lat: -12.0219,
        lng: -77.114305,
        name: 'Jorge Chávez International Airport (Lima)'
    },
    'MIA': {
        name: "Miami International Airport",
        lat: 25.79319953918457,
        lng: -80.29060363769531
    },
    'CUZ': {
        name: "Alejandro Velasco Astete International Airport",
        lat: -13.535699844400002,
        lng: -71.9387969971
    }
}

class App extends Component {
    constructor() {
        super();

        this.state = {
            'flights': [
                {'from': 'DEN', 'to': 'ATL', 'id': guid()},
                {'from': 'ATL', 'to': 'MCO', 'id': guid()},
                {'from': 'MCO', 'to': 'ATL', 'id': guid()},
                {'from': 'ATL', 'to': 'DEN', 'id': guid()},
                {'from': 'DEN', 'to': 'SEA', 'id': guid()},
                {'from': 'SEA', 'to': 'DEN', 'id': guid()},
                {'from': 'SEA', 'to': 'DEN', 'id': guid()},
                {'from': 'DEN', 'to': 'SEA', 'id': guid()},
                {'from': 'SEA', 'to': 'PHX', 'id': guid()},
                {'from': 'PHX', 'to': 'SEA', 'id': guid()},
                {'from': 'SEA', 'to': 'DEN', 'id': guid()},
                {'from': 'DEN', 'to': 'SEA', 'id': guid()},
                {'from': 'SEA', 'to': 'YYZ', 'id': guid()},
                {'from': 'YYZ', 'to': 'SPJC', 'id': guid()},
                {'from': 'SPJC', 'to': 'CUZ', 'id': guid()},
                {'from': 'CUZ', 'to': 'SPJC', 'id': guid()},
                {'from': 'SPJC', 'to': 'MIA', 'id': guid()},
                {'from': 'MIA', 'to': 'SEA', 'id': guid()},

            ]
        };

        this.onAddSubmit = this.onAddSubmit.bind(this);
        this.onClickRemoveFlight = this.onClickRemoveFlight.bind(this);
    }

    render() {
        const {flights} = this.state;
        //const linePath = [{lat: -34.397, lng: 150.644}, {lat: 0, lng: 0}];

        return (
            <div className="App">
                <Map flights={flights} />
                <FlightList flightList={flights} onClickRemoveFlight={this.onClickRemoveFlight}></FlightList>
                <ManageFlightsForm onSubmit={this.onAddSubmit}></ManageFlightsForm>
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

class ManageFlightsForm extends Component {
    constructor() {
        super();
    }

    render() {
        const {onSubmit} = this.props;
        return (
            <form onSubmit={(event) => {onSubmit(event, this.refs._from.value, this.refs._to.value)}} >
                From: <input type="text" ref="_from"></input>
                To: <input type="text" ref="_to"></input>
                <button>Add</button>
            </form>
        )
    }
}


const FlightList = ({flightList, onClickRemoveFlight}) =>
    <div className="flightList">
        <h2>List of flights</h2>
        <ul>
            {flightList.map((flight, i) =>
                <span key={i}><Flight {...flight} onClick={(event) => {onClickRemoveFlight(event, flight.id)}} key={i}></Flight></span>
            )}
        </ul>
    </div>

const Flight = ({ from, to, id, onClick }) =>
    <li>
        {from} -> {to}
        &nbsp;
        <button onClick={() => onClick(id) }>X</button>
    </li>

const FlightPaths = ({flights}) => {

    const flightPaths = flights.map((flight) =>
        [
            {...AIRPORT_COORDINATES[flight.from]},
            {...AIRPORT_COORDINATES[flight.to]}
        ]
    );

    console.log(flightPaths);

    return (
        flightPaths.map((path, i) =>
            <FlightPath flightPath={path} key={i} />
        )
    )
}

const FlightPath = ({flightPath}) => {
    const lineOptions = {
        geodesic: true,
        strokeOpacity: .2,
        strokeColor: '#461d99',
        strokeWeight: 2,
    };

    return (
        <Polyline path={flightPath} options={lineOptions} />
    )
}

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
)(props => {
        return (
            <GoogleMap defaultZoom={4} defaultCenter={{lat: 39.861698150635, lng: -104.672996521}}>
                <FlightPaths flights={props.flights} />
            </GoogleMap>
        );
})
;

export default App;
