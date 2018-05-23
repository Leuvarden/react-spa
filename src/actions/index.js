import * as actions from './constants';

const url = 'http://react-cdp-api.herokuapp.com/movies';

export const selectMovie = (movie) => {
    return {
        type: actions.MOVIE_SELECTED,
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
        type: actions.SET_MOVIES_TO_STORE,
        data: data
    };
};

export const setSorting = criterion => ({
    type: actions.SET_SORTING,
    criterion: criterion
});

export const setSearch = search => ({
    type: actions.SET_SEARCH,
    search: search
});
