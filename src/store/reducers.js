import C from '../constants'
import {v4} from 'uuid'

export const routes = (state, action) => {
    switch (action.type) {
        case C.ADD_ROUTE:
            return [...state,
                {
                    fromAirport: action.fromAirport,
                    toAirport: action.toAirport,
                    id: action.id ? action.id : v4()
                }
            ]
        case C.REMOVE_ROUTE:
            return state.filter(
                route => route.id !== action.id
            )
        default :
            return state ? state : {}
    }
}