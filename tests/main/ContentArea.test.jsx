import React from 'react';
import { ContentArea } from './../../src/components/main/ContentArea.js';
import response from './../movies';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


/* eslint-disable no-undef */

describe ('ContentArea', () => {
    const exampleStore = () => ({data: []});
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

    xit('renders film panel if there is current items', () => {
        const main = shallow(<ContentArea />);

        main.setState({currentItem: response.data[0]});

        expect(main).toMatchSnapshot();
    }); 
});