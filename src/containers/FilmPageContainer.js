import { connect } from 'react-redux';
import findMovies from './../actions/findMovies';
import FilmPage from './../components/FilmPage';

let mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.id || '0';
    let movie = findMovies(state.data.data, 'id', id)[0];

    return {
        activeMovie: movie,
        sameGenreMovies: findMovies(state.data.data, 'genres', movie.genres[0]) 
    };
};

export default connect(mapStateToProps)(FilmPage);

