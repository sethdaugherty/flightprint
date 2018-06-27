import { connect } from 'react-redux'
import Map from '../ui/Map'

// TODO: load this from the server

const AIRPORT_COORDINATES = {
    'DEN': {
        lat: 39.861698150635,
        lng: -104.672996521,
        name: 'Denver International Airport',
    },
    'SEA': {
        lat: 47.44900131225586,
        lng: -122.30899810791016,
        name: 'Seattle Tachoma International Airport',
    },
    'PDX': {
        lat: 45.58869934,
        lng: -122.5979996,
        name: 'Portland International Airport',
    },
    'JFK': {
        lat: 40.63980103,
        lng: -73.77890015,
        name: 'John F Kennedy Memorial Airport',
    },
    'ATL': {
        lat: 33.63669967651367,
        lng: -84.4281005859375,
        name: 'Hartsfield Jackson Atlanta International Airport',
    },
    'MCO': {
        lat: 28.429399490356445,
        lng: -81.30899810791016,
        name: 'Orlando International Airport',
    },
    'PHX': {
        lat: 33.43429946899414,
        lng: -112.01200103759766,
        name: 'Phoenix Sky Harbor International Airport',
    },
    'YYZ': {
        lat: 43.6772003174,
        lng: -79.63059997559999,
        name: 'Lester B. Pearson International Airport (Toronto)',
    },
    'SPJC': {
        lat: -12.0219,
        lng: -77.114305,
        name: 'Jorge Chávez International Airport (Lima)',
    },
    'MIA': {
        name: 'Miami International Airport',
        lat: 25.79319953918457,
        lng: -80.29060363769531,
    },
    'CUZ': {
        name: 'Alejandro Velasco Astete International Airport',
        lat: -13.535699844400002,
        lng: -71.9387969971,
    },
}

const FlightMap = connect(
    state => ( {
        flightPaths: state.routes.map(( route ) => [
            { ...AIRPORT_COORDINATES[ route.fromAirport ] },
            { ...AIRPORT_COORDINATES[ route.toAirport ] },
        ]),
    } ),
)(Map)

export default FlightMap