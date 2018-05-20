import React, { Component } from 'react';
import SortButton from './SortButton.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class SortPanel extends Component {
    render () {
        return (
            <div>
                <span>{this.props.moviesFound} movies found</span>
    
                <p>
                    <label>
                    Sort by:
                        <SortButton criterion='release_date'>release date</SortButton>
                        <SortButton criterion='title'>title</SortButton>
                    </label>
                </p>
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