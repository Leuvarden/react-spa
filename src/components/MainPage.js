import React, { Component } from 'react';
import Content from './../containers/Content';
import SearchPanel from './header/SearchPanel';

export default class MainPage extends Component {
    render () {
        return (
            <main>
                <SearchPanel />
                <Content />
            </main>
        );
    }
}