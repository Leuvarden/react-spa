import React from 'react';
import { NavLink } from 'react-router-dom';

export default function EmptyContent () {
    return <div className="content__empty">
    Nothing was found. 
    Go to <NavLink to='/'> Home page?</NavLink>
    </div>;
}