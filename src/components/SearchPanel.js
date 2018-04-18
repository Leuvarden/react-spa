import React, { Component } from 'react';
import Logo from './Logo';

export default class SearchPanel extends Component {
    render () {
        const inputElementWithLabel = () => {
            return (
                <div className="search-panel__form">
                    <label htmlFor="searchPanelInput">Find your movie</label>
                    <input type="text" id="searchPanelInput"/>
                </div>
            );          
        };

        const filterButton = (name) => {
            return (
                <button className="search-panel__button-filter">{name}</button>
            );
        };

        return ( 
            <section className="search-panel">
                <div className="search-panel__container">
                    {Logo}
                    {inputElementWithLabel()}
                    <div className="search-panel__action-elements">
                        <div className="search-panel__filter">
                            <label id="filterDescription">Search by</label>
                            {filterButton('Title')}
                            {filterButton('Genre')}
                        </div>
                        <button className="search-panel__button-search">Search</button>
                    </div>
                </div>
            </section>
        );
    }
}