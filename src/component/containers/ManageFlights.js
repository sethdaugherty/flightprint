import C from '../../constants'
import { connect } from 'react-redux'
import ManageFlightsForm from '../ui/ManageFlightsForm'

const ManageFlights = connect(
    dispatch => ( {
        onAdd( event, from, to ) {
            event.preventDefault()

            dispatch({
                type: C.ADD_ROUTE,
                fromAirport: from,
                toAirport: to,
            })
        },

    } ),
)(ManageFlightsForm)

export default ManageFlights