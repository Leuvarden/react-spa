import 'regenerator-runtime/runtime';
import * as constants from './../actions/constants';
import { put, takeEvery, all, call, select } from 'redux-saga/effects';
import findMovies from './../actions/findMovies';

const url = 'http://react-cdp-api.herokuapp.com/movies';
const getSearchParams = state => state.searchParams;

export function* fetchMovies() {
    const response = yield call(fetch, url);
    const data = yield response.json();

    let params = yield select(getSearchParams);
    let movies = findMovies(data.data, params);

    yield put({ 
        type: constants.SET_MOVIES_TO_STORE,
        data: movies
    });
}

export function* watchFetchMovies() {
    yield takeEvery(constants.FETCH_MOVIES, fetchMovies);
}

export function* watchIfSearchParamsUpdated() {
    yield takeEvery(constants.SET_SEARCH_PARAMS, fetchMovies);
}

export default function* rootSaga() {
    yield all([ 
        watchFetchMovies(),
        watchIfSearchParamsUpdated()
    ]);
}