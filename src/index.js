import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import App from './components/App';
import { loadState, saveState } from './localStorage';

const middleware = [ thunk ];

const persistedStore = loadState();

const store = createStore(
    rootReducer, 
    persistedStore, 
    applyMiddleware(...middleware)
);

store.subscribe(() => {
    saveState({
        data: store.getState().data 
    });
});

render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('app')
);