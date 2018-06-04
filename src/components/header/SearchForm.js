import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import SearchButton from './SearchButton';
import FilterButtons from './FilterButtons';
import SearchInput from './SearchInput';


const SearchForm = ({searchParams, setSearchParams}) => {
    return ( 
        <Fragment>
            <div className="search-panel__form">
                <label htmlFor="searchPanelInput">Find your movie</label>
                <SearchInput 
                    searchParams={searchParams} 
                    setSearchParams={setSearchParams} 
                />
            </div>
        
            <div className="search-panel__filter">
                <label id="filterDescription">Search by:</label>
                <FilterButtons 
                    searchParams={searchParams} 
                    setSearchParams={setSearchParams}
                />

                <SearchButton  
                    searchParams={searchParams} 
                    setSearchParams={setSearchParams} 
                />
            </div>
        </Fragment>
    );
};

export default SearchForm;

SearchForm.propTypes = {
    setSearchParams: PropTypes.func,
    searchParams: PropTypes.object
};

