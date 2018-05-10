import React from 'react';
import Footer from './../../src/components/main/Footer.js';

/* eslint-disable no-undef */
describe ('Footer', () => {

    it('renders as expected', () => {
        const footer = shallow(<Footer />);
    
        expect(footer).toMatchSnapshot();
    });

});