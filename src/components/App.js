import React from 'react';
import PropTypes from 'prop-types';
import Logo from './common/Logo';
import ErrorBoundary from './common/Error';
import './../styles/body.scss';

const App = ({children}) => {
    return (
        <div>
            <Logo path={location.pathname} />
            <ErrorBoundary showOnError={<h1>Something went wrong</h1>}>
                {children}
            </ErrorBoundary>
            <Logo />
        </div>
    );
};

export default App;

App.propTypes = {
    children: PropTypes.any
};