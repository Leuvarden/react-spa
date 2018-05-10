import React from 'react';
import SearchButton from './../../src/components/header/SearchButton';


/* eslint-disable no-undef */
describe ('SearchButton', () => {

    it('renders as expected', () => {
        const button = shallow(<SearchButton />);
    
        expect(button).toMatchSnapshot();
    });

});