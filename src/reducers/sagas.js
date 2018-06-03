import 'regenerator-runtime/runtime';
import * as constants from './../actions/constants';
import { put, takeEvery, takeLatest, all, call, select } from 'redux-saga/effects';
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

export function* fetchMoviesById(action) {
    const response = yield call(fetch, url + '/' + action.id);
    const movie = yield response.json();

    yield put({ 
        type: constants.MOVIE_SELECTED,
        payload: movie
    });
}

export function* watchFetchMovies() {
    yield takeLatest(constants.FETCH_MOVIES, fetchMovies);
}

export function* watchFetchMoviesById() {
    yield takeEvery('FETCH_MOVIES_BY_ID', fetchMoviesById);
}


export function* watchIfSearchParamsUpdated() {
    yield takeLatest(constants.SET_SEARCH_PARAMS, fetchMovies);
}

export default function* rootSaga() {
    yield all([ 
        watchFetchMovies(),
        watchIfSearchParamsUpdated(),
        // watchFetchMoviesById()
    ]);
}