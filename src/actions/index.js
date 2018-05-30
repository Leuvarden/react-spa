import * as constants from './constants';
import _filter from 'lodash/filter';
import _includes from 'lodash/includes';
import _isArray from 'lodash/isArray';

const url = 'http://react-cdp-api.herokuapp.com/movies';

const findMovies = (movies=[], searchFor='title', searchTerm) => {
    if (searchTerm) {

        let founded = _filter(movies, (o) => {

            let target;

            if (_isArray(o[searchFor])) {
                target = o[searchFor].join(' ').toLowerCase();
            } else {
                target = o[searchFor].toLowerCase();
            }
            
            return _includes(target, searchTerm.trim().toLowerCase());
        });

        return [].concat(founded);
    }

    return movies;
};

export const selectMovie = (movie) => {
    return {
        type: constants.MOVIE_SELECTED,
        payload: movie
    };
};

export const fetchMovies = (criterion, term) => {
    return (dispatch) => {
        return fetch(url)
            .then(response => response.json())
            .then(response => 
                dispatch(setMoviesToStore(response.data, criterion, term))
            )
            .catch(() => {
                dispatch(setMoviesToStore([]));
            });
    };
};

export const setMoviesToStore = (data, criterion, term) => {
    return {
        type: constants.SET_MOVIES_TO_STORE,
        data: findMovies(data, criterion, term)
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
