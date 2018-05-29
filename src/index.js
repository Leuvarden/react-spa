import React from 'react';
import { render } from 'react-dom';
import store from './store';
import Routes from './Routes';

render(
    <Routes store={store} />,
    document.getElementById('app')
);