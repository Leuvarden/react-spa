import React from 'react';
import { ContentArea } from './../../src/components/main/ContentArea.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


/* eslint-disable no-undef */

describe ('ContentArea', () => {
    const exampleStore = () => ({
        data: [],
        dispatch: jest.fn()
    });
    const store = createStore(exampleStore);

    it('renders as expected', () => {
        const main = shallow(
            <Provider store={store}>
                <ContentArea />
            </Provider>
        );
    
        expect(main).toMatchSnapshot();
    });

    it ('renders content items if there is 3 items', () => {
        const exampleStore = () => ({data: []});
        const store = createStore(exampleStore);

        const main = shallow(
            <Provider store={store}>
                <ContentArea />
            </Provider>
        );

        expect(main).toMatchSnapshot();
    });

    it('renders film panel if there is current items', () => {
        const main = shallow(
            <Provider store={store}>
                <ContentArea />
            </Provider>
        );

        expect(main).toMatchSnapshot();
    }); 
});