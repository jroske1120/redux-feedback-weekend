import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const feedbackReducer = (state = [], action) => {
    console.log('in feelingReducer', action.payload)
    if (action.type === 'ADD_FEELING') {
        return [...state, action.payload]
    } else if (action.type === 'ADD_UNDERSTANDING') {
        return [...state, action.payload]
    }else if (action.type === 'ADD_SUPPORT') {
        return [...state, action.payload]
    }else if (action.type === 'ADD_COMMENT') {
        return [...state, action.payload]
    }
    return state;
}





const storeInstance = createStore(
    combineReducers({
        feedbackReducer
        // understandingReducer
        // supportReducer
        // commentReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
