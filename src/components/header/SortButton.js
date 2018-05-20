import React from 'react';
import { connect } from 'react-redux';
import { setSorting } from '../actions';
import PropTypes from 'prop-types';

const SortButton = ({ active, children, onClick }) => (
    <button
        onClick={onClick}
        disabled={active}
    >
        {children}
    </button>
);

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.criterion === state.sortBy,
});

const mapDispatchToProps = (dispatch, props) => ({
    onClick: () => dispatch(setSorting(props.criterion))
});

SortButton.propTypes = {
    active: PropTypes.bool,
    children: PropTypes.string,
    onClick: PropTypes.func
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SortButton);
