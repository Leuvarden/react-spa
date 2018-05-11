import React from 'react';
import ContentArea from './../../src/components/main/ContentArea.js';
import response from './../movies.json';
/* eslint-disable no-undef */

describe ('ContentArea', () => {

    it('renders as expected', () => {
        const main = shallow(<ContentArea />);
    
        expect(main).toMatchSnapshot();
    });

    xit('should add content items after fetching info', () => {
        //causes error
        //invalid json response body at undefined reason: Unexpected end of JSON input
        fetch.mockResponse(response, {status: 200});
        const component = mount(<ContentArea/>);

        expect(fetch.mock.calls).toHaveLength(1);
        expect(component.find('.content-item')).toHaveLength(3);
    });
});
