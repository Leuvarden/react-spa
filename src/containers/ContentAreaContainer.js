import orderBy from 'lodash/orderBy';
import { connect } from 'react-redux';
import ContentArea from './../components/main/ContentArea';
import { withRouter } from 'react-router';
import { setSearchParams } from './../actions/index';

const sortMovies = (movies=[], sortBy='title') => orderBy(movies, [sortBy], 'asc');

let mapStateToProps = (state) => {
    return {
        movies: sortMovies(state.data.data, state.sortBy), //todo: remove this
        activeMovie: state.activeMovie,
        searchTerm: state.searchTerm
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setSearchParams: (params) => {
            dispatch(setSearchParams(params, dispatch));
        }
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(ContentArea)
);


