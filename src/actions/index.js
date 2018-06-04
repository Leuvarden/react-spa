import * as constants from './constants';

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

export const setSearchBy = searchBy => ({
    type: constants.SET_SEARCH,
    searchBy
});

export const setSearchQuery = searchQuery => {
    return {
        type: constants.SEARCH_FOR,
        searchQuery
    };
};
