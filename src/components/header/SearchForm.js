import React, { Fragment, Component } from 'react';

class SearchPanel extends Component {
    render () {
        return ( 
            <Fragment>
                <div className="search-panel__form">
                    <label htmlFor="searchPanelInput">Find your movie</label>
                    <input type="text" id="searchPanelInput"/>
                </div>
        
                <div className="search-panel__filter">
                    <label id="filterDescription">
                    Search by:
                    </label>
                    <button className="search-panel__button-filter">Title</button>
                    <button className="search-panel__button-filter">Genre</button>

                    <button className="search-panel__button-search">Search</button>
                </div>
            </Fragment>
        );
    }
}

export default SearchPanel;
