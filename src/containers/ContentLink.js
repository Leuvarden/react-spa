import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const ContentLink = ({ id, children }) => (
    <NavLink to={`/films/${id}`} >
        {children}
    </NavLink>
);

export default ContentLink;

ContentLink.propTypes = {
    id: PropTypes.number,
    children: PropTypes.any
};