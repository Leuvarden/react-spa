import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = ({searchParams, setSearchParams}) => {
    return (
        <input 
            type="text" 
            id="searchPanelInput"
            onKeyDown={(e) => {
                if (e.keyCode === 13) { //enter
                    setSearchParams({
                        query: e.target.value, 
                        searchBy: searchParams.searchBy
                    });
                    e.target.value = '';
                }
            }}
        />
    );
};

export default SearchInput;

SearchInput.propTypes = {
    setSearchParams: PropTypes.func,
    searchParams: PropTypes.object
};
