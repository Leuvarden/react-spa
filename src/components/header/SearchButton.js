import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { setSearchTerm } from '../../actions';
import { fetchMoviesForSearch}  from './../../thunks/FetchMovies';

const SearchButton = ({setSearchTerm, searchBy, sortBy}) => {
    
    return (
        <button 
            className="search-panel__button-search"
            onClick={() => {
                let term = document.getElementById('searchPanelInput');
                let query = term ? term.value : 'all';
                setSearchTerm(query, searchBy, sortBy);
            } }
        >
        search
        </button>
    );
};

let mapStateToProps = (state, ownProps) => {
    const params = new URLSearchParams(ownProps.location.search);
    return {
        searchQuery: params.get('query'),
        sortBy: state.sortBy,
        searchBy: state.searchBy
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setSearchTerm: (query, searchBy, sortBy) => {
            if (query.length) {
                ownProps.history.push(`/?query=${query}&searchBy=${searchBy}`);
            } else {
                ownProps.history.push(`/?query=all&searchBy=${searchBy}`);
            }
            dispatch(setSearchTerm(query));
            dispatch(fetchMoviesForSearch(query, searchBy, sortBy));
        }
    };
};


export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(SearchButton)
);

