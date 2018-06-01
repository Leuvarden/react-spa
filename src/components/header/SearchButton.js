import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { setSearchTerm } from '../../actions';
import fetchMovies  from './../../thunks/FetchMovies';
import PropTypes from 'prop-types';

const SearchButton = ({ setSearchQuery, searchBy }) => {
    
    return (
        <button 
            className="search-panel__button-search"
            onClick={() => {
                let term = document.getElementById('searchPanelInput');
                let query = term ? term.value : 'all';
                setSearchQuery(query, searchBy);
            } }
        >
            Search
        </button>
    );
};

let mapStateToProps = (state) => {
    return {
        searchQuery: state.searchTerm,
        searchBy: state.searchBy
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setSearchQuery: (query, searchBy) => {
            if (query.length) {
                ownProps.history.push(`/?query=${query}&searchBy=${searchBy}`);
            } else {
                ownProps.history.push(`/?query=all&searchBy=${searchBy}`);
            }
            dispatch(setSearchTerm(query));
            dispatch(fetchMovies(searchBy, query));
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