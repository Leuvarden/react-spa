import React from 'react';
import SearchPanel from './../../src/components/header/SearchPanel';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

/* eslint-disable no-undef */
describe ('SearchPanel', () => {

    const exampleStore = () => ({data: []});
    const store = createStore(exampleStore);

    it('renders as expected', () => {
        const panel = render(
            <Provider store={store}>
                <SearchPanel />
            </Provider>
        );
    
        expect(panel).toMatchSnapshot();
    });

});