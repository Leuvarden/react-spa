require('es6-promise').polyfill();
require('isomorphic-fetch');
const url1 = 'http://react-cdp-api.herokuapp.com/'

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
            // .then(res => console.log(res))
            .then(response => dispatch(setMoviesToStore(response.data)))
            .catch(err => console.warn(err));
    };
};

export const setMoviesToStore = (data) => {
    console.log(data)
    return {
        type: 'SET_MOVIES_TO_STORE',
        data: data
    };
};
