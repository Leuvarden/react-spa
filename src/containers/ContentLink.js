import React from 'react';
import { NavLink } from 'react-router-dom';

const ContentLink = ({ id, children }) => (
    <NavLink
        to={`/film/${id}`}   
        style={ {
            color: 'white'
        }}     
    >
        {children} - {id}
    </NavLink>
);

export default ContentLink;