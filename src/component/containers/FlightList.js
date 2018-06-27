import React from 'react';
import {removeRoute} from "../../actions";
import {connect} from "react-redux";
import FlightUl from "../ui/FlightUl"

const FlightList = connect(
    state => ({
        routes: state.routes
    }),
    dispatch => ({
        onRemove(id) {
            dispatch(removeRoute(id))
        }
    })
)(FlightUl);

export default FlightList