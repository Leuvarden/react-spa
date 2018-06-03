import { connect } from 'react-redux';
import findMovies from './../actions/findMovies';
import FilmPage from './../components/FilmPage';
import {selectMovie} from './../actions';
import { withRouter } from 'react-router';

let mapStateToProps = (state, ownProps) => {
    let activeMovie = state.activeMovie;
    let id = ownProps.match.params.id || '0';

    return {
        movieId: id,
        activeMovie: activeMovie,
        sameGenreMovies: activeMovie.genres ? findMovies(state.data.data, 'genres', activeMovie.genres[0]) : []
    };
};

let mapDispatchToProp = (dispatch) => {
    return {
        // getActiveMovie: (id) => {
        //     dispatch({type: 'FETCH_MOVIES_BY_ID', id});
        // }
        setActiveMovie: (id) => {
            dispatch({type: 'FETCH_MOVIES_BY_ID', id});
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProp)(FilmPage));

