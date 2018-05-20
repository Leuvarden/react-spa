import * as actions from './../../src/components/actions';
import response from './../movies';

describe('actions', () => {

    it('should create an action to select movie', () => {
        const movie = {
            title: 'title',
            year: '2018'
        }

        const expectedAction = {
            type: 'MOVIE_SELECTED',
            payload: movie
        };

        expect(actions.selectMovie(movie)).toEqual(expectedAction);

    });

    it('should create an action to set movies to store', () => {
        const data = response.data;

        const expectedAction = {
            type: 'SET_MOVIES_TO_STORE',
            data: data
        };

        expect(actions.setMoviesToStore(data)).toEqual(expectedAction);

    });

    it('should create an action to set sorting', () => {
        const sort = 'title'

        const expectedAction = {
            type: 'SET_SORTING',
            criterion: sort
        };

        expect(actions.setSorting(sort)).toEqual(expectedAction);

    });
});