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

    it('returns empty array if fetch fails', () => {
        window.fetch = jest.fn().mockImplementation(() =>
            Promise.reject()
        );

        const expectedAction = [{
            type: 'SET_MOVIES_TO_STORE',
            data: []
        }];

        const store = mockStore({ movies : []});

        return store.dispatch(actions.fetchMovies()).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });
});

describe('setting movies to store with search criteria', () => {
    const data = response.data;

    it('should return all fetched movies if no search term were added', () => {
        const expectedAction = {
            type: 'SET_MOVIES_TO_STORE',
            data: data
        };

        expect(actions.setMoviesToStore(data)).toEqual(expectedAction);
    });

    it('should return fetched movies with needed title', () => {
        const searchTerm = 'untitled avengers';

        const expectedAction = {
            type: 'SET_MOVIES_TO_STORE',
            data: [].concat(data[1])
        };

        expect(actions.setMoviesToStore(data, 'title', searchTerm)).toEqual(expectedAction);
    });

    it('should return fetched movies with needed genres', () => {
        const searchTerm = 'science fiction';

        const expectedAction = {
            type: 'SET_MOVIES_TO_STORE',
            data: [].concat(data[1], data[2])
        };

        expect(actions.setMoviesToStore(data, 'genres', searchTerm)).toEqual(expectedAction);
    });

    it('should return empty array if nothing was passed', () => {

        const expectedAction = {
            type: 'SET_MOVIES_TO_STORE',
            data: []
        };

        expect(actions.setMoviesToStore()).toEqual(expectedAction);
    });
});

