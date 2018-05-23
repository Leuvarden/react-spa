import * as constants from './constants';

const url = 'http://react-cdp-api.herokuapp.com/movies';

export const selectMovie = (movie) => {
    return {
        type: constants.MOVIE_SELECTED,
        payload: movie
    };
};

export const fetchMovies = () => {
    return (dispatch) => {
        return fetch(url)
            .then(response => response.json())
            .then(response => dispatch(setMoviesToStore(response.data)))
            .catch(err => console.warn(err));
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

export const setSearchCriterion = criterion => ({
    type: constants.SET_SEARCH,
    criterion
});

export const setSearchTerm = term => ({
    type: constants.SEARCH_FOR,
    term
});
