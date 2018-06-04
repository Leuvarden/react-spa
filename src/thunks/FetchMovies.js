import { 
    setMoviesToStore, 
    selectMovie, 
    setSameGenresMovies 
} from './../actions';

const url = 'http://react-cdp-api.herokuapp.com/movies';

export const fetchMovies = (criterion, term) => {
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

export const fetchMoviesForSearch = (searchQuery, searchBy, sortBy) => {
    return (dispatch) => {
        let urlSearch =  `${url}/?search=${searchQuery}&searchBy=${searchBy}`;
        if (sortBy) {
            urlSearch  += `&sortBy=${sortBy}`;
        }

        return fetch(urlSearch)
            .then(res =>  res.json())
            .then(res => {
                dispatch(setMoviesToStore(res.data));
            })
            .catch(() => {
                dispatch(setMoviesToStore([]));
            });
    }; 
};

export const fetchMovieById = (id) => {
    return (dispatch) => {
        let urlSearch = `${url}/${id}`;

        return fetch(urlSearch)
            .then(res => res.json())
            .then(res =>
                dispatch(selectMovie(res))
            );

    };
};

export const fetchSameGenres = (id) => {
    return (dispatch) => {
        let urlSearch = `${url}/${id}`;

        return fetch(urlSearch)
            .then(res =>  res.json())
            .then(res => {
                let genre = res.genres[0];
                let urlSearch2 =  `${url}/?search=${genre}&searchBy=genres`;

                fetch(urlSearch2)
                    .then(res => res.json())
                    .then(res =>
                        dispatch(setSameGenresMovies(res.data))
                    );
            });

    }; 
};