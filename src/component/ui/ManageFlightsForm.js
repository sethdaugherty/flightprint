import React from 'react'

const ManageFlightsForm = ( {onAdd} ) => {

    let from = null
    let to = null

    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            onAdd(event, from.value, to.value)
        }}>
            From: <input type="text" ref={(input) => {from = input}}></input>
            To: <input type="text" ref={(input) => {to = input}}></input>
            <button>Add</button>
        </form>
    )
}

export default ManageFlightsForm