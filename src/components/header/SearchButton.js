import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { setSearchQuery } from '../../actions';
import { fetchMoviesForSearch }  from './../../thunks/FetchMovies';
import PropTypes from 'prop-types';

const SearchButton = ({ setSearchQuery, searchBy, sortBy }) => {
    
    return (
        <button 
            className="search-panel__button-search"
            onClick={() => {
                let term = document.getElementById('searchPanelInput');
                let query = term ? term.value : 'all';
                setSearchQuery(query,  searchBy, sortBy);
            } }
        >
            Search
        </button>
    );
};

let mapStateToProps = (state) => {
    return {
        searchBy: state.searchBy,
        sortBy: state.sortBy
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setSearchQuery: (query, searchBy, sortBy) => {
            if (query.length) {
                ownProps.history.push(`/?query=${query}&searchBy=${searchBy}`);
            } else {
                ownProps.history.push(`/?query=all&searchBy=${searchBy}`);
            }

            dispatch(setSearchQuery(query));
            dispatch(fetchMoviesForSearch(query, searchBy, sortBy));
        }
    };
};


export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(SearchButton)
);

SearchButton.propTypes = {
    searchBy: PropTypes.string,
    setSearchQuery: PropTypes.func,
};