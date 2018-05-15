import React from 'react';
import SearchForm from './../../src/components/header/SearchForm';


/* eslint-disable no-undef */
describe ('SearchForm', () => {

    it('renders as expected', () => {
        const form = shallow(<SearchForm />);
    
        expect(form).toMatchSnapshot();
    });

});