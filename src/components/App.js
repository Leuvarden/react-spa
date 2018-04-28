import React, { Component } from 'react';
import MainPage from './MainPage';
import Footer from './main/Footer';
import './../public/styles/styles.scss';

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