import orderBy from 'lodash/orderBy';
import { connect } from 'react-redux';
import ContentArea from './../components/main/ContentArea';
import { withRouter } from 'react-router';
// import fetchMovies  from './../thunks/FetchMovies';

const sortMovies = (movies=[], sortBy='title') => orderBy(movies, [sortBy], 'asc');

let mapStateToProps = (state) => {
    return {
        movies: sortMovies(state.data.data, state.sortBy),
        activeMovie: state.activeMovie,
        searchTerm: state.searchTerm
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateResults: (query, searchBy) => {
            // dispatch(fetchMovies(searchBy, query));
        }
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(ContentArea)
);


