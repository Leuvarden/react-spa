import React from 'react';
import SearchPanel from './../../src/components/header/SearchPanel';

/* eslint-disable no-undef */
describe ('SearchPanel', () => {

    it('renders as expected', () => {
        const panel = render(<SearchPanel />);
    
        expect(panel).toMatchSnapshot();
    });

});