import React, { Component } from 'react';
import MainPage from './MainPage';
import Footer from './Footer';
import './css/index.css';
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