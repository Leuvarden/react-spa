import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import rootSaga from './reducers/sagas';
import createSagaMiddleware, { END } from 'redux-saga';

const config = (initialState) => {
    const sagaMiddleware  = createSagaMiddleware();

    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(sagaMiddleware)
    );

    store.runSaga = () => sagaMiddleware.run(rootSaga);
    store.runSaga();
    // sagaMiddleware.run(rootSaga);
    store.close = () => store.dispatch(END);

    return store;
};

export default config;