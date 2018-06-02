import React from 'react';
import SortButton from '../../containers/SortButtonContainer'; //todo: rename appropriately
import PropTypes from 'prop-types';

const SortPanel = ({ moviesFound }) => {
    return (
        <div className="search-panel__sorting">
            <span className="movies-count">
                {moviesFound} movies found
            </span>
    
            <span className="sorting__buttons">
                <label>Sort by:</label>
                <SortButton criterion='release_date'>release date</SortButton>
                <SortButton criterion='title'>title</SortButton>
            </span>
        </div>
    );
};

export default SortPanel;

SortPanel.propTypes = {
    moviesFound: PropTypes.number
};