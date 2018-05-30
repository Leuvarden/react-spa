import React from 'react';
import ContentItem from './../../src/components/main/ContentItem.js';

/* eslint-disable no-undef */
describe ('ContentItem', () => {

    const defaultProps = {
        genres: [ 'Adventure', 'Science'],
        img: 'poster_path',
        date: '2014-05-02',
        title:'Pulp Fiction',
        updateFilmPanel: jest.fn()
    };

    it('renders as expected', () => {
        const item = render(
            <ContentItem {...defaultProps}/>
        );
    
        expect(item).toMatchSnapshot();
    });

    it('receives handler', () => {
        const item = shallow(
            <ContentItem {...defaultProps}/>
        );

        item.find('figure').first().simulate('click');
    
        expect(defaultProps.updateFilmPanel).toHaveBeenCalledTimes(1);
    });

});