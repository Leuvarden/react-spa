import React from 'react';
import ContentErrorItem from './../../src/components/main/ContentErrorItem';

/* eslint-disable no-undef */
describe ('ContentErrorItem', () => {

    it('renders as expected', () => {
        const item = shallow(<ContentErrorItem />);
    
        expect(item).toMatchSnapshot();
    });

});