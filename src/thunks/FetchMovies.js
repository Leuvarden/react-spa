import { setMoviesToStore } from './../actions';

const url = 'http://react-cdp-api.herokuapp.com/movies';

const fetchMovies = (criterion, term) => {
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

export default fetchMovies;