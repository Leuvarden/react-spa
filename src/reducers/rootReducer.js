import { combineReducers } from 'redux';
import * as constants from './../actions/constants';

export let activeMovie = (state = null, action) => {
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

export const searchBy = (state = 'title', action) => {
    switch (action.type) {
    case constants.SET_SEARCH:
        return action.criterion;
    default:
        return state;
    }
};

export const searchTerm = (state='', action) => {
    // console.log(action)
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
    searchBy,
    searchTerm
});

export default rootReducer;