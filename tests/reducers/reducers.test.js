import * as reducers from './../../src/reducers/rootReducer';

describe('activeMovie reducer', () => {
    const reducer = reducers.activeMovie;

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(null);
    });

    it('should handle MOVIE_SELECTED', () => {
        let passed = reducer([], {type: 'MOVIE_SELECTED', payload: {title: 'title'}});
        let expected = {title: 'title'};

        expect(passed).toEqual(expected);
    });
});

