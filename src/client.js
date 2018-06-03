import React from 'react';
import { hydrate } from 'react-dom';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './configureStore';

const store = configureStore(window.PRELOADED_STATE);

const root = <Routes 
    Router={BrowserRouter}
    store={store} 
/>;

hydrate(
    root,
    document.getElementById('app')
);