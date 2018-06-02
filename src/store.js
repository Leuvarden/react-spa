// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import rootSaga from './reducers/sagas';
// import { loadState, saveState } from './localStorage';
// import throttle from 'lodash/throttle';

// const middleware = [ thunk ];
const sagaMiddleware  = createSagaMiddleware();

// const persistedStore = loadState();

const store = createStore(
    rootReducer, 
    // persistedStore, 
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);


// store.subscribe(
//     throttle(() => {
//         saveState({
//             data: store.getState().data 
//         });
//     }, 
//     2000)
// );

export default store;