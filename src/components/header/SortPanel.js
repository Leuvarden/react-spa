import React, { Component } from 'react';
import SortButton from './SortButton.js';
import { connect } from 'react-redux';
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
                        <SortButton criterion='release_date'>release date</SortButton>
                        <SortButton criterion='title'>title</SortButton>
                    </label>
                </span>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { moviesFound: state.data.data ? state.data.data.length : 0};
};

export default connect(mapStateToProps)(SortPanel);

SortPanel.propTypes = {
    moviesFound: PropTypes.number
};