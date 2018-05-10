import React from 'react';
import SearchFilter from './../../src/components/header/SearchFilter';

/* eslint-disable no-undef */
describe ('SearchFilter', () => {

    it('renders as expected', () => {
        const form = shallow(<SearchFilter />);
    
        expect(form).toMatchSnapshot();
    });

});