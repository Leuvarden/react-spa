import React, { Component } from 'react';
import SearchPanel from './header/SearchPanel';
import ContentArea from './main/ContentArea';

export default class MainPage extends Component {
    render () {
        return (
            <main>
                <SearchPanel />
                <ContentArea />
            </main>
        );
    }
}