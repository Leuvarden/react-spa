import * as reducers from './../../src/reducers/rootReducer';
import response from './../movies';
import * as constants from './../../src/actions/constants';


/* eslint-disable no-undef */
describe('activeMovie reducer', () => {
    const reducer = reducers.activeMovie;

    it('should return the initial state', () => {
        expect( reducer(undefined, {} )).toEqual(null);
    });

    it('should handle MOVIE_SELECTED', () => {
        let passed = reducer([], {
            type: constants.MOVIE_SELECTED, 
            payload: {title: 'title'}
        });

        let expected = {
            title: 'title'
        };

        expect(passed).toEqual(expected);
    });
});

describe('dataReducer reducer', () => {
    const reducer = reducers.dataReducer;

    it('should return the initial state', () => {
        expect( reducer(undefined, {})).toEqual([]);
    });

    it('should handle setting movies to store', () => {
        let passed = reducer([], {
            type: constants.SET_MOVIES_TO_STORE, 
            data: response.data
        });

        let expected = {
            data: response.data
        };

        expect(passed).toEqual(expected);
    });
});

describe('sortBy reducer', () => {
    const reducer = reducers.sortBy;
    let state = 'release_date';

    it('should return the initial state', () => {
        expect( reducer(undefined, {} )).toEqual(state);
    });

    it('should handle SET_SORTING', () => {
        let passed = reducer([], {
            type: constants.SET_SORTING, 
            criterion: 'date'
        });

        let expected = 'date';

        expect(passed).toEqual(expected);
    });
});

describe('searchBy reducer', () => {
    const reducer = reducers.searchBy;
    let state = 'title';

    it('should return the initial state', () => {
        expect( reducer(undefined, {} )).toEqual(state);
    });

    it('should handle SET_SEARCH', () => {
        let passed = reducer([], {
            type: constants.SET_SEARCH, 
            criterion: 'date'
        });

        let expected = 'date';

        expect(passed).toEqual(expected);
    });
});

describe('searchTerm reducer', () => {
    const reducer = reducers.searchTerm;
    let state = '';

    it('should return the initial state', () => {
        expect( reducer(undefined, {} )).toEqual(state);
    });

    it('should handle SEARCH_FOR', () => {
        let passed = reducer([], {
            type: constants.SEARCH_FOR, 
            term:  'date'
        });

        let expected = 'date';

        expect(passed).toEqual(expected);
    });
});

