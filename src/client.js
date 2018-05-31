import React from 'react';
import { hydrate } from 'react-dom';
import store from './store';
import Routes from './Routes';

const root = <Routes store={store} />;

hydrate(
    root,
    document.getElementById('app')
);