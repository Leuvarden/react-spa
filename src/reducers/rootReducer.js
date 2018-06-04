import { combineReducers } from 'redux';
import * as constants from './../actions/constants';

export let activeMovie = (state = {}, action) => {
    switch (action.type) {
    case constants.MOVIE_SELECTED:
        return action.payload;
    default:
        return state;
    }
};

export const dataReducer = (state = [], action) => {
    switch (action.type) {
    case constants.SET_MOVIES_TO_STORE:
        return {
            ...state,
            data: action.data
        };
    default:
        return state;
    }
};

export const sortBy = (state = 'release_date', action) => {
    switch (action.type) {
    case constants.SET_SORTING:
        return action.criterion;
    default:
        return state;
    }
};

export const searchParams = (state = {searchBy: 'title', query: ''}, action) => {
    switch (action.type) {
    case 'SET_SEARCH_PARAMS':
        return {
            ...state,
            query: action.query, 
            searchBy: action.searchBy
        };
    default:
        return state;
    }
};

export const sameGenreMovies = (state = [], action) => {
    switch (action.type) {
    case constants.SET_SAME_GENRES_MOVIES:
        return action.movies;
    default:
        return state;
    }
};

let rootReducer = combineReducers({
    data: dataReducer,
    activeMovie,
    sortBy,
    searchParams,
    sameGenreMovies
});

export default rootReducer;