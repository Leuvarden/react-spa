import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './../../styles/search-panel.scss';

const Logo = ({ path }) => {
    return (
        <div className="logo logo__container">
            <div className="logo__inner">
                netflixroulette
                {path.includes('film') ? 
                    <NavLink to="/" className="search-panel__button-search">Search</NavLink>
                    : null}
            </div>
        </div>
    );
};

export default Logo;

Logo.propTypes = {
    path: PropTypes.string
};

Logo.defaultProps = {
    path: ''
};