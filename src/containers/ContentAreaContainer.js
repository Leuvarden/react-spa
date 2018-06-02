import orderBy from 'lodash/orderBy';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { setSearchParams } from './../actions/index';
import ContentArea from './../components/main/ContentArea';

const sortMovies = (movies=[], sortBy='title') => orderBy(movies, [sortBy], 'asc');

let mapStateToProps = (state) => {
    return {
        movies: sortMovies(state.data.data, state.sortBy),
        activeMovie: state.activeMovie
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setSearchParams: (params) => {
            dispatch(setSearchParams(params));
        },
        fetchMovies: () => {
            dispatch({type: 'FETCH_MOVIES'} );
        }
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(ContentArea)
);


