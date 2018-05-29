import React from 'react';
import { NavLink } from 'react-router-dom';

const ContentLink = ({ id, children }) => (
    <NavLink to={`/films/${id}`} >
        {children}
    </NavLink>
);

export default ContentLink;