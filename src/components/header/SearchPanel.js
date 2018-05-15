import React, { Component } from 'react';
import Logo from './../main/Logo';
import SearchForm from './SearchForm';
import SearchFilter from './SearchFilter';
import './../../styles/search-panel.scss';

class SearchPanel extends Component {
    render () {
        return (
            <section className="search-panel">
                <div className="search-panel__container">
                    <Logo />
                    <SearchForm />
                    <SearchFilter />
                </div>
            </section>
        );
    }
}

export default SearchPanel;