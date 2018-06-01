import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import SearchButton from './SearchButton';
import FilterButtons from './FilterButtons';

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
                    <FilterButtons searchBy={this.props.searchBy} setSearchCriterion={this.props.setSearchCriterion}/>
                    <SearchButton />
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

    getTerm() {
        let term = document.getElementById('searchPanelInput').value;
        this.props.setSearchTerm(term);
        this.props.updateResults(this.props.searchBy, term);
    }
}

export default SearchForm;

SearchForm.propTypes = {
    searchBy: PropTypes.string,
    setSearchTerm: PropTypes.func,
    setSearchCriterion: PropTypes.func,
    updateResults: PropTypes.func
};

