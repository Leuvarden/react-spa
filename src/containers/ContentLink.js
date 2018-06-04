import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ContentLink = ({ id, children }) => (
    <Link to={`/films/${id}`} >
        {children}
    </Link>
);

export default ContentLink;

ContentLink.propTypes = {
    id: PropTypes.number,
    children: PropTypes.any
};