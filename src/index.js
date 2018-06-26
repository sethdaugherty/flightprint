import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import storeFactory from './store'
import { v4 } from 'uuid'


const initialState = {
    'flights': [
    {'from': 'DEN', 'to': 'ATL', 'id': v4()},
    {'from': 'ATL', 'to': 'MCO', 'id': v4()},
    {'from': 'MCO', 'to': 'ATL', 'id': v4()},
    {'from': 'ATL', 'to': 'DEN', 'id': v4()},
    {'from': 'DEN', 'to': 'SEA', 'id': v4()},
    {'from': 'SEA', 'to': 'DEN', 'id': v4()},
    {'from': 'SEA', 'to': 'DEN', 'id': v4()},
    {'from': 'DEN', 'to': 'SEA', 'id': v4()},
    {'from': 'SEA', 'to': 'PHX', 'id': v4()},
    {'from': 'PHX', 'to': 'SEA', 'id': v4()},
    {'from': 'SEA', 'to': 'DEN', 'id': v4()},
    {'from': 'DEN', 'to': 'SEA', 'id': v4()},
    {'from': 'SEA', 'to': 'YYZ', 'id': v4()},
    {'from': 'YYZ', 'to': 'SPJC', 'id': v4()},
    {'from': 'SPJC', 'to': 'CUZ', 'id': v4()},
    {'from': 'CUZ', 'to': 'SPJC', 'id': v4()},
    {'from': 'SPJC', 'to': 'MIA', 'id': v4()},
    {'from': 'MIA', 'to': 'SEA', 'id': v4()},
]
};

const store = storeFactory()

window.React = React
window.store = store

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
