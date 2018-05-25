import { connect } from 'react-redux';
import { setSearchCriterion, setSearchTerm } from '../actions';
import fetchMovies  from './../thunks/FetchMovies';
import SearchForm from '../components/header/SearchForm';


let mapStateToProps = (state) => ({
    searchBy: state.searchBy,
    searchTerm: state.searchTerm,
    movies: state.data.data
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
