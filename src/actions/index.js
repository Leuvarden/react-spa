require('es6-promise').polyfill();
require('isomorphic-fetch');

export const selectMovie = (movie) => {
    return {
        type: 'MOVIE_SELECTED',
        payload: movie
    };
};

export const fetchMovies = (url) => {
    return (dispatch) => {
        return fetch(url)
            .then(response => response.json())
            .then(response => dispatch(setMoviesToStore(response.data)))
            .catch(err => console.warn(err));
    };
};

export const setMoviesToStore = (data) => {
    return {
        type: 'SET_MOVIES_TO_STORE',
        data: data
    };
};

export const setSorting = criterion => ({
    type: 'SET_SORTING',
    criterion: criterion
});
