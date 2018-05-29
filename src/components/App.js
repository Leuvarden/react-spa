import React, { Component } from 'react';
import Footer from './main/Footer';
import './../styles/body.scss';
import ErrorBoundary from './Error.js';

class App extends Component {
    render () {
        return (
            <div>
                <ErrorBoundary showOnError={<h1>Something went wrong</h1>}>
                    {this.props.children}
                </ErrorBoundary>
                <Footer />
            </div>
        );
    }
}

export default App;