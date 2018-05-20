import { combineReducers } from 'redux';

export let activeMovie = (state = null, action) => {
    switch (action.type) {
    case 'MOVIE_SELECTED':
        return action.payload;
    default:
        return state;
    }
};

export const dataReducer = (state = [], action) => {
    // console.log(action);
    switch (action.type) {
    case 'SET_MOVIES_TO_STORE':
        return {
            ...state,
            data: action.data
        };
    default:
        return state;
    }
};

export const sortBy = (state = 'release_date', action) => {
    // console.log(action)
    switch (action.type) {
    case 'SET_SORTING':
        return action.criterion;
    default:
        return state;
    }
};

let rootReducer = combineReducers({
    data: dataReducer,
    activeMovie,
    sortBy
});

export default rootReducer;