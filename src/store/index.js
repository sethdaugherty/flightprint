import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routes, sort } from './reducers'
import stateData from '../data/initialState'

const logger = store => next => action => {
    let result
    console.groupCollapsed("dispatching", action.type)
    console.log("prev state", store.getState())
    console.log("action", action)
    result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
}

const saver = store => next => action => {
    console.log("next was, ", next, action)
    let result = next(action)
    localStorage['redux-store'] = JSON.stringify(store.getState())
    return result
}

const storeFactory = (intialState=stateData) =>
    applyMiddleware(logger,saver)(createStore)(
        combineReducers({routes, sort}),
        (localStorage['redux-store']) ?
            JSON.parse(localStorage['redux-store']) :
            stateData
    )

export default storeFactory

// const logger = store => next => action => {
//     let result
//     console.groupCollapsed("dispatching", action.type)
//     console.log('prev state', store.getState())
//     console.log('action', action)
//     result = next(action)
//     console.log('next state', store.getState())
//     console.groupEnd()
//     return result
// }
//
// const saver = store => next => action => {
//     let result = next(action)
//     localStorage['redux-store'] = JSON.stringify(store.getState())
//     return result
// }
//
// const storeFactory = (initialState=stateData) =>
//     applyMiddleware(logger, saver)(createStore)(
//         combineReducers({colors, sort}),
//         (localStorage['redux-store']) ?
//             JSON.parse(localStorage['redux-store']) :
//             stateData
//     )
//
// export default storeFactory