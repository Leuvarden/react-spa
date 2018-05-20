import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import App from './components/App';

const middleware = [ thunk ];
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, applyMiddleware(...middleware));

render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('app')
);