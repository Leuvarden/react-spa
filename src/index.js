import React from 'react';
import { render } from 'react-dom';
import store from './store';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';

render(
    <Routes 
        Router={ BrowserRouter }
        store={store} 
    />,
    document.getElementById('app')
);