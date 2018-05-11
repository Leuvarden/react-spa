import FetchItems from './../../src/components/main/FetchItems.js';
import response from './../movies';

/* eslint-disable no-undef */
describe ('FetchItems', () => {

    it('returns json response with movies data', () => {
        window.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve(response)
        );

        return FetchItems('url')
            .then((response) => {
                const items = response.data;

                expect(items.length).toBe(3);
            });
    });

});