import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const feedbackReducer = (state = { feeling: 0, understanding: 0, support: 0, comments: '' }, action) => {
    console.log('in feedbackReducer', action.payload)
    if (action.type === 'ADD_FEEDBACK') {
        return { ...state, ...action.payload }
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
