import React from 'react';
import ContentArea from './../../src/components/main/ContentArea.js';

/* eslint-disable no-undef */

const content = [
    {
        id: 1,
        genres: [ 'Adventure', 'Science'],
        img: 'poster_path',
        date: '2014-05-02',
        title:'Pulp Fiction',
        overview: 'overview'
    }, 
    {
        id: 2,
        genres: [ 'Adventure', 'Science'],
        img: 'poster_path',
        date: '2014-05-02',
        title:'Pulp Fiction',
        overview: 'overview'
    }
];

describe ('ContentArea', () => {

    it('renders as expected', () => {
        const main = shallow(
            <ContentArea />);
    
        expect(main).toMatchSnapshot();
    });

    // it('adds content items', () => {

    //     // const spy = jest.spyOn(ContentArea, 'getContent');

    //     const main = shallow(<ContentArea />);

    //     // expect(main.find('.content-item').length).toBe(0);

    //     main.setState({
    //         contentData: content
    //     });

    //     // console.log(main)

    //     // expect(main.find('.content-item').length).toBe(2);

    //     // main.unmount();

    //     // expect(spy).toHaveBeenCalled();
    // });

});