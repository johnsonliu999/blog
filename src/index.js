import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import promise from 'redux-promise'
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import {BrowserRouter as Router} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'

const createMyStore = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createMyStore(reducer)}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
