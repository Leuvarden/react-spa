import React, { Component } from 'react';
import Logo from './../main/Logo';
import SearchFormContainer from './../../containers/SearchFormContainer';
import SortPanelContainer from '../../containers/SortPanelContainer';
import './../../styles/search-panel.scss';

class SearchPanel extends Component {
    render () {
        return (
            <section className="search-panel">
                <div className="search-panel__container">
                    <Logo />
                    <SearchFormContainer />
                    <SortPanelContainer />
                </div>
            </section>
        );
    }
}

export default SearchPanel;