import { connect } from 'react-redux';
import FilmPage from './../components/FilmPage';
import { withRouter } from 'react-router';
import { fetchMovieById, fetchSameGenres} from './../thunks/FetchMovies';

let mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.id || '0';

    return {
        filmId: id,
        sortBy: state.sortBy,
        activeMovie: state.activeMovie,
        sameGenreMovies: state.sameGenreMovies
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        fetchMovieById: (id) => {
            dispatch(fetchMovieById(id));
        },
        getSameGenres: (id, sortBy) => {
            dispatch(fetchSameGenres(id, sortBy));
        }
    };

};

export default withRouter(
    connect(
        mapStateToProps, 
        mapDispatchToProps
    )(FilmPage));

