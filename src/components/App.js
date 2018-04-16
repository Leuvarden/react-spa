import React, { Component } from 'react';
import MainPage from './MainPage';
import Footer from './Footer';

class App extends Component {
    render () {
        return (
            <div>
                <MainPage />
                <Footer />
            </div>
        );
    }
}

export default App;