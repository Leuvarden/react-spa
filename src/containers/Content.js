import { orderBy } from 'lodash';
import { connect } from 'react-redux';
import { selectMovie, fetchMovies } from './../actions';
import ContentArea from './../components/main/ContentArea';

const sortMovies = (movies=[], sortBy='title') => orderBy(movies, [sortBy], 'asc');

let mapStateToProps = (state) => ({
    movies: sortMovies(state.data.data, state.sortBy),
    activeMovie: state.activeMovie,
    sortBy: state.sortBy
});

const mapDispatchToProps = (dispatch) => ({
    selectMovie: (prop) => {
        dispatch(selectMovie(prop));
    }, 
    fetchMovies: () => {
        dispatch(fetchMovies());
    }
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(ContentArea);


