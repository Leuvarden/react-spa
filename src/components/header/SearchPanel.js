import React, { Component } from 'react';
import Logo from './../main/Logo';
import SearchForm from './SearchForm';
import SortPanel from './SortPanel';
import './../../styles/search-panel.scss';

class SearchPanel extends Component {
    render () {
        return (
            <section className="search-panel">
                <div className="search-panel__container">
                    <Logo />
                    <SearchForm />
                    <SortPanel />
                </div>
            </section>
        );
    }
}

export default SearchPanel;