import { setMoviesToStore } from './../actions';

const url = 'http://react-cdp-api.herokuapp.com/movies';
//http://react-cdp-api.herokuapp.com/movies/?search=drama&searchBy=genres

const fetchMovies = () => {
    return (dispatch) => {
        return fetch(url)
            .then(response => response.json())
            .then(response => 
                dispatch(setMoviesToStore(response.data))
            )
            .catch(() => {
                dispatch(setMoviesToStore([]));
            });
    };
};

export const fetchMoviesForSearch = (searchQuery, searchBy, sortBy) => {
    return (dispatch) => {
        let urlSearch =  `${url}/?search=${searchQuery}&searchBy=${searchBy}`;
        if (sortBy) {
            urlSearch += `&sortBy=${sortBy}`;
        }
        return fetch(urlSearch)
            .then(res =>  res.json())
            .then(res => {
                console.log(res)
                dispatch(setMoviesToStore(res.data));
            })
            .catch(() => {
                dispatch(setMoviesToStore([]));
            });
    }; 
};

export default fetchMovies;