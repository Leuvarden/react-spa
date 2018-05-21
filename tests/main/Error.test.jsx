import React from 'react';
import ErrorBoundary from './../../src/components/Error.js';

/* eslint-disable no-undef */
describe ('ErrorBoundary', () => {

    const defaultProps = {
        showOnError: <h1>Something went wrong</h1>
    };

    it('renders as expected without error', () => {
        const item = shallow(
            <ErrorBoundary/>
        );
    
        expect(item).toMatchSnapshot();
    });

    it('renders as expected with error', () => {
        const item = shallow(
            <ErrorBoundary {...defaultProps}>huh</ErrorBoundary>
        );

        const itemUpdate = item.setState({hasError: true});
    
        expect(itemUpdate).toMatchSnapshot();
    });

});