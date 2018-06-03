import * as constants from './constants';

export const selectMovie = (movie) => {
    return {
        type: constants.MOVIE_SELECTED,
        payload: movie
    };
};

export const setSearchParams = (params) => {
    return {
        type: constants.SET_SEARCH_PARAMS,
        query: params.query,
        searchBy: params.searchBy
    };
};

export const setMoviesToStore = (data) => {
    return {
        type: constants.SET_MOVIES_TO_STORE,
        data: data
    };
};

export const setSorting = criterion => ({
    type: constants.SET_SORTING,
    criterion
});

