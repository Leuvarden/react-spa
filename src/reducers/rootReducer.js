import { combineReducers } from 'redux';
import * as actions from './../actions/constants';

export let activeMovie = (state = null, action) => {
    switch (action.type) {
    case actions.MOVIE_SELECTED:
        return action.payload;
    default:
        return state;
    }
};

export const dataReducer = (state = [], action) => {
    switch (action.type) {
    case actions.SET_MOVIES_TO_STORE:
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
    case actions.SET_SORTING:
        return action.criterion;
    default:
        return state;
    }
};

export const searchBy = (state = 'title', action) => {
    switch (action.type) {
    case action.SET_SORTING:
        return action.search;
    default:
        return state;
    }
};

let rootReducer = combineReducers({
    data: dataReducer,
    activeMovie,
    sortBy,
    searchBy
});

export default rootReducer;