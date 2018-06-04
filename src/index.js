import React from 'react';
import { render } from 'react-dom';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import store from './store';

const root = <Routes 
    Router={BrowserRouter}
    store={store} 
/>;

render(
    root,
    document.getElementById('app')
);