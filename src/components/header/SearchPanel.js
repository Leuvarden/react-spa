import React, { Component } from 'react';
import Logo from '../main/Logo';
import './../../styles/search-panel.scss';

class SearchPanel extends Component {
    
    inputElementWithLabel() {
        return (
            <div className="search-panel__form">
                <label htmlFor="searchPanelInput">Find your movie</label>
                <input type="text" id="searchPanelInput"/>
            </div>
        );          
    }

    filterButton(name) {
        return (
            <button className="search-panel__button-filter">{name}</button>
        );
    }

    render () {
        return ( 
            <section className="search-panel">
                <div className="search-panel__container">
                    <Logo />
                    {this.inputElementWithLabel()}
                    <div className="search-panel__action-elements">
                        <div className="search-panel__filter">
                            <label id="filterDescription">Search by</label>
                            {this.filterButton('Title')}
                            {this.filterButton('Genre')}
                        </div>
                        <button className="search-panel__button-search">Search</button>
                    </div>
                </div>
            </section>
        );
    }
}

export default SearchPanel;