import C from './constants'

export const removeRoute = id =>
    ({
        type: C.REMOVE_ROUTE,
        id
    })