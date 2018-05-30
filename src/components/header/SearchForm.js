import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';

class SearchForm extends Component {
    render () {
        return ( 
            <Fragment>
                <div className="search-panel__form">
                    <label htmlFor="searchPanelInput">Find your movie</label>
                    {this.getInput()}
                </div>
        
                <div className="search-panel__filter">
                    <label id="filterDescription">Search by:</label>
                    {this.getFilterButtons()}
                    {this.getSearchButton()}
                </div>
            </Fragment>
        );
    }

    getInput() {
        return (
            <input 
                type="text" 
                id="searchPanelInput"
                onKeyDown={(e) => {
                    if (e.keyCode === 13) { //enter
                        this.getTerm();
                    }
                }}
            />
        );
    }

    getSearchButton() {
        return (
            <button 
                className="search-panel__button-search"
                onClick={() => this.getTerm() }
            >
            Search
            </button>
        );
    }

    getTerm() {
        let term = document.getElementById('searchPanelInput').value;
        this.props.setSearchTerm(term);
        this.props.updateResults(this.props.searchBy, term);
    }

    getFilterButtons() {
        const searches = ['title', 'genres'];

        return searches.map((el) => 
            <button
                key={uniqueId(el)}
                className={
                    `search-panel__button-filter 
                    ${ el === this.props.searchBy ? 'search-panel__button-filter_active' : ''}`
                }
                onClick={() => {
                    this.props.setSearchCriterion(el);
                }}
            >
                {el}
            </button>
    
        );
    }
}

export default SearchForm;

SearchForm.propTypes = {
    searchBy: PropTypes.string,
    setSearchTerm: PropTypes.func,
    setSearchCriterion: PropTypes.func,
    updateResults: PropTypes.func
};

