import _ from 'lodash';
import { connect } from 'react-redux';
import { setSearchCriterion, setSearchTerm, fetchMovies } from '../actions';
import SearchForm from '../components/header/SearchForm';

const findMovies = (movies=[], searchFor='title', searchTerm) => {
    if (searchTerm) {
        let founded = _.find(movies, (o) => o[searchFor].toLowerCase() == searchTerm.trim().toLowerCase() );
        if (!_.isArray(founded)) {
            return [].concat(founded);
        }
        return founded;
    }
};

let mapStateToProps = (state) => ({
    searchBy: state.searchBy,
    searchTerm: state.searchTerm,
    movies: state.data.data,
    findMovies: findMovies
});

const mapDispatchToProps = (dispatch) => ({
    setSearchCriterion: (prop) => {
        dispatch(setSearchCriterion(prop));
    },
    setSearchTerm: (prop) => {
        dispatch(setSearchTerm(prop));
    },
    updateResults: (criterion, term) => {
        dispatch(fetchMovies(criterion, term));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchForm);
