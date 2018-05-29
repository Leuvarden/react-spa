import orderBy from 'lodash/orderBy';
import { connect } from 'react-redux';
import ContentArea from './../components/main/ContentArea';

const sortMovies = (movies=[], sortBy='title') => orderBy(movies, [sortBy], 'asc');

let mapStateToProps = (state) => {
    return {
        movies: sortMovies(state.data.data, state.sortBy),
        activeMovie: state.activeMovie,
    };
};

export default connect(
    mapStateToProps
)(ContentArea);


