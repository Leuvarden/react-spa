import React from 'react';
import Footer from './main/Footer';
import './../styles/body.scss';
import ErrorBoundary from './Error.js';

const App = ({children}) => {
    return (
        <div>
            <ErrorBoundary showOnError={<h1>Something went wrong</h1>}>
                {children}
            </ErrorBoundary>
            <Footer />
        </div>
    );
};

export default App;