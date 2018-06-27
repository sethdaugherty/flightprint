import { routes } from '../../../store/reducers'
import C from '../../../constants'

describe('routes reducer', () => {
    it("ADD_ROUTE success", () => {
        const state = []

        const action = {
            type: C.ADD_ROUTE,
            id: 1234,
            fromAirport: 'PDX',
            toAirport: 'SEA',
        }

        const results = routes(state, action)

        expect(results)
            .toEqual([ {
                id: 1234,
                fromAirport: 'PDX',
                toAirport: 'SEA',
            } ])
    })

    it("REMOVE_ROUTE success", () => {
        const state = [ {
            id: 1234,
            fromAirport: 'PDX',
            toAirport: 'SEA',
        },
            {
                id: 5678,
                fromAirport: 'SEA',
                toAirport: 'DEN',
            } ]

        const action = {
            type: C.REMOVE_ROUTE,
            id: 1234,
            fromAirport: 'PDX',
            toAirport: 'SEA',
        }

        const results = routes(state, action)

        expect(results)
            .toEqual([ {
                id: 5678,
                fromAirport: 'SEA',
                toAirport: 'DEN',
            } ])
    })
})