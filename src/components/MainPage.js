import React, { Component } from 'react';
import SearchPanel from './SearchPanel';
import ContentArea from './ContentArea';

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