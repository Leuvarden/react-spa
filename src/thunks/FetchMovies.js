import {setMoviesToStore} from './../actions';

const url = 'http://react-cdp-api.herokuapp.com/movies';

export const fetchMovies = () => {
    return (dispatch) => {
        return fetch(url)
            .then(response => response.json())
            .then(response => dispatch(setMoviesToStore(response.data)))
            .catch(err => console.warn(err));
    };
};