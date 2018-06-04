import React from 'react';
import PropTypes from 'prop-types';

const SearchButton = ({ setSearchParams, searchParams, sortBy }) => {
    
    return (
        <button 
            className="search-panel__button-search"
            onClick={() => {
                let term = document.getElementById('searchPanelInput');
                let query = term ? term.value : 'all';
                setSearchParams({
                    query, 
                    searchBy: searchParams.searchBy
                }, sortBy);
            } }
        >
            Search
        </button>
    );
};

export default SearchButton;

SearchButton.propTypes = {
    searchParams: PropTypes.object,
    setSearchParams: PropTypes.func,
    sortBy: PropTypes.string
};