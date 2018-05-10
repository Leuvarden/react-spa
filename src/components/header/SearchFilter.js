import React, { Component } from 'react';
import SearchButton from './SearchButton';

class SearchFilter extends Component {
    
    render () {
        return ( 
            <div className="search-panel__filter">
                <label id="filterDescription">
                    Search by:
                    <button className="search-panel__button-filter">Title</button>
                    <button className="search-panel__button-filter">Genre</button>
                </label>
                <SearchButton />
            </div>
        );
    }
}

export default SearchFilter;