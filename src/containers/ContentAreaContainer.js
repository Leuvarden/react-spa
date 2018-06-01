import orderBy from 'lodash/orderBy';
import { connect } from 'react-redux';
import ContentArea from './../components/main/ContentArea';
import { withRouter } from 'react-router';
import fetchMovies  from './../thunks/FetchMovies';

const sortMovies = (movies=[], sortBy='title') => orderBy(movies, [sortBy], 'asc');

let mapStateToProps = (state, ownProps) => {
    // const params = new URLSearchParams(ownProps.location.search);

    return {
        movies: sortMovies(state.data.data, state.sortBy),
        activeMovie: state.activeMovie,
        // searchQuery: params.get('query'),
        // searchBy: params.get('searchBy'),
        // searchTermFromButton: state.searchTerm
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateResults: (query, searchBy) => {
            dispatch(fetchMovies(searchBy, query));
        }
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(ContentArea)
);


