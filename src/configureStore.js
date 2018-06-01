import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';

const middleware = [ thunk ];

const config = (initialState) => {

    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middleware)
    );

    return store;
};

export default config;