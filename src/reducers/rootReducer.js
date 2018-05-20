import { combineReducers } from 'redux';


let activeMovie = (state = null, action) => {
    switch (action.type) {
    case 'MOVIE_SELECTED':
        return action.payload;
    default:
        return state;
    }
};

const dataReducer = (state = [], action) => {
    console.log(action);
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

let rootReducer = combineReducers({
    data: dataReducer,
    activeMovie: activeMovie
});

export default rootReducer;