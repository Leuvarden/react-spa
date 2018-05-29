import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';

const middleware = [ thunk ];

const persistedStore = loadState();

const store = createStore(
    rootReducer, 
    persistedStore, 
    applyMiddleware(...middleware)
);

store.subscribe(
    throttle(() => {
        saveState({
            data: store.getState().data 
        });
    }, 
    2000)
);

export default store;