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
export const setMoviesToStore = (data) => {
    return {
        type: constants.SET_MOVIES_TO_STORE,
        data: data
    };
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


export const sortBy = (state = 'release_date', action) => {
    switch (action.type) {
    case constants.SET_SORTING:
        return action.criterion;
    default:
        return state;
    }
};

export const searchBy = (state = 'title', action) => {
    switch (action.type) {
    case constants.SET_SEARCH:
        return action.criterion;
    default:
        return state;
    }
};

export const searchTerm = (state='', action) => {
    switch (action.type) {
    case constants.SEARCH_FOR:
        return action.term;
    default:
        return state;
    }
};

let rootReducer = combineReducers({
    data: dataReducer,
    activeMovie,
    sortBy,
    searchParams
});

export default rootReducer;