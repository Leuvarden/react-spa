import React from 'react';
import { FilmPanel } from './../../src/components/main/FilmPanel.js';

/* eslint-disable no-undef */
describe ('FilmPanel', () => {

    const defaultProps = {
        genres: [ 'Adventure', 'Science'],
        poster_path: 'poster_path',
        release_date: '2014-05-02',
        title:'Pulp Fiction',
        overview:'Lorem ipsum dolem sit amet'
    };

    it('renders as expected', () => {
        const item = shallow(
            <FilmPanel {...defaultProps}/>
        );
    
        expect(item).toMatchSnapshot();
    });

});