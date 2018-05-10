import React from 'react';

export default function SearchForm () {
    return ( 
        <div className="search-panel__form">
            <label htmlFor="searchPanelInput">Find your movie</label>
            <input type="text" id="searchPanelInput"/>
        </div>
    );
}
