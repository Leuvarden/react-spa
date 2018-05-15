
import React from 'react';
import Logo from './../../src/components/main/Logo.js';


/* eslint-disable no-undef */
describe ('Logo', () => {

    it('renders as expected', () => {
        const logo = shallow(<Logo />);
    
        expect(logo).toMatchSnapshot();
    });

});