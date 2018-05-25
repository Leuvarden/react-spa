import * as constants from './constants';
import findMovies from './findMovies';

export const selectMovie = (movie) => {
    return {
        type: constants.MOVIE_SELECTED,
        payload: movie
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
