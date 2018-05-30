import React, { Component } from 'react';
import ContentAreaContainer from './../containers/ContentAreaContainer';
import SearchPanel from './header/SearchPanel';

export default class MainPage extends Component {
    render () {
        return (
            <main>
                <SearchPanel />
                <ContentAreaContainer />
            </main>
        );
    }
}