import React from 'react';
import ContentArea from './../../src/components/main/ContentArea.js';
import response from './../movies';

/* eslint-disable no-undef */

describe ('ContentArea', () => {

    it('renders as expected', () => {
        const main = shallow(<ContentArea />);
    
        expect(main).toMatchSnapshot();
    });

    it ('renders content items if there is 3 items', () => {
        const main = shallow(<ContentArea />);

        main.setState({contentData: response.data});

        expect(main).toMatchSnapshot();
    });

    it ('renders message if there is no content in response', () => {
        const main = shallow(<ContentArea />);

        main.setState({contentData: []});

        expect(main).toMatchSnapshot();
    });

    it('renders film panel if there is current items', () => {
        const main = shallow(<ContentArea />);

        main.setState({currentItem: response.data[0]});

        expect(main).toMatchSnapshot();
    }); 
});