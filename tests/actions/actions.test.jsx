import * as actions from './../../src/actions';
import response from './../movies';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';

/* eslint-disable no-undef */

describe('actions', () => {

    it('should create an action to select movie', () => {
        const movie = {
            title: 'title',
            year: '2018'
        };

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
        const sort = 'title';

        const expectedAction = {
            type: 'SET_SORTING',
            criterion: sort
        };

        expect(actions.setSorting(sort)).toEqual(expectedAction);

    });
});

describe('async actions', () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);

    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    it('returns json response with movies data', () => {
        window.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve(response)
        );

        const expectedAction = [{
            type: 'SET_MOVIES_TO_STORE',
            data: response.data
        }];

        const store = mockStore({ movies : response.data});

        return store.dispatch(actions.fetchMovies()).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });
});

