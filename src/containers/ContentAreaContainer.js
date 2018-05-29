import orderBy from 'lodash/orderBy';
import { connect } from 'react-redux';
import { selectMovie, fetchMovies } from './../actions';
import ContentArea from './../components/main/ContentArea';

const sortMovies = (movies=[], sortBy='title') => orderBy(movies, [sortBy], 'asc');

let mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {
        movies: sortMovies(state.data.data, state.sortBy),
        activeMovie: state.activeMovie,
    };
};

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


