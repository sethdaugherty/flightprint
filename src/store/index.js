import {applyMiddleware, combineReducers, createStore} from 'redux'
import {routes} from './reducers'
import stateData from '../data/initialState'

const logger = store => next => action => {
    let result
    console.groupCollapsed('dispatching', action.type)
    console.log('prev state', store.getState())
    console.log('action', action)
    result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
}

const saver = store => next => action => {
    console.log('next was, ', next, action)
    let result = next(action)
    localStorage['redux-store-flights'] = JSON.stringify(store.getState())
    return result
}

const storeFactory = (intialState=stateData) =>
    applyMiddleware(logger,saver)(createStore)(
        combineReducers({routes}),
        (localStorage['redux-store-flights']) ?
            JSON.parse(localStorage['redux-store-flights']) :
            intialState
    )

export default storeFactory