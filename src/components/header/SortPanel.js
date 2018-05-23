import React, { Component } from 'react';
import SortButton from './SortButton';
import PropTypes from 'prop-types';

class SortPanel extends Component {
    render () {
        return (
            <div className="search-panel__sorting">
                <span className="movies-count">
                    {this.props.moviesFound} movies found
                </span>
    
                <span className="sorting__buttons">
                    <label>
                    Sort by:
                    </label>
                    <SortButton criterion='release_date'>release date</SortButton>
                    <SortButton criterion='title'>title</SortButton>
                </span>
            </div>
        );
    }
}

export default SortPanel;

SortPanel.propTypes = {
    moviesFound: PropTypes.number
};