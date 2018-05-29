import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { setSearchTerm } from '../../actions';
import fetchMovies  from './../../thunks/FetchMovies';

const SearchButton = ({updateResults, setSearchTerm}) => {
    
    return (
        <button 
            className="search-panel__button-search"
            onClick={() => {
                let term = document.getElementById('searchPanelInput');
                let query = term ? term.value : 'all';
                setSearchTerm(query);
            } }
        >
        search
        </button>
    );
};

let mapStateToProps = (state, ownProps) => {
    const params = new URLSearchParams(ownProps.location.search);
    return {
        searchQuery: params.get('query')
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    // const params = new URLSearchParams(ownProps.location.search);
    return {
        setSearchTerm: (query) => {
            if (query.length) {
                ownProps.history.push(`/?query=${query}`);
            } else {
                ownProps.history.push('/?query=all');
            }
            dispatch(setSearchTerm(query));
            dispatch(fetchMovies('title', query));
        }
    };
};


export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(SearchButton)
);

