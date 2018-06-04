import * as constants from './constants';
import {fetchMoviesForSearch}  from './../thunks/FetchMovies';

export const selectMovie = (movie) => {
    return {
        type: constants.MOVIE_SELECTED,
        payload: movie
    };
};

export const setSameGenresMovies = (movies) => {
    return {
        type: constants.SET_SAME_GENRES_MOVIES,
        movies
    };
};

export const setMoviesToStore = (data) => {
    return {
        type: constants.SET_MOVIES_TO_STORE,
        data
    };
};

export const setSorting = criterion => ({
    type: constants.SET_SORTING,
    criterion
});

export const setSearchParams = (params, dispatch, sortBy) => { //todo: what's wrong with order

    if (!dispatch) {
        throw new Error('No dispatch were passed to setSearchParams');
    }
    dispatch(fetchMoviesForSearch (params.query, params.searchBy), sortBy);

    return {
        type: constants.SET_SEARCH_PARAMS,
        query: params.query,
        searchBy: params.searchBy
    };
};